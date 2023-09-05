import './ParticipantsPage.styles.css';
import { useState, useRef } from 'react';
import main1 from '../../media/images/people/shirlee.jpg';
import main2 from '../../media/images/people/Elad_Darmon.jpeg';
import ParticipantCard from '../ParticipantCard/ParticipantCard.component';
import person1 from '../../media/images/people/erik.jpg';
import person2 from '../../media/images/people/gila_jpg.webp';
import person3 from '../../media/images/people/yuval.jpeg';
import person4 from '../../media/images/people/aviramdaniel.png';
import person5 from '../../media/images/people/snir.jpg';
import person6 from '../../media/images/people/adi.jpg';
import blob1 from '../../media/images/blob1.svg';
import blob2 from '../../media/images/blob2.svg';

const ParticipantsPage = () => {
    const [isCard, setIsCard] = useState(false);
    const objRef = useRef({});
    const MAIN_INFO = [{
        "img": main1,
        "name": "שירלי ארמלנד חן | מייסדת Present Station",
        "topic": "מעבר לעיצוב",
        "description": " יצירת תוצר למידה שמניע לפעולה.",
        "full-text": "אנחנו יודעים לפצח תוצרי למידה כך שיתנו מענה לצרכים ולהרגלים של קהל היעד, לפתח אותם בפלטפורמות המתאימות וגם לעצב אותם כדי שיראו מעולה. אבל מה קורה אחר כך? איך נוכל לדאוג שהמסר החשוב ביותר מאותו תוצר למידה יישאר עם הלומד ואפילו יופץ הלאה? בהרצאה נלמד כיצד למיומנות ארגון המידע יש תפקיד משמעותי בתהליך. מדובר במיומנות שכל אחד מאתנו צריך לפתח, משום שהיא מסייעת לנו לייצר סיפור בין פריטי המידע (סטוריטלינג), ואחר כך להעביר אותו ללומד בשתי רמות: מילולית וויזואלית. כאשר הסיפור מועבר בשתי רמות המסר הללו, הלומד זוכר אותו בקלות, מסוגל להעבירו הלאה ואפילו ליישמו בצורה מדויקת יותר."
    },
    {
        "img": main2,
        "name": 'אלעד דרמון | מנכ"ל Digital Culture - תרבות דיגיטלית',
        "topic": "העוצמה של הבינה ",
        "description": "כלים מעשיים לשימוש בטכנולוגיה.",
        "full-text": "חקר השינויים וההזדמנויות הרב-גוניות שהשילוב של בינה מלאכותית מכניס לאקדמיה, מעצב מחדש את הלמידה, המחקר ועתיד הפצת הידע."
    }]

    const SEATS = [{
        "img": person1,
        "name": "אלירן שקולניק",
        "topic": "המהפכה המלאכותית",
        "description": "בואו מצלול ונחשוף כלים וטכניקות מתקדמות בעבודה מול ai בצורה מדויקת שתחסוך כסף זמן והכי חשוב, אנרגיה."
    },
    {
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

    const handleReadMore = (obj) => {
        objRef.current = obj;
        setIsCard(true);
    }

    const closeReadMore = () => {
        setIsCard(false);
    }

    return (
        <div className='participants-page'>
            {isCard ? <ParticipantCard closeReadMore={closeReadMore} infoObj={objRef.current}></ParticipantCard> : null}
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

                            <button className='read-more-btn' onClick={() => handleReadMore(element)}>קרא עוד</button>
                        </div>
                    ))}
                </div>

                <h1 className='participants-title' style={{ marginTop: '4rem' }}>מושבים</h1>
                <div className='secondary-card-container'>
                    {SEATS.map((element, index) => (
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