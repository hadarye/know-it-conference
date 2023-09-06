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
        },
        {
            "src": yael,
        },
        {
            "src": erik,
        },
        {
            "src": gila,
        },
        {
            "src": daniel,
        },
        {
            "src": snir,
        },
        {
            "src": mia,
        },
        {
            "src": yaniv,
        },
        {
            "src": yonatan,
        },
        {
            "src": dana,
        },
        {
            "src": nir,
        },
        {
            "src": orit,
        },
        {
            "src": nethanel,
        },
        {
            "src": eden,
        },
        {
            "src": leaKeren,
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