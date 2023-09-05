import './ParticipantsPage.styles.css';
import main1 from '../../media/images/people/shirlee.jpg';
import main2 from '../../media/images/people/Elad_Darmon.jpeg';
import fillerman from "../../media/images/man.svg";
import fillerwoman from "../../media/images/woman.svg";
import person1 from '../../media/images/people/erik.jpg';
import person2 from '../../media/images/people/gila_jpg.webp';
import person3 from '../../media/images/people/yuval.jpeg';
import person4 from '../../media/images/people/aviramdaniel.png';
import person5 from '../../media/images/people/snir.jpg';
import person6 from '../../media/images/people/adi.jpg';
import blob1 from '../../media/images/blob1.svg';
import blob2 from '../../media/images/blob2.svg';

const ParticipantsPage = () => {
    const MAIN_INFO = [{
        "img": main1,
        "name": "שירלי ארמלנד חן",
        "topic": "מסר ויזואלי שמניע לפעולה",
        "bg": blob1,
        "description": "איך מייצרים מסר ויזואלי בהיר שלא רק נראה מעולה, אלא, גם מסייע לנו להשפיע ואפילו מניע לפעולה?"
    },
    {
        "img": main2,
        "name": "אלעד דרמון",
        "topic": "עולם של בינה מלאכותית",
        "bg": blob2,
        "description": "איך להשתמש בעוצמה של כלים מבוססי AI, כדי לעצב את העתיד?"
    }]

    const SEAT2 = [{
        "img": person1,
        "name": "ישראל ישראלי",
        "topic": "הרצאה בנושא של ישראלים",
        "description": "זהו הסבר גנרי על הרצאות. מאוד חשוב לזכור שהרצאות הן דבר באמת חשוב ויפה ונחמד. אין על הרצאות בעולם."
    },
    {
        "img": fillerwoman,
        "name": "ישראלית ישראלית",
        "topic": "הרצאה בנושא של ישראליות",
        "description": "זהו הסבר גנרי על הרצאות. מאוד חשוב לזכור שהרצאות הן דבר באמת חשוב ויפה ונחמד. אין על הרצאות בעולם."
    },
    {
        "img": fillerwoman,
        "name": "ישראלית ישראלית",
        "topic": "הרצאה בנושא של ישראליות",
        "description": "זהו הסבר גנרי על הרצאות. מאוד חשוב לזכור שהרצאות הן דבר באמת חשוב ויפה ונחמד. אין על הרצאות בעולם."
    },
    {
        "img": fillerwoman,
        "name": "ישראלית ישראלית",
        "topic": "הרצאה בנושא של ישראליות",
        "description": "זהו הסבר גנרי על הרצאות. מאוד חשוב לזכור שהרצאות הן דבר באמת חשוב ויפה ונחמד. אין על הרצאות בעולם."
    },
    {
        "img": fillerwoman,
        "name": "ישראלית ישראלית",
        "topic": "הרצאה בנושא של ישראליות",
        "description": "זהו הסבר גנרי על הרצאות. מאוד חשוב לזכור שהרצאות הן דבר באמת חשוב ויפה ונחמד. אין על הרצאות בעולם."
    }]

    const SEAT1 = [{
        "img": person1,
        "name": "ישראל ישראלי",
        "topic": "הרצאה בנושא של ישראלים",
        "description": "זהו הסבר גנרי על הרצאות. מאוד חשוב לזכור שהרצאות הן דבר באמת חשוב ויפה ונחמד. אין על הרצאות בעולם."
    },
    {
        "img": person2,
        "name": "ישראלית ישראלית",
        "topic": "הרצאה בנושא של ישראליות",
        "description": "זהו הסבר גנרי על הרצאות. מאוד חשוב לזכור שהרצאות הן דבר באמת חשוב ויפה ונחמד. אין על הרצאות בעולם."
    },
    {
        "img": person3,
        "name": "ישראלית ישראלית",
        "topic": "הרצאה בנושא של ישראליות",
        "description": "זהו הסבר גנרי על הרצאות. מאוד חשוב לזכור שהרצאות הן דבר באמת חשוב ויפה ונחמד. אין על הרצאות בעולם."
    },
    {
        "img": person4,
        "name": "ישראלית ישראלית",
        "topic": "הרצאה בנושא של ישראליות",
        "description": "זהו הסבר גנרי על הרצאות. מאוד חשוב לזכור שהרצאות הן דבר באמת חשוב ויפה ונחמד. אין על הרצאות בעולם."
    },
    {
        "img": person5,
        "name": "ישראלית ישראלית",
        "topic": "הרצאה בנושא של ישראליות",
        "description": "זהו הסבר גנרי על הרצאות. מאוד חשוב לזכור שהרצאות הן דבר באמת חשוב ויפה ונחמד. אין על הרצאות בעולם."
    }]
    return (
        <div className='participants-page'>
            <div className='main-container'>
                <h1 className='participants-title'>מרצי מליאה</h1>
                <div className='dark-card-container'>
                    {MAIN_INFO.map((element, index) => (
                        <div className='dark-card' key={index}>
                            <div className='main-content-container'>
                                <div className='main-img' style={{ backgroundImage: `url(${element.img})` }}></div>
                                <div className='main-text-container'>
                                    <h2 className='main-topic'>{element.topic}</h2>
                                    <h6 className='main-name'>{element.name}</h6>
                                    <p className='main-text'>{element.description}</p>
                                </div>
                            </div>

                            <button className='read-more-btn'>קרא עוד</button>
                        </div>
                    ))}
                </div>

                <h1 className='participants-title' style={{marginTop: '4rem'}}>מושבים</h1>
                <div className='secondary-card-container'>
                    {SEAT1.map((element, index) => (
                        <div className='secondary-card' key={index}>
                            <div className='secondary-img' style={{ backgroundImage: `url(${element.img})` }}></div>
                            
                            <div className='secondary-text-container'>
                                <h2 className='secondary-topic'>{element.topic}</h2>
                                <h6 className='secondary-name'>{element.name}</h6>
                                <p className='secondary-text'>{element.description}</p>
                                <button className='read-more-btn-secondary'>קרא עוד</button>
                            </div>
                        </div>
                    ))}
                </div>

                <h1 className='participants-title'>תערוכות</h1>
                <div className='exhibition-container'>
                    <div></div>
                </div>

                {/* <h1 className='participants-title'>מושב שני</h1>
                <div className='secondary-card-container'>
                    {SEAT2.map((element, index) => (
                        <div className='secondary-card' key={index}>
                            <div className='secondary-img' style={{ backgroundImage: `url(${element.img})` }}></div>
                            <div className='secondary-text-container'>
                                <h2 className='secondary-topic'>{element.topic}</h2>
                                <h6 className='secondary-name'>{element.name}</h6>
                                <p className='secondary-text'>{element.description}</p>
                                <button className='read-more-btn-secondary'>קרא עוד</button>
                            </div>
                        </div>
                    ))}
                </div> */}



            </div>
            <div>

            </div>
        </div>
    );
}

export default ParticipantsPage;