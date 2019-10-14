import React from "react";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
// import "react-accessible-accordion/dist/fancy-example.css";

export default function WorkHistory() {
    let workhistory = {
        list: [
            {
                company: "Amazon - CCI",
                title: "Instructor - Front End Developer",
                sdate: "Apr 2019",
                edate: "Sep 2019",
                details:
                    "At Amazon SM1, I was responsible for instructing two classes (100+ students total) in frontend web development and mobile app development with HTML5/CSS3, Javascript and Jquery. I adopted an existing curriculum and updated examples and labs to meet current industry standards and relevant design patterns, I conducted lectures, developed lab exercises and covered agile development methodology by doing a daily scrum facilitate the timely completion of ongoing final project. I developed and proctored tests and prepared students for Microsoft certification MTA 98-375.",
                skills: ["HTML5/CSS3", "Javascript/JQuery", "VS Code/VS 2019"]
            },
            {
                company: "American Health Care - Connect Point",
                title: ".Net Developer/ Business Intelligence Developer",
                sdate: "Jul 2018",
                edate: "Oct 2018",
                details:
                    "Designed and build ad hoc reports and sub reports that filtered up top performers based on custom criteria often dependent multilevel processes. Designed and created T-SQL stored procedures and functions. Tested, refactored and optimized code. Analyzed processes and optimized queries, Indexed tables for better performance.6 Wrote technical documentation, gathered requirements, analyzed data, developed and built SSRS reports for internal business requirements and member benefit plan administration processes.",
                skills: [
                    "Complex SQL SPROC scripting",
                    "Management Studio 2017",
                    "SQL Server 2012,2016 ",
                    "SSDT 2017 for Visual Studio",
                    "SSIS for Migrations and Transformations",
                    "SSRS Reporting Services"
                ]
            },
            {
                company: "LROriginals - Developersong",
                title: "Full Stack Developer",
                sdate: "Jan 2017",
                edate: "Nov 2017",
                details:
                    "LROriginals Data migration and phased implementation of web presence and Ecommerce solution MEAN stack single page application and maintained legacy PHP/MySQL application through phases. Analyzed and Documented all design, process flow structures and use cases. Issued recommendations to client regarding necessary upgrades and requirements gathering. The following skills were used:",
                skills: [
                    "Express",
                    "NodeJS",
                    "AngularJS",
                    "MongoDB",
                    "Mongoose",
                    "Bower",
                    "PHP",
                    "MySQL"
                ]
            },
            {
                company: "McKinley Mortgage - Adecco",
                title: ".Net Web Application Developer",
                sdate: "Oct 2016",
                edate: "Jan 2017",
                details:
                    "Investment calculation / Loan payment portal for McKinnley Mortgage. For this project I designed and coded business logic, controller actions, models/view models, Service layer data contracts, interfaces, repositories and related data objects. I implemented SSRS report definitions and setup Azure cloud resources and updated build automation definition method for continuous integration. I achieved this using the following skills and technologies:",
                skills: [
                    "ASP.Net",
                    "MVC",
                    "C#",
                    "Entity Framework",
                    "Bootstrap/JQuery/AJAX/JSON",
                    "WCF/SOA",
                    "Managed IAAS/PAAS resources on Azure",
                    "SSRS reports"
                ]
            },

            {
                company: "CCPOA - Robert Half",
                title: ".Net Web Application Developer",
                sdate: "Jan 2016",
                edate: "Jun 2016",
                details:
                    "On this project, I gathered functional requirements, designed and coded solutions for features and new functionality. I deployed razor views, view-models and interfaces with data service contracts, I customized the UI with AJAX populated views and forms. I also Implemented SQL SPROCs and custom queries needed for complex relationships (examples: cross apply, WITH and CTE).",
                skills: [
                    "ASP.Net",
                    "MVC",
                    "C#",
                    "Entity Framework",
                    "JQuery/AJAX/JSON",
                    "WCF/SOA",
                    "JQueryUI",
                    "TSQL Scripting & SPROCS"
                ]
            },
            {
                company: "UCDavis - Experis",
                title: ".Net Web Application Developer",
                sdate: "Jul 2014",
                edate: "Jun 2015",
                details:
                    "The California Cancer Registry contracted with me to build the Stroke Registry. I designed and built a web application data portal for health providers and provider groups to connect and share relational data and reporting visualization of critical event response. The need for historical self/group comparison to participating facilities with differing data profiles demanded a solution that extracted data members, transformed and loaded data in warehouse with data dictionary and ETL configuration allowing relational data reports and aggregate functionality as well as export migration/transformation to other endpoints. Data dictionary definitions could be defined on inception of a new dataset at upload or in admin utility and saved for crosswalk linking to other dictionary definitions. Customized reports could be defined by admins and reporting users and feature visibility was role based administered by provider admin. The project included a custom data file processing service and a customizable data reporting admin that used report builder 3.0 and plugins for viewing reports & parts. I implemented a responsive grid layout and used JQuery UI elements. This was achieved using the following skills and technologies:",
                skills: [
                    "ASP.Net",
                    "C#",
                    "Entity Framework",
                    "JQuery/AJAX/JSON",
                    "WCF",
                    "Pragmatic BI tool bench",
                    "SSRS/SSIS",
                    "TSQL"
                ]
            },
            {
                company: "California dpt. Wildlife - PSMFC",
                title: ".Net Web Application Developer",
                sdate: "Dec 2013",
                edate: "Jun 2014",
                details:
                    "Federal Restoration Grant Skill Validation Proposal, Management and Monitoring System. I designed, implemented and deployed a web application to replace legacy Access forms system for collecting proposal application forms to be processed and awarded. Each form contained many UI elements and nested lists that were populated based on previous choices. I achieved this using the following skills and technologies:",
                skills: [
                    "ASP.Net with C#",
                    "Entity Framework",
                    "Code First Migrations",
                    "JQuery/AJAX",
                    "JQuery UI",
                    "TSQL"
                ]
            },
            {
                company: "Developersong",
                title: "Developer Consultant",
                sdate: "Jan 2013",
                edate: "Aug 2013",
                details:
                    '"Vintage Styles for Modern Fashion" I implemented and deployed a responsive website showcasing the clients tutorials and finished products along with an Ecommerce module using HTML5/CSS3. I added functionality with CGI/Perl and PHP MySql.',
                skills: [
                    "JQuery/AJAX",
                    "PHP",
                    "HTML/CSS",
                    "MySQL",
                    "Perl",
                    "CGI",
                    "WSDL/SOAP"
                ],
                details2:
                    '"Wheeler Wire Consulting" I implemented and deployed "Prepare then Share" a Multi-Level Marketing Web application that populated categories and item lists through API calls to the master system using web services. Ad clicks and product price promotions were some of the features.',
                skills2: [
                    "JQuery/AJAX",
                    "ASP.Net MVC with C#",
                    "JSON",
                    "Bootstrap",
                    "WSDL/SOAP"
                ]
            },
            {
                company: "AIRTOP Technology Group",
                title: "Application Developer Consultant",
                sdate: "Jan 2012",
                edate: "Jan 2013",
                details:
                    "At AIRTOP I served as a project lead facilitating the completion of an existing asset management system. I implemented a solution to integrate multiple 3rd party systems through API scripting and custom software to establish an automated asset recovery event tracking workflow. I brokered communication with a key 3rd party development team and managed cooperative effort to achieve a solution that was acceptable for continued use by AIRTOP. I regression tested the system intensely prior to rollout with use cases for each scenario. I achieved this using the following skills and technologies:",
                skills: ["WSPL/SOAP", "Javascript", "VBScript"]
            },
            {
                company: "Intel - Kelly IT",
                title: "Software Engineer - Contractor",
                sdate: "Dec 2010",
                edate: "Nov 2011",
                details:
                    "At Intel I implemented and deployed a Hardware testing data collection and transport system on a Service Oriented Architecture (SOA). I designed and coded interfaces and service calls, data contract serialization and data transfer to various endpoints. I debugged and tested issues with application endpoints using best practices. I developed complex SQL stored procedures with optimization for heavy dataset returns. I created SSRS Reports for highly frequented result sets and historical views. I achieved this using the following skills and technologies:",
                skills: [
                    "ASP.Net with C#",
                    "SOA",
                    "LINQ/LINQ to XML",
                    "TSQL",
                    "SSRS"
                ]
            },
            {
                company: "American Web Services",
                title: "Web Application Developer (Lead)",
                sdate: "Jan 2007",
                edate: "Nov 2010",
                details:
                    "At AWS, my position was Lead Web Application Developer. I customized and deployed CMS/Ecommerce products and performed updates and upgrades to the core class libraries and existing sites. I customized and deployed Membership Management systems and I was responsible for evaluating client business needs and processes and derive requirements, design specification and data entities as well as custom application code with stability, security and scalability in mind. I Provided training to development to interns and new programmers on our standards of excellence/best practices. I trained clients on the use of the completed products in post deployment. I achieved this using the following skills and technologies:",
                skills: [
                    "ASP.Net with C#",
                    "ADO.Net",
                    "Web Services XML/SOAP",
                    "Javascript",
                    "Ecommerce",
                    "MSSQL/DTS",
                    "TSQL"
                ]
            },
            {
                company: "Enterprise Software Solutions",
                title: "Web Application Developer",
                sdate: "Jan 2005",
                edate: "Jan 2007",
                details:
                    "At ESS I was on a development team that was responsible for developing a major State of California contract to build a system providing Disaster preparedness plans. I analyzed requirements, provided mock prototypes, maintain use case scenarios, built tests from use cases. While on the UI team, I Integrated the HTML markup into the aspect code. Extensive exposure to MVC Design pattern and Test-driven development philosophies. I was responsible for maintaining legacy ASP, PHP public forward facing and intranet sites; managed client expectation in the design of new systems and support of existing systems. I was responsible for many cyclical data processes. At ESS I created solutions with special requested technologies like XML with XSLT to act as data and stylized offline browser content. I maintained systems devoted to broadcast email services to client membership lists and used that experience to design the next generation of those systems. I maintained the project point of contact with many clients for ESS as well as requirements discovery and analysis. This was achieved using the following skills and technologies:",
                skills: [
                    "ASP Classic",
                    "VB Script",
                    "PHP/Perl",
                    "Javascript",
                    "DHTML/XHTML/CSS",
                    "ASP.Net with C#",
                    "ADO.Net",
                    "XML/XSLT",
                    "MVC",
                    "DTS/TSQL"
                ]
            }
        ]
    };

    return (
        <Accordion allowZeroExpanded={true}>
            {workhistory.list.map(item => (
                <AccordionItem key={item.company}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {item.company}
                            <span key={item.sdate} className="fright">
                                {item.sdate} - {item.edate}
                            </span>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <span className="title" key={item.title}>
                            {item.title}
                        </span>
                        <p key={item.edate}>{item.details}</p>
                        <ul>
                            {item.skills.map(bullet => (
                                <li key={bullet}>{bullet}</li>
                            ))}
                        </ul>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
