import './ParticipantsPage.styles.css';
import { useState, useRef } from 'react';
import Exhibition from '../exhibition/Exhibition.component';
import main1 from '../../media/images/people/shirlee.jpg';
import main2 from '../../media/images/people/Elad_Darmon.jpeg';
import ParticipantCard from '../ParticipantCard/ParticipantCard.component';
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
        "img": eliran,
        "name": "אלירן שקולניק",
        "topic": "המהפכה המלאכותית",
        "description": "בואו נצלול ונחשוף כלים וטכניקות מתקדמות בעבודה מול AI בצורה מדויקת שתחסוך כסף זמן והכי חשוב, אנרגיה.",
        "full-text": "בואו נצלול ונחשוף כלים וטכניקות מתקדמות בעבודה מול AI בצורה מדויקת שתחסוך כסף זמן והכי חשוב, אנרגיה. אלירן שקולניק הוא יוצר תוכן ומרצה בעולם הבינה המלאכותית ושיווק דיגיטלי."
    },
    {
        "img": yael,
        "name": "יעל פלד",
        "topic": "מעבר לשעמום",
        "description": "בהרצאה זו, אדבר על הדרכים היצירתיות והמעניינות ביותר לפתח הדרכה טכנית שעובדת.",
        "full-text": "בהרצאה זו, אדבר על הדרכים היצירתיות והמעניינות ביותר לפתח הדרכה טכנית שעובדת. אדבר על איך להשתמש במגוון כלי למידה, כגון סרטונים, מצגות, משחקים, AR ועוד בשילוב עם כלי AI מתקדמים ליצירת תכנים איכותיים יותר, בזמן קצר יותר המותאמים באופן אישי לעובדים בהתבסס על הצרכים והיכולות שלהם, במטרה ליצור חוויית למידה מהנה ומועילה. יעל פלד היא מפתחת הדרכות תפעול בחברת סולאראדג."
    },
    {
        "img": mia,
        "name": "מיה ליבנה | מעצבת חוויות למידה",
        "topic": "מידה שמייצרת כוכבים בעיניים",
        "description": "כלים מעולם EXPERIENCE DESIGN לעיצוב חוויות למידה מטריפות סוחפות ובלתי נשכחות.",
        "full-text": "בהרצאה נלמד על כלים מעולם EXPERIENCE DESIGN לעיצוב חוויות למידה מטריפות סוחפות ובלתי נשכחות. נבין מהי ״כלכלת החוויות״ ואיך היא משפיעה על כולנו. נלמד מה זה אומר XD - EXPERIENCE DESIGN ואיזו בשורה מדהימה יש בתחום הזה, עבורנו. בנוסף, נתעמק בכלי מרכזי לעיצוב חוויה – מודל E's-5 – חמשת התבלינים."
    },
    {
        "img": daniel,
        "name": "דניאל אנדרסון",
        "topic": "שיטת Agile בתהליכי למידה",
        "description": "בהרצאה נפרק את תהליך הלמידה ונסקור מחקרים עדכניים בתחום.",
        "full-text": "הרבה משיטות ההוראה כיום מתבססות על תפיסת למידה שהתגבשה לפני עשורים, ומשתמשות בכלים הפדגוגיים שהיו זמינים אז. בהרצאה נפרק את תהליך הלמידה ונסקור מחקרים עדכניים בתחום, ונבחן כיצד כלים טכנולוגיים מודרניים מאפשרים לנו לייצר מעגל למידה מואץ המזכיר את שיטת הפיתוח agile, ששמה במרכזה מעגל משוב הדוק וגמישות."
    },
    {
        "img": yaniv,
        "name": "יניב קרמר",
        "topic": "משאבי אנוש בעולם החדש",
        "description": "כיצד משפיעה המהפכה הדיגיטאלית וה-AI על הארגונים?",
        "full-text": 'כיצד משפיעה המהפכה הדיגיטאלית וה-AI על הארגונים מהו "פער המיומנויות" מדוע הוא נוצר? איך משפיע "פער המיומנויות" על ארגונים בעולם? ולאן מתפתחות טכנולוגיות לניהול המשאב האנושי כתוצאה מכך? יניב קרמר הוא מנהל טכנולוגיות HR בחברת מטריקס.'
    },
    {
        "img": erik,
        "name": "אריק אינגבר",
        "topic": "AI works for me",
        "description": "בהרצאה נבין מדוע כדאי להשתמש ב- Generative AI Tools  בתהליכי עבודה וכיצד ניתן  להרוויח מהם יתרונות רבים.",
        "full-text": "בהרצאה נבין מדוע כדאי להשתמש ב- Generative AI Tools  בתהליכי עבודה וכיצד ניתן  להרוויח מהם יתרונות רבים. אריק אינגבר הוא יועץ ארגוני ב Malam team.",
    },
    {
        "img": yonatan,
        "name": "יונתן חצור",
        "topic": "איך לגרום לאחרים להזיז הרים",
        "description": "איך הופכים אתגר עסקי לסיפור מניע לפעולה בהליך מקצועי?",
        "full-text": "איך הופכים אתגר עסקי לסיפור מניע לפעולה בהליך מקצועי? כיצד מעבירים את המשמעות הערכית והרגשית של רעיון עסקי? כיצד רותמים אנשים לרעיון משותף ומעצימים את השייכות שלהם דרך סיפור?"
    },
    {
        "img": dana,
        "name": "דנה הורוביץ",
        "topic": "פורמולת S4",
        "description": "יצירת וידאו בבינה מלאכותית: סקריפט, צילום, סגנון ושיתוף.",
        "full-text": "יצירת וידאו בבינה מלאכותית: סקריפט, צילום, סגנון ושיתוף. איך מייצרים מודל של בינה מלאכותית בבאר שבע ומוכרים לכל העולם. בהרצאה נדבר על מודל השפה שיוצר במהירות סרטונים לשיתוף, על פי סגנון, טקסט. דנה הורוביץ היא מנהלת שיוק ב bigvu."
    },
    {
        "img": nir,
        "name": ' ניר כהן |  מנכ"ל Insomnia',
        "topic": "מגמגום לדיבור",
        "description": "סימולטור ככלי מבריא",
        "full-text": "סימולטור ככלי מבריא שימוש בטכנולוגית VR לתהליכי למידה."
    },
    {
        "img": orit,
        "name": 'אורית ברוידס',
        "topic": "חדשנות: איך להישאר רלוונטים בעולם משתנה?",
        "description": "הרצאה מרתקת הסוקרת את המהפכה הסוערת שאנחנו נמצאים בעיצומה בכל רובד אאו מימד אפשרי בחיינו.",
        "full-text": "למה החדשנות הפכה להיות הכרח ולא מותרות? אילו עקרונות חשיבה אנחנו צריכים לתרגל? איך צוותים/ארגונים יישארו רלוונטיים ? איך מובילים את השינוי הנדרש? הרצאה  מרתקת הסוקרת את המהפכה הסוערת שאנחנו נמצאים בעיצומה בכל רובד ומימד אפשרי בחיינו. לא משנה באיזה שם אתם מעדיפים לקרוא למהפכה, המאפיין הבולט שלה הוא החיבורים האינסופיים שמאיצים את התפוצצות הידע והשינויים בקצב אקספוננציאלי. כל אלה הפכו את החיפוש והצורך בחדשנות לחובה ולא למותרות. אורית ברוידס היא יועצת ארגונית, שמלווה תהליכי שינוי ומבנה תהליכי למידה ארגונית. מובילה חדשנות, מחברת בין רעיון ליישום, מעוררת שיח ושואלת שאלות שצריכות להטריד כל אחד ואחת מאיתנו.  העתיד כבר כאן. מה איתך?"
    },
    {
        "img": nethanel,
        "name": 'נתנאל רייכר |  מייסד IN3D',
        "topic": "כיצד מעשירים את תהליכי ההדרכה ומגשרים בין ההדרכה לתהליכי הליווי בביצוע?",
        "description": "הצגת מקרי בוחן בארץ המשלבים מגוון טכנולוגיות XR בעולמות הסימולציה, הדרכה ואימון.",
        "full-text": "הצגת מקרי בוחן בארץ המשלבים מגוון טכנולוגיות XR בעולמות הסימולציה, הדרכה ואימון. שבירת המוסכמות על ההפרדה בין ההדרכה בכיתה לבין תהליכי הביצוע בשטח באמצעות פתרונות הולוגרמיים ומציאות משולבת. ועוד הפתעות נוספות…"
    },
    {
        "img": gila,
        "name": "פרופ' גילה קורץ |  דיקנית הפקולטה לטכנולוגיות למידה במכללת HIT",
        "topic": "אבולוציה אקדמאית",
        "description": "ניווט את ההשפעה הטרנספורמטיבית על חינוך, מחקר ומעבר לכ",
        "full-text": "ההרצאה תעסוק בחקר השינויים וההזדמנויות הרב-גוניות שהשילוב של בינה מלאכותית מכניס לאקדמיה, מעצב מחדש את הלמידה, המחקר ועתיד הפצת הידע."
    },
    {
        "img": eden,
        "name": 'עדן ביבס',
        "topic": "איך להשתמש נכון בצ'אט GPT?",
        "description": "בהרצאה נבין מהי בינה מלאכותית, ונעמיק בצ'אטבוט הפופולארי ביותר בעולם - ChatGPT. ",
        "full-text": "בהרצאה נבין מהי בינה מלאכותית, ונעמיק בצ'אטבוט הפופולארי ביותר בעולם - ChatGPT. נלמד מה היכולות והמגבלות שלו, איפה ניתן לסמוך עליו ואיפה פחות, איך נכון לדבר איתו כדי לקבל תוצרים מעולים, וכמובן - איך הוא תכל'ס יכול לעזור לנו בחיים כדי לעבוד בצורה אפקטיבית יותר. עדן ביבס הוא מייסד מועדון AI-Life ויוצר תוכן בעולמות הבינה המלאכותית."
    },
    {
        "img": snir,
        "name": 'פיינשטיין שניר',
        "topic": "הטמעת תוצרי הדרכה",
        "description": "הטמעת תוצרי הדרכה מקריית-שמונה ועד אילת.",
        "full-text": "הטמעת תוצרי הדרכה מקריית-שמונה ועד אילת. איך אנחנו מכשירים אלפי מתנדבים בשנה בכל הארץ עם רמה מקצועית אחידה?"
    },
    {
        "img": leaKeren,
        "name": 'ליאה אפגין  + קארן קמנצקי',
        "topic": "שותפי למידה",
        "description": "מערך הלמידה והפיתוח הארגוני אמון על ההתפתחות האישית, הניהולית והמקצועית, והמחוברות של עובדי מכבי.",
        "full-text": "מערך הלמידה והפיתוח הארגוני אמון על ההתפתחות האישית, הניהולית והמקצועית, והמחוברות של עובדי מכבי. אחד האמצעים המרכזיים להשגת המטרות הוא בנייה ופיתוח של קהילת שותפי למידה והפיכתם לכוח מקצועי, מכפיל כח של המערך. עובדים בתפקידים שונים: מובילי למידה, מדריכים פנימיים, מנטורים, מייקרים ויועצי קריירה המהווים זרוע נוספת שלנו ליצירת למידה עדכנית, רלבנטית וחדשנית."
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
                                <div>
                                    <h2 className='secondary-topic'>{element.topic}</h2>
                                    <h6 className='secondary-name'>{element.name}</h6>
                                    <p className='secondary-text'>{element.description}</p>
                                </div>
                                <button className='read-more-btn-secondary' onClick={() => handleReadMore(element)}>קרא עוד</button>
                            </div>
                        </div>
                    ))}
                </div>

                <h1 className='participants-title'>תערוכות</h1>
                <div className='exhibition-container'>
                    <Exhibition></Exhibition>
                </div>

            </div>
            <div>

            </div>
        </div>
    );
}

export default ParticipantsPage;