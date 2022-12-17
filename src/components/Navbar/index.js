import { NavLink } from 'react-router-dom';
import menuicon from '../../images/menuicon.png'
const Navbar = () => {
    return(
        <div className='navbar' id='navbar'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <div className="icon" onClick={navbarResponsiveness}>
                <img src={menuicon} alt="Menu"/>
            </div>
        </div>
    );
};
function navbarResponsiveness(e){
    e.preventDefault();
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
export default Navbar;