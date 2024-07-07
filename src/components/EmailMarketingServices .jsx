import React, { useState } from 'react';
import emailImg from '../images/email marketing.png'
const EmailMarketingServices = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="flex flex-col items-center bg-gray-50 p-5 md:px-20">
      <div className=" flex flex-col md:flex-row">
        <div className="md:w-1/3 flex pb-5 justify-center items-center">
          <img src={emailImg} alt="Email Icon" className="" />
        </div>
        <div className="md:w-2/3 pt-5 pl-6 md:pl-20">
          <h3 className="text-2xl font-semibold">Email Marketing Services</h3>
          <hr className="my-4 border-t-2 border-gray-200" />
          <p className="text-gray-700 text-xs md:text-base mb-4">
            Think email marketing is outdated? Think again. Email marketing remains one of the most effective ways to connect with your audience and drive results. With our email marketing services, we’ll help you craft attention-grabbing campaigns that land right in your customers’ inboxes. From compelling subject lines to personalized content, we’ll make sure your emails stand out and drive action. Whether you’re looking to promote a new product, nurture leads, or re-engage inactive subscribers, we’ve got the expertise to make it happen. Say hello to higher open rates, click-throughs, and conversions with our email marketing magic.
          </p>
          <div>
            <div className="flex pt-10 justify-center mb-4">
              <ul className="flex ">
                <li
                  className={`py-2 px-4 md:px-6 text-xl md:text-2xl rounded-sm cursor-pointer ${activeTab === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                  onClick={() => setActiveTab(1)}
                >
                  Step: 1
                </li>
                <li
                  className={`py-2 px-4 md:px-6 text-xl md:text-2xl rounded-sm cursor-pointer ${activeTab === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                  onClick={() => setActiveTab(2)}
                >
                  Step: 2
                </li>
                <li
                  className={`py-2 px-4 md:px-6 text-xl md:text-2xl rounded-sm cursor-pointer ${activeTab === 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                  onClick={() => setActiveTab(3)}
                >
                  Step: 3
                </li>
              </ul>
            </div>
            <div className="p-4 bg-green-100 rounded-lg text-sm md:text-base">
              {activeTab === 1 && (
                <p className="text-gray-700">
                  Figure out what you want to achieve with your emails, like getting more sales or keeping people updated. Then, think about who you’re sending them to – your audience. What do they like? What do they need?
                </p>
              )}
              {activeTab === 2 && (
                <p className="text-gray-700">
                  Ask people to sign up for your emails. You can do this on your website, social media, or when they buy something from you. Give them a reason to sign up, like a discount or cool stuff they’ll get in their inbox.
                </p>
              )}
              {activeTab === 3 && (
                <p className="text-gray-700">
                  Write emails that people want to read. Make them personal and friendly. Use catchy subject lines, tell stories, and show off cool pictures. And don’t forget to tell people what you want them to do next, like click a link or reply to you.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailMarketingServices;
