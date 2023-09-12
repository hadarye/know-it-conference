import './ParticipantCard.styles.css'
import close from "../../media/images/close.png";
import link from "../../media/images/external-link.png";
import facebook from "../../media/images/facebook.png";

const ParticipantCard = (props) => {
    console.log( props.infoObj);
    return (
        <div className='participant-card-container' onClick={(e) => e.target.classList.contains("not-press") ? null : props.closeReadMore()}>
            <div className='participant-card not-press'>
                <div style={{ backgroundImage: `url(${close})` }} className='card-cose-btn pointer'></div>
                <img src={props.infoObj.img} className='main-img participant-card-img not-press'></img>
                <h1 className='participant-card-topic not-press'>{props.infoObj.topic}</h1>
                <h3 className='participant-card-name not-press'>{props.infoObj.name}</h3>
                <p className='participant-card-text not-press'>{props.infoObj["full-text"]}</p>
                <div className='link-icons-container'>
                    { props.infoObj.website === undefined ? null : <a className='link-icon pointer' href={props.infoObj.website}>
                        <img src={link} className='icon'/>
                    </a>}
                    { props.infoObj.facebook === undefined ? null : <a className='link-icon pointer' href={props.infoObj.facebook}>
                        <img src={facebook} className='icon'/>
                    </a>}
                </div>
            </div>
        </div>

    )
}

export default ParticipantCard;