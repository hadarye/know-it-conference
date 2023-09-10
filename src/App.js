import { Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage/MainPage.component';
import NavBar from "./components/NavBar/NavBar.component";
import Menu from "./components/Menu/Menu.component";
import Registration from './components/Registration/Registration.component';
import ParticipantsPage from "./components/ParticipantsPage/ParticipantsPage.component";
import ContactInfo from "./components/ContactInfo/ContactInfo.component";
import { useState } from "react";
import './App.css';

function App() {
  const event_date = new Date('2023-11-08T08:00:00');
  const dateTimeAfterNumDays = event_date;
  const [isMenu, setIsMenu] = useState();
  const [isDate, setIsDate] = useState();

  const handleMenu = (isShow) => {
    if (isShow) {
      setIsMenu(true);
    } else {
      setIsMenu(false);
    }
  }

  const handleDate = (isShow) => {
    if(isShow) {
      setIsDate(true);
    } else {
      setIsDate(false);
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><NavBar isOpen={isMenu} isDate={isDate} handleMenu={handleMenu}/><Menu isOpen={isMenu} handleMenu={handleMenu}/></>}>
          <Route path="*" element={<MainPage handleDate={handleDate} targetDate={dateTimeAfterNumDays}/>}></Route>
          <Route path="contact" element={<ContactInfo/>}></Route>
          <Route path="lectures" element={<ParticipantsPage/>}></Route>
          <Route path="registration" element={<Registration/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
