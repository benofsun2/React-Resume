import React, { Component } from "react";

class Navbar extends Component {
    listItems = {
        items: ["home", "portfolio", "references", "about"]
    };

    render() {
        return (
            <React.Fragment>
                <nav>
                    {this.listItems.items.map(item => (
                        <span key={item}>
                            <a href="#top">{item}</a>
                            <kbd>|</kbd>
                        </span>
                    ))}
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;
