import './ParticipantsPreview.styles.css'
import { useNavigate } from 'react-router-dom';
import arrow from '../../media/images/arrow.png';
import eliran from '../../media/images/people/eliran.png';
import yael from '../../media/images/people/yael.jpg'
import erik from '../../media/images/people/erik.jpg';
import gila from '../../media/images/people/gila.jpg';
import daniel from '../../media/images/people/daniel_hackathon.jpg';
import snir from '../../media/images/people/snir.jpg';
import mia from '../../media/images/people/mia.png';
import yaniv from '../../media/images/people/yaniv.jpg';
import yonatan from '../../media/images/people/yonatan.jpeg';
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
            "src": eliran,
            "name": "",
            "title": ""
        },
        {
            "src": yael,
            "name": "",
            "title": ""
        },
        {
            "src": erik,
            "name": "",
            "title": ""
        },
        {
            "src": gila,
            "name": "",
            "title": ""
        },
        {
            "src": daniel,
            "name": "",
            "title": ""
        },
        {
            "src": snir,
            "name": "",
            "title": ""
        },
        {
            "src": mia,
            "name": "",
            "title": ""
        },
        {
            "src": yaniv,
            "name": "",
            "title": ""
        },
        {
            "src": yonatan,
            "name": "",
            "title": ""
        },
        {
            "src": dana,
            "name": "",
            "title": ""
        },
        {
            "src": nir,
            "name": "",
            "title": ""
        },
        {
            "src": orit,
            "name": "",
            "title": ""
        },
        {
            "src": nethanel,
            "name": "",
            "title": ""
        },
        {
            "src": eden,
            "name": "",
            "title": ""
        },
        {
            "src": leaKeren,
            "name": "",
            "title": ""
        }
        
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