import './Menu.styles.css'
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import man from '../../media/images/menu-icon-man.png'
import form from '../../media/images/menu-icon-form.png'
import home from '../../media/images/home.png'
import contact from '../../media/images/contact.png'

const Menu = (props) => {
  const menuRef = useRef();
  const navigate = useNavigate();

  // opens and closes menu
  useEffect(() => {
    if (props.isOpen) {
      menuRef.current.classList.remove("close");
      menuRef.current.classList.add("open");
    } else if (props.isOpen === false) {
      menuRef.current.classList.remove("open");
      menuRef.current.classList.add("close");
    }
  }, [props.isOpen]);

  const handleClose = () => {
    menuRef.current.classList.remove("open");
    menuRef.current.classList.add("close");
    props.handleMenu(false);
  }

  return (
    <div className='menu-container' ref={menuRef} >
      <div className="menu">
        <div className='menu-item' onClick={() => {handleClose(); navigate("/home"); window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
          <img className='menu-item-icon' src={home} />
          <div className='menu-item-header'>ראשי</div>
        </div>
        <div className='menu-item' onClick={() => {handleClose(); navigate("/lectures"); window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
          <img className='menu-item-icon' src={man} />
          <div className='menu-item-header'>רשימת המרצים</div>
        </div>
        <div className='menu-item'  onClick={() => {handleClose(); navigate("/registration"); window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
          <img className='menu-item-icon' src={form} />
          <div className='menu-item-header'>הרשמה - חינם!</div>
        </div>
        <div className='menu-item' onClick={() => {handleClose(); navigate("/contact"); window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
          <img className='menu-item-icon' src={contact} />
          <div className='menu-item-header'>צור קשר</div>
        </div>
      </div>
    </div>

  );
}

export default Menu;