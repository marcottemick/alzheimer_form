import { NavLink } from "react-router-dom";

const Header = ({ }) => {
    return (
        <div 
        data-testid="header"
        className="bg-blue-400 h-14 flex justify-between items-center px-3.5">
            <NavLink to="/"><p data-testid="cypress-title">Ailzheimer Form Detect</p></NavLink>
            <ul>
                <NavLink to="antecedents">
                    <li>Antécédents</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Header;