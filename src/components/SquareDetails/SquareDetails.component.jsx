import './SquareDetails.styles.css';
import calendar from '../../media/images/calendar.png';
import waze from '../../media/images/waze.png';
import InfoIcons from '../InfoIcons/InfoIcons.component'
import bg1 from '../../media/images/blue1.svg';
import bg2 from '../../media/images/green2.svg';
import bg3 from '../../media/images/black3.svg';
import bg4 from '../../media/images/green4.svg';
import bg5 from '../../media/images/white5.svg';
import bg6 from '../../media/images/blue6.svg';

const SquareDetails = (props) => {

    const INFO = [
        {
            "title": "למי?",
            "text": "כ-1000 מפתחי ומנהלי הדרכה מיחידות צה״ל, מהאקדמיה ומגופי הדרכה נוספים במגזר הציבורי, הפרטי והבטחוני.",
            "id": "bg1"
        },
        {
            "title": "איפה?",
            "text": "קריית ההדרכה (עיר הבה״דים) - מחנה אריאל שרון. לטובת המשתתפים יועמד שירות הסעות ממספר מקומות מרכזיים.",
            "id": "bg2"
        },
        {
            "title": "מתי?",
            "text": "הכנס יתקיים ביום רביעי ה-8 בנומבר 2023 בין השעות 8:00-14:00.",
            "id": "bg3"
        },
        {
            "title": "מה בתוכנית?",
            "text": "הרצאות מעוררות השראה, סדנאות ייחודיות, תערוכת ספקים מגוונת, חשיפה לאמצעים דיגיטליים חדשניים ואוכל טוב.",
            "id": "bg4"
        },
        {
            "title": "עלות?",
            "text": "ההשתתפות בכנס הינה ללא עלות.",
            "id": "bg5"
        }
    ]

    return (
        <div className="detail-squars">
            {INFO.map((element, index) => (
                <div id={element.id} className='square' key={index}>
                    <h2 className='square-title'>{ element.title }</h2>
                    <p className='square-text'>{ element.text }</p>
                </div>
            ))}
            <div className='square' id="bg6" style={{ justifyContent: 'center'}}>
                <div className='icons-container-square'>
                    <InfoIcons></InfoIcons>

                </div>
                
            </div>

        </div>
    );
}

export default SquareDetails;