import React from 'react';

const TermsAndConditions = () => { 
  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Terms and Conditions</h1>  
        <p>Welcome to Divine Infotech. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our services.</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-6">General</h2>
        <ul className="list-disc ml-6">
          <li>These terms and conditions govern your use of our website and the services we offer, including courses in Full Stack Web Development, Mastering the MERN Stack, Android App Development Bootcamp, Fundamentals of Game Development, Advanced UI/UX Design Techniques, Data Analysis with Python, Full Stack Python Development, Advanced Java Programming, Fundamentals of C, C++, Python, and Java, Digital Marketing Essentials, Git and GitHub Essentials, Introduction to Prompt Engineering, Advanced Stock Trading Techniques, and Mastering Tally Prime with GST.</li>
          <li>By using our services, you agree to these terms and conditions in full. If you disagree with any part of these terms and conditions, you must not use our website.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6">User Data Protection</h2>
        <ul className="list-disc ml-6">
          <li>We are committed to protecting your privacy. All personal data collected through our website will be processed in accordance with our Privacy Policy.</li>
          <li>We implement appropriate technical and organizational measures to ensure the security of your personal data against unauthorized access, alteration, disclosure, or destruction.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6">Course Availability</h2>
        <ul className="list-disc ml-6">
          <li>We strive to provide accurate and up-to-date information regarding course availability. However, course offerings are subject to change without prior notice.</li>
          <li>We reserve the right to cancel or reschedule courses due to unforeseen circumstances. In such cases, we will notify you promptly and offer alternative options or a full refund.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6">Payment Policies</h2>
        <ul className="list-disc ml-6">
          <li>Payment for courses and services must be made in full at the time of registration or as specified during the checkout process.</li>
          <li>All fees or advance payments made by the client are refundable as per our <a href="/refundpolicy"><span className=' font-medium underline underline-offset-4 decoration-gray-600'>refund policy.</span></a> </li>
          <li>We accept various payment methods, including credit/debit cards and online payment platforms. By providing your payment information, you represent and warrant that you are authorized to use the chosen payment method.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6">Intellectual Property Rights</h2>
        <ul className="list-disc ml-6">
          <li>All content, materials, and services provided on our website, including but not limited to text, graphics, logos, images, and course materials, are the intellectual property of Divine Infotech or our licensors.</li>
          <li>You may not reproduce, distribute, modify, or create derivative works of any content or materials on our website without our prior written consent.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6">Cancellation and Refund Policies</h2>
        <ul className="list-disc ml-6">
          <li>Clients may cancel their registration for a course or service by providing written notice to Divine Infotech. The effective date of the cancellation will be the date we receive your notice.</li>
          <li>Any fees or advance payments made by the client are refundable as follows:
            <ul className="list-disc ml-6">
              <li>Cancellations made more than 7 days before the course start date: Full refund.</li>
              <li>Cancellations made within 7 days of the course start date: 50% refund.</li>
              <li>Cancellations made after the course start date: No refund.</li>
            </ul>
          </li>
          <li>In the event that we cancel a course or service, you will be entitled to a full refund of any fees or advance payments made.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6">Disclaimers</h2>
        <ul className="list-disc ml-6">
          <li>Our website and services are provided on an "as is" and "as available" basis. We do not warrant that our website or services will be uninterrupted, error-free, or free from viruses or other harmful components.</li>
          <li>We are not responsible for any technical issues or disruptions that may affect your access to our website or services.</li>
          <li>We reserve the right to modify, suspend, or discontinue any part of our website or services at any time without prior notice.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6">Limitation of Liability</h2>
        <ul className="list-disc ml-6">
          <li>To the maximum extent permitted by law, Divine Infotech shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of our website or services.</li>
          <li>Our total liability to you for any claims arising from your use of our website or services shall not exceed the amount paid by you for the relevant course or service.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6">Governing Law</h2>
        <ul className="list-disc ml-6">
          <li>These terms and conditions shall be governed by and construed in accordance with the laws of [Jurisdiction].</li>
          <li>Any disputes arising out of or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts of [Jurisdiction].</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6">Contact Information</h2>
        <p>If you have any questions or concerns regarding these terms and conditions, please contact us at <a href="mailto: divineinfotech.edu@gmail.com"><span className=' font-medium hover:underline underline-offset-4 decoration-gray-600'>divineinfotech.edu@gmail.com</span></a> </p>

        
      </div>
  
    </div>
  );
};

export default TermsAndConditions;
