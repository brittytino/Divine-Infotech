import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold underline underline-offset-4 decoration-gray-700 text-gray-900 mb-6">Refund Policy</h1>
        <p>At Divine Infotech, we strive to ensure your satisfaction with our courses and services. If you are not satisfied with your purchase, you may be eligible for a refund as outlined in this Refund Policy.</p>
        
        <h2 className="text-2xl font-bold text-gray-800 mt-6">Refund Eligibility</h2>
        <ul className="list-disc ml-6">
          <li>Any fees or advance payments made by the client are refundable under the following conditions:
            <ul className="list-disc ml-6">
              <li>Cancellations made more than 7 days before the course start date: Full refund.</li>
              <li>Cancellations made within 7 days of the course start date: 50% refund.</li>
              <li>Cancellations made after the course start date: No refund.</li>
            </ul>
          </li>
          <li>If we cancel a course or service, you will be entitled to a full refund of any fees or advance payments made.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6">Refund Process</h2>
        <ul className="list-disc ml-6">
          <li>To request a refund, please contact us at divineinfotech.edu@gmail.com with your order details and reason for cancellation.</li>
          <li>Refunds will be processed within 5-7 business days of receiving your request and will be issued using the original payment method.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-6">Contact Information</h2>
        <p>If you have any questions or concerns regarding this Refund Policy, please contact us at divineinfotech.edu@gmail.com </p>

        <p className="mt-4">By enrolling in our courses or using our services, you agree to this Refund Policy. If you do not agree with this policy, please do not use our website.</p>
      </div>
    </div>
  );
};

export default RefundPolicy;
