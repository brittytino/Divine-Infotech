import React, { useState } from "react";
import { useEffect } from "react";
import contactImg from "../images/contact.svg";

const ContactForm = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    purpose: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Valid email is required";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      formErrors.phone = "Valid 10-digit phone number is required";
    if (!formData.experience) formErrors.experience = "Please select an experience";
    if (!formData.purpose) formErrors.purpose = "Please select a purpose of contact";
    if (formData.purpose === "Other" && !formData.message)
      formErrors.message = "Please provide details for 'Other'";

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Web3Form submission logic
      const formUrl = "https://api.web3forms.com/submit";
      const formId = "5203fa70-07f3-4c97-9ede-b414c14b7e68"; // Replace with your Web3Forms ID
      const data = {
        access_key: formId,
        ...formData,
      };

      try {
        const response = await fetch(formUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          // WhatsApp message sending
          const whatsappMessage = `
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Experience: ${formData.experience}
            Purpose: ${formData.purpose}
            ${formData.message ? `Message: ${formData.message}` : ""}
          `.trim();

          const whatsappUrl = `https://wa.me/919042621178?text=${encodeURIComponent(
            whatsappMessage
          )}`;
          window.open(whatsappUrl, "_blank");

          // Show modal
          setShowModal(true);

          // Reset form after successful submission
          setFormData({
            name: "",
            email: "",
            phone: "",
            experience: "",
            purpose: "",
            message: "",
          });
          setShowMessageBox(false);
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));

    // Show message input box when "Other" is selected
    if (name === "purpose" && value === "Other") {
      setShowMessageBox(true);
    } else if (name === "purpose") {
      setShowMessageBox(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff6f3] p-3 md:p-4">
      <div className="flex flex-col md:flex-row rounded-lg  overflow-hidden max-w-6xl w-full">
        {/* Left side image placeholder */}
        <div className=" md:flex justify-center hidden  items-center">
          <img src={contactImg} alt="Contact Us" className="w-full h-auto" />
        </div>

        {/* Right side form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Have questions? <br /> Request a call from our counselors.
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-600">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-600">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-600">Phone Number *</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md bg-gray-200 text-gray-700 border border-r-0 border-gray-300">
                  🇮🇳
                </span>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-r-lg focus:outline-none ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter phone number"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-gray-600">Experience *</label>
              <div className="space-y-2">
                <div>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="experience"
                      value="technical"
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Working professional - Technical roles
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="experience"
                      value="non-technical"
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Working professional - Non technical
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="experience"
                      value="final-year"
                      onChange={handleChange}
                      className="mr-2"
                    />
                    College student - Final year
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="experience"
                      value="pre-final-year"
                      onChange={handleChange}
                      className="mr-2"
                    />
                    College student - 1st to pre-final year
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="experience"
                      value="others"
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Others
                  </label>
                </div>
              </div>
              {errors.experience && (
                <p className="text-red-500 text-sm">{errors.experience}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-600">Purpose of Contact *</label>
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                  errors.purpose ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select Purpose</option>
                <option value="Full stack Development">Full stack Development</option>
                <option value="Python for Data science">Python for Data Science</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Resume Building">Resume Building</option>
                <option value="Other">Other</option>
              </select>
              {errors.purpose && (
                <p className="text-red-500 text-sm">{errors.purpose}</p>
              )}
            </div>

            {showMessageBox && (
              <div className="mb-4">
                <label className="block text-gray-600">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your message here..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
            )}

            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#f66c3b] text-white rounded-lg hover:bg-[#f8916c] transition duration-300 ease-in-out"
            >
              Request callback
            </button>
            <p className="text-gray-400 text-xs pt-2">I authorise Divine Infotech to contact me with course updates & offers via Email/SMS/Whatsapp/Call.</p>

          </form>
        </div>
      </div>

      {/* Modal for Success Message */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800">Form Submitted!</h3>
            <p className="mt-2 text-gray-600">Thank you for reaching out. We will get back to you soon!</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
