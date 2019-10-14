import React, { Component } from "react";

class Skills extends Component {
    listItems = {
        skills: [
            "ASP.NET Core",
            "C#",
            "MVC/MVVM",
            "WebAPI/REST",
            "JavaScript",
            "JQuery/Ajax",
            "JSON",
            "KnockoutJS",
            "AngularJS/NodeJS",
            "Express",
            "ReactJS",
            "Bootstrap/JQueryUI",
            "HTML5/CSS3",
            "PHP MySQL",
            "CGI Perl",
            "XML/DTD/XSLT",
            "WCF/SOA",
            "WSDL/SOAP",
            "ORM/Entity Framework",
            "LINQ-Objects",
            "LINQ-SQL/XML/Entities",
            "MSSQL 2K-2016",
            "Business Intelligence",
            "SSRS/SSIS",
            "TSQL/SPROCs/Script",
            "Cloud (AZURE)"
        ]
    };

    render() {
        return (
            <React.Fragment>
                <h4 className="c">Skills and Abilities</h4>

                <p id="mainskills" className="strong c">
                    {this.listItems.skills.map(skill => (
                        <span key={skill}>{skill}</span>
                    ))}
                </p>
            </React.Fragment>
        );
    }
}

export default Skills;
