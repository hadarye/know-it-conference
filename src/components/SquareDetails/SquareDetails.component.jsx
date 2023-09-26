import './SquareDetails.styles.css';
import InfoIcons from '../InfoIcons/InfoIcons.component'

const SquareDetails = (props) => {

    const INFO = [
        {
            "title": "למי?",
            "text": "כ-800 מפתחי ומנהלי הדרכה מיחידות צה״ל, מהאקדמיה ומגופי הדרכה נוספים במגזר הציבורי, הפרטי והבטחוני.",
            "id": "bg1"
        },
        {
            "title": "איפה?",
            "text": "קריית ההדרכה (עיר הבה״דים) - מחנה אריאל שרון. לטובת המשתתפים יועמד שירות הסעות ממספר מקומות מרכזיים.",
            "id": "bg2"
        },
        {
            "title": "מתי?",
            "text": "הכנס יתקיים ביום רביעי ה-8 בנובמבר 2023 בין השעות 8:30-14:30.",
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
                {/* <p>הרשמתך נקלטה במערכת בהצלחה. </p><p>בחירתך למושב הראשון:</p><p>{{מושב 1}} </p><p>בחירתך למושב השני:</p><p>{{מושב 2}} </p><p>הכנס יתקיים בקריית ההדרכה בנגב בתאריך 8.11</p><p>לפרטים נוספים הסתכלו באתר: <a href="https://madortill.github.io/knowit-2023/#/home" rel="noopener noreferrer" target="_blank">https://madortill.github.io/knowit-2023/#/home</a></p><p>לשאלות ובקשות פנו אלינו במייל :</p><p>know.it.till@gmail.com</p> */}
            </div>

        </div>
    );
}

export default SquareDetails;