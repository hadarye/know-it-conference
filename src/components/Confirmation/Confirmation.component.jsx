import './Confirmation.styles.css'
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
    const navigate = useNavigate();
    return(
        <div className='confirmation-container'>
            <div className='confirmation-card'>
                <h1 className='confirmation-title'>הרשמתך נקלטה במערכת!</h1>
                <button className='sign-btn pointer' onClick={() => navigate("/home")}>חזרה לדף הראשי</button>
            </div>
        </div>
    )
}

export default Confirmation;