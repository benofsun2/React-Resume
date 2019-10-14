import React, { Component } from "react";
import WorkHistory from "./accordian";
import Skills from "./skills";
import Navbar from "./navbar";
import banner from "./benreedbanner.gif";

class Layout extends Component {
    data = {
        profile:
            "Detail-oriented .NET Software Engineer with 12 years of experience designing and implementing solutions for  enterprise level business applications, using state of the art industry standards for patterns and practices, development life cycle and data access with separation of concerns in mind. I am a natural leader with a positive attitude and excellent communication skills. I have experience as an independent specialist, a team member and a team lead."
    };

    render() {
        return (
            <React.Fragment>
                <main>
                    <header id="top">
                        <img src={banner} alt="header" />
                        <div className="fix top"></div>
                    </header>

                    <Navbar />

                    <aside>
                        <Skills />
                    </aside>

                    <article>
                        <h4>Profile</h4>

                        <p>{this.data.profile}</p>

                        <h4>Work Experience</h4>

                        <WorkHistory />
                    </article>

                    <footer>
                        <p>Copyright &copy; 2020 Developersong@gmail.com</p>
                    </footer>
                </main>
            </React.Fragment>
        );
    }
}

export default Layout;
