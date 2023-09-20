import './ParticipantsPreview.styles.css'
import { useNavigate } from 'react-router-dom';
import PersonPreview from '../PersonPreview/PersonPreview.component';
import arrow from '../../media/images/arrow.png';
import eliran from '../../media/images/people/eliran.png';
import yael from '../../media/images/people/yael.jpg'
import erik from '../../media/images/people/erik.jpg';
import gila from '../../media/images/people/gila.jpg';
import daniel from '../../media/images/people/daniel_hackathon.jpg';
import snir from '../../media/images/people/snir.jpg';
import adi from '../../media/images/people/mia.png';
import yaniv from '../../media/images/people/yaniv.jpg';
import yonatan from '../../media/images/people/yonatan.jpeg';
import aviv from '../../media/images/people/aviv.jpg';
import dana from '../../media/images/people/dana.png';
import nir from '../../media/images/people/nir.jpg';
import orit from '../../media/images/people/orit.jpg';
import nethanel from '../../media/images/people/nethanel.jpg';
import eden from '../../media/images/people/eden.png';
import leaKeren from '../../media/images/people/lea+karan.png';

const ParticipantsPreview = () => {
    const navigate = useNavigate();
    const PEOPLE = [
        {
            "src": gila,
            "name": "פרופ' גילה קורץ",
            "topic": "אבולוציה אקדמאית",
            "font-size": "1rem",
        },
        {
            "src": adi,
            "name": "עדי ליבנה",
            "topic": "מידה שמייצרת כוכבים בעיניים",
        },
        {
            "src": orit,
            "name": 'אורית ברוידס',
            "topic": "חדשנות: איך להישאר רלוונטים בעולם משתנה?",
        },
        {
            "src": eliran,
            "name": "אלירן שקולניק",
            "topic": "המהפכה המלאכותית",
        },
        {
            "src": yael,
            "name": "יעל פלד",
            "topic": "ניצחון טכני",
        },
        {
            "src": erik,
            "name": "אריק אינגבר",
            "topic": "AI works for me",
        },
        // {
        //     "src": daniel,
        //     "name": "דניאל אנדרסון",
        //     "topic": "שיטת Agile בתהליכי למידה",
        // },
        // {
        //     "src": snir,
        //     "name": 'פיינשטיין שניר',
        //     "topic": "הטמעת תוצרי הדרכה",
        // },
        {
            "src": yaniv,
            "name": "יניב קרמר",
            "topic": "משאבי אנוש בעולם החדש",
        },
        // {
        //     "src": yonatan,
        //     "name": "יונתן חצור",
        //     "topic": "איך לגרום לאחרים להזיז הרים",
        // },
        {
            "src": dana,
            "name": "דנה הורוביץ",
            "topic": "פורמולת S4",
        },
        {
            "src": nir,
            "name": 'ניר כהן',
            "topic": "מגמגום לדיבור",
        },
        {
            "src": nethanel,
            "name": 'נתנאל רייכר',
            "topic": "כיצד מעשירים את תהליכי ההדרכה ומגשרים בין ההדרכה לתהליכי הליווי בביצוע?",
        },
        {
            "src": eden,
            "name": 'עדן ביבס',
            "topic": "איך להשתמש נכון בצ'אט GPT?",
        },
        {
            "src": leaKeren,
            "name": 'ליאה אפגין וקארן קמנצקי',
            "topic": "מכפיל כוח",
            "font-size": "1rem",
        },
        {
            "src": aviv,
            "name": "אביב ואנונו",
            "topic": "אביב ואנונו | בקיצור, בואו נפתח הדרכה בAI",
        }
        
    ]
    return (
        <>
            <h1 className='white-text header header-people'>המרצים והמרצות שלנו:</h1>
            <div className='people-container'>
                {PEOPLE.map((element, index) => (
                    <PersonPreview font={element['font-size']} topic={element.topic} name={element.name} key={index} bg={element.src}></PersonPreview>
                ))}
            </div>
            <div className='see-more' onClick={() => {navigate("/lectures");  window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}>
                    <p className='white-text see-text'>צפו בעוד</p>
                    <img className='arrow' src={arrow}></img>
            </div>
        </>
    );
}

export default ParticipantsPreview;