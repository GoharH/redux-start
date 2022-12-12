import React from "react";
import './style.scss';
import { NavLink } from "react-router-dom";

const Header = () => {


    return <div>
        <div className="header-nav-list">
            <ul>
                <li>
                    <NavLink to={"/user"}>Create User</NavLink>
                </li>
                <li>
                    <NavLink to={"/box"}>Create Box</NavLink>
                </li>
            </ul>
        </div>
    </div>
}
export default Header