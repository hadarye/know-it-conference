import './ParticipantsPreview.styles.css'
import { useNavigate } from 'react-router-dom';
import arrow from '../../media/images/arrow.png';
import person1 from '../../media/images/people/erik.jpg';
import person2 from '../../media/images/people/gila.jpg';
import person3 from '../../media/images/people/yuval.jpeg';
import person4 from '../../media/images/people/aviramdaniel.png';
import person5 from '../../media/images/people/snir.jpg';
import person6 from '../../media/images/people/mia.png';
import person7 from '../../media/images/people/shirlee.jpg';
import person8 from '../../media/images/people/Elad_Darmon.jpeg';
import fillerman from '../../media/images/man.svg';
import fillerwoman from '../../media/images/woman.svg';

const ParticipantsPreview = () => {
    const navigate = useNavigate();
    const PEOPLE = [
        {
            "src": person7,
            "name": "",
            "title": ""
        },
        {
            "src": person8,
            "name": "",
            "title": ""
        },
        {
            "src": person3,
            "name": "",
            "title": ""
        },
        {
            "src": person2,
            "name": "",
            "title": ""
        },
        {
            "src": person1,
            "name": "",
            "title": ""
        },
        {
            "src": person4,
            "name": "",
            "title": ""
        },
        {
            "src": person5,
            "name": "",
            "title": ""
        },
        {
            "src": person6,
            "name": "",
            "title": ""
        },
        
    ]
    return (
        <>
            <h1 className='white-text header header-people'>המרצים שלנו:</h1>
            <div className='people-container'>

                {PEOPLE.map((element, index) => (
                    <div className='person' key={index} style={{ backgroundImage: `url(${element.src})` }}></div>
                ))}
            </div>
            <div className='see-more'>
                    <p className='white-text see-text' onClick={() => {navigate("/lectures"); }}>צפו בעוד</p>
                    <img className='arrow' src={arrow}></img>
            </div>
        </>
    );
}

export default ParticipantsPreview;