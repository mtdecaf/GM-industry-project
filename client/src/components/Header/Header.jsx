
import { Component } from "react";
import "./Header.scss"


class Header extends Component {
    render() {
        return (
            <div className="header">
                <span className="header__logo header__component">logo</span>
                <span className="header__title header__component">GM rewards</span>
                <span className="header__burger-menu header__component">
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect width="100" height="10"></rect>
                        <rect y="30" width="100" height="10"></rect>
                        <rect y="60" width="100" height="10"></rect>
                    </svg>
                </span>

            </div>
        );
    }
}

export default Header;