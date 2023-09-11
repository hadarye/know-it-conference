import './Luz.styles.css'

const Luz = () => {
    const LUZ = [{
        "time": "8:45",
        "activity": "ארוחת בוקר | התכנסות | רישום"
    },
    {
        "time": "9:30",
        "activity": "פתיחת הכנס | רע״ן הדרכה"
    },
    {
        "time": "9:50",
        "activity": "ברכות פתיחה | ראש אט״ל"
    },
    {
        "time": "10:00",
        "activity": "הרצאת מליאה"
    },
    {
        "time": "11:00",
        "activity": "הפסקה"
    },
    {
        "time": "11:20",
        "activity": "מושב ראשון"
    },
    {
        "time": "12:00",
        "activity": "הפסקה וכיבוד"
    },
    {
        "time": "12:20",
        "activity": "מושב שני"
    },
    {
        "time": "13:00",
        "activity": " ארוחת צהריים | סיור בתערוכה"
    },
    {
        "time": "14:00",
        "activity": "הרצאת מליאה"
    },
    {
        "time": "14:50",
        "activity": "הכרזה על ענף מצטיין לשנ״ע 2023"
    },
    {
        "time": "15:00",
        "activity": "סיכום מפקד"
    },
    {
        "time": "15:20",
        "activity": "סיום הכנס"
    }]
    return (
        <div className='luz-container'>
            {LUZ.map((element, index) => (
                <div className='luz-line' key={element.time}>
                    <div className='luz-container-time'>
                        <div className='luz-time'>{element.time}</div>
                    </div>
                    <div className='luz-container-activity'>
                        <div className='luz-activity'>{element.activity}</div>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}
export default Luz;