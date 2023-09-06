import './NavBar.styles.css'
import menu from '../../media/images/menu.png';
import LOGO from '../../media/images/KNOWIT-LOGO.svg';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

const NavBar = (props) => {
  const navigate = useNavigate();
  const navIconRef = useRef();
  const [isInViewDate, setIsInViewDate] = useState(true);
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    setIsInViewDate(props.isDate);
  }, [props.isDate]);

  useEffect(() => {
    setIsMenu(props.isOpen);
    navIconRef.current.classList.toggle("open-nav");
  }, [props.isOpen]);

  const handleMenuBtn = () => {
    if(isMenu) {
      props.handleMenu(false);
      setIsMenu(false);
    } else {
      props.handleMenu(true);
      setIsMenu(true);
    }
  }
  
  return (
    <div className="nav-bar">
      <div className="split-color nav-bar-container">
      <motion.div style={{ opacity: isInViewDate ? 1 : 0, transition: "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1)"}}>
        <h2 className='header-date'>8.11.2023</h2>
        </motion.div>
      </div>
      <div className='icon-container nav-bar-container'>
        <div className='nav-icon open-nav' ref={navIconRef} onClick={() => { handleMenuBtn();}}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* <img src={menu} className='menu-icon pointer' onClick={() => props.handleMenu()}/> */}
        <img src={LOGO} onClick={() => navigate("/home")} className='know-it-logo pointer'/>
      </div>
      <Outlet></Outlet>

    </div>
  );
}

export default NavBar;