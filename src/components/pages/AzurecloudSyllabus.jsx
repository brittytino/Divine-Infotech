import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';



const syllabus = [
    {
      phase: "Phase 1: Introduction to Azure Fundamentals (Days 1-5)",
      topics: [
        {
          title: "Understanding Cloud Computing",
          details: [
            "Introduction to cloud computing concepts",
            "Overview of Azure and its services",
            "Benefits of using Azure for businesses",
          ],
        },
        {
          title: "Getting Started with Azure",
          details: [
            "Creating an Azure account and subscription",
            "Navigating the Azure portal and resources",
            "Azure pricing models and cost management",
          ],
        },
        {
          title: "Azure Virtual Machines (VMs)",
          details: [
            "Creating and managing Azure VMs",
            "Configuring VM sizes, images, and extensions",
            "Deploying applications on Azure VMs",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Azure Networking and Security (Days 6-10)",
      topics: [
        {
          title: "Azure Networking Fundamentals",
          details: [
            "Virtual Networks (VNets) and subnets",
            "Azure Load Balancer and Application Gateway",
            "Implementing Azure DNS and Traffic Manager",
          ],
        },
        {
          title: "Securing Azure Resources",
          details: [
            "Azure Active Directory (AAD) basics",
            "Role-based access control (RBAC)",
            "Implementing network security groups (NSGs)",
          ],
        },
        {
          title: "Monitoring and Diagnostics in Azure",
          details: [
            "Azure Monitor and Application Insights",
            "Setting up alerts and metrics in Azure",
            "Troubleshooting Azure applications",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Azure Storage Solutions (Days 11-15)",
      topics: [
        {
          title: "Azure Storage Accounts",
          details: [
            "Overview of Azure storage types",
            "Blob storage, file storage, and disk storage",
            "Managing Azure storage accounts and access",
          ],
        },
        {
          title: "Azure SQL Database",
          details: [
            "Creating and managing Azure SQL databases",
            "Implementing data security and backups",
            "Scaling and performance tuning SQL databases",
          ],
        },
        {
          title: "Azure Cosmos DB and NoSQL Databases",
          details: [
            "Introduction to Azure Cosmos DB",
            "Using Cosmos DB for global distribution",
            "Choosing the right NoSQL database for your application",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: Deploying Applications on Azure (Days 16-20)",
      topics: [
        {
          title: "Azure App Service",
          details: [
            "Creating and deploying web apps using Azure App Service",
            "Managing app settings and deployment slots",
            "Scaling and configuring auto-scaling for App Service",
          ],
        },
        {
          title: "Serverless Computing with Azure Functions",
          details: [
            "Creating serverless functions in Azure",
            "Event-driven programming with Azure Functions",
            "Integration with other Azure services",
          ],
        },
        {
          title: "Containerization with Azure Kubernetes Service (AKS)",
          details: [
            "Introduction to containers and Docker",
            "Deploying applications using AKS",
            "Managing Kubernetes clusters and deployments",
          ],
        },
      ],
    },
    {
      phase: "Phase 5: Advanced Azure Topics and Capstone Project (Days 21-30)",
      topics: [
        {
          title: "Advanced Azure Services",
          details: [
            "Azure DevOps and CI/CD pipelines",
            "Machine Learning and AI services in Azure",
            "Big Data solutions with Azure HDInsight and Databricks",
          ],
        },
        {
          title: "Security and Compliance in Azure",
          details: [
            "Implementing Azure security best practices",
            "Data encryption and compliance standards",
            "Auditing and monitoring Azure resources",
          ],
        },
        {
          title: "Capstone Project: Design and Deploy a Comprehensive Azure Solution",
          details: [
            "Planning and architecture design for an Azure project",
            "Implementation of the project using Azure services",
            "Presentation and evaluation of the Azure solution",
          ],
        },
      ],
    },
  ];
  

  const AzurecloudSyllabus = () => {
    const [openSections, setOpenSections] = useState(new Array(syllabus.length).fill(false));
    const contentRefs = useRef([]);
  
    const toggleSection = (index) => {
      setOpenSections((prevOpenSections) =>
        prevOpenSections.map((isOpen, i) => (i === index ? !isOpen : isOpen))
      );
    };
  
    return (
      <div className="max-w-7xl mx-auto py-8 px-2 sm:px-6 lg:px-8">
        <h2 className="md:text-3xl text-2xl font-semibold mb-6">Course Syllabus</h2>
        <div className="space-y-4">
          {syllabus.map((phase, index) => (
            <div key={index} className="border border-gray-300 rounded-lg shadow-sm">
              <div
                className="flex items-center justify-between bg-gray-200 px-4 py-3 cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                <h3 className="md:text-xl text-sm font-medium">{phase.phase}</h3>
                {openSections[index] ? (
                  <FaChevronUp className="text-xl" />
                ) : (
                  <FaChevronDown className="text-xl" />
                )}
              </div>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                  openSections[index] ? 'max-h-screen' : 'max-h-0'
                }`}
                style={{ transitionProperty: 'max-height' }}
              >
                <div className="bg-white px-4 py-3">
                  {phase.topics.map((topic, idx) => (
                    <div key={idx} className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-700">{topic.title}</h4>
                      <ul className="list-disc list-inside pl-4 mt-2 space-y-2">
                        {topic.details.map((detail, i) => (
                          <li key={i} className="text-gray-600">{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default AzurecloudSyllabus;