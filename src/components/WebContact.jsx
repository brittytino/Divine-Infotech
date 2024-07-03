import React from "react";

function ContactWeb() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5203fa70-07f3-4c97-9ede-b414c14b7e68");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("You will be contacted soon ! Thank you for your message.");
      event.target.reset();
    } else {
      console.log("Error sending your response, try here directly - divineinfotech.edu@gmail.com", data);
      setResult(data.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto py-6 ">
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name *</label>
          <input type="text" name="name" id="name" className="w-full p-3 border rounded-lg" placeholder="Your Name" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email *</label>
          <input type="email" name="email" id="email" className="w-full p-3 border rounded-lg" placeholder="Your Email" required />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700">Subject *</label>
          <input type="text" name="subject" id="subject" className="w-full p-3 border rounded-lg" placeholder="Subject" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Comment or Message *</label>
          <textarea name="message" id="message" className="w-full p-3 border rounded-lg" rows="5" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold">Send</button>
      </form>
      <span className="block mt-4 text-gray-700">{result}</span>
    </div>
  );
}

export default ContactWeb;
