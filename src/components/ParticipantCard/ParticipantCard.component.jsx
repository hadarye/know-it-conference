import './ParticipantCard.styles.css'
import close from "../../media/images/close.png";

const ParticipantCard = (props) => {
    return (
        <div className='participant-card-container'>
            <div className='participant-card'>
                <div style={{backgroundImage: `url(${close})`}} onClick={() => props.closeReadMore()} className='card-cose-btn'></div>
                <img src={props.infoObj.img} className='main-img participant-card-img'></img>
                <h1 className='participant-card-topic'>{props.infoObj.topic}</h1>
                <h3 className='participant-card-name'>{props.infoObj.name}</h3>
                <p className='participant-card-text'>{props.infoObj["full-text"]}</p>
            </div>
        </div>

    )
}

export default ParticipantCard;