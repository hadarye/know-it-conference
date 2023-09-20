
import { useCallback, useState, useRef } from 'react';
import './Registration.styles.css';
import Confirmation from '../Confirmation/Confirmation.component';
import { Button, Form, Input, Radio, Select, Space, notification } from 'antd';

const Registration = () => {
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
    const [isSubmited, setIsSubmited] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);

    const SEATS = [
        "עדי ליבנה | למידה שמייצרת כוכבים בעיניים",
        "אורית ברוידס | חדשנות: איך להישאר רלוונטים בעולם משתנה?",
        "אלירן שקולניק | המהפכה המלאכותית",
        "יעל פלד | ניצחון טכני",
        "יניב קרמר | ניהול קריירה בשירות הAI - לא מה שחשבתם...",
        "אריק אינגבר | AI works for me",
        "דנה הורוביץ | יצירת סרטונים בקליק עם AI",
        "ניר כהן | קווים מנחים בעיצוב חוויות והדרכות בטכנולוגיית XR (VR/AR)",
        "נתנאל רייכר | כיצד מעשירים את תהליכי ההדרכה ומגשרים בין ההדרכה לתהליכי הליווי בביצוע?",
        "עדן ביבס | איך להשתמש נכון בצ'אט GPT?",
        "ליאה אפגין + קארן קמנצקי | מכפיל כוח",
        "אביב ואנונו | בקיצור, בואו נפתח הדרכה בAI",
        "אמיר רוזנצוייג | השיטה החדשה לאימונים והדרכה במציאות מדומה!"
    ]

    const onFinish = useCallback(
        async ({ email, name, id, level, phone, seat1, seat2, unit, role, type, bus, bahad }) => {
            try {
                await fetch(
                    // https://docs.google.com/forms/d/e/1FAIpQLScjYm6gcS-WCMMAO2Pxo7oxa2advDvmHXtBK2e8b1h8mOl-gA/viewform?usp=pp_url&entry.934400202=1&entry.1784291486=2&entry.1115520134=3&entry.860340030=4&entry.590287215=%D7%A4%D7%A8%D7%95%D7%A4%D7%B3+%D7%92%D7%99%D7%9C%D7%94+%D7%A7%D7%95%D7%A8%D7%A5+%7C+%D7%90%D7%91%D7%95%D7%9C%D7%95%D7%A6%D7%99%D7%94+%D7%90%D7%A7%D7%93%D7%9E%D7%90%D7%99%D7%AA&entry.1127533607=%D7%A4%D7%A8%D7%95%D7%A4%D7%B3+%D7%92%D7%99%D7%9C%D7%94+%D7%A7%D7%95%D7%A8%D7%A5+%7C+%D7%90%D7%91%D7%95%D7%9C%D7%95%D7%A6%D7%99%D7%94+%D7%90%D7%A7%D7%93%D7%9E%D7%90%D7%99%D7%AA&entry.1560729842=5&entry.1914024005=6&entry.1642695268=%D7%9B%D7%95%D7%97%D7%95%D7%AA+%D7%94%D7%91%D7%98%D7%97%D7%95%D7%9F&entry.349923372=%D7%91%D7%97%D7%A8&entry.1005952753=%D7%9B%D7%9F
                    // https://docs.google.com/forms/d/e/1FAIpQLScjYm6gcS-WCMMAO2Pxo7oxa2advDvmHXtBK2e8b1h8mOl-gA/viewform?usp=pp_url&entry.934400202=1&entry.1784291486=2&entry.1115520134=3&entry.860340030=4&entry.590287215=%D7%90%D7%9C%D7%99%D7%A8%D7%9F+%D7%A9%D7%A7%D7%95%D7%9C%D7%A0%D7%99%D7%A7+-+%D7%94%D7%9E%D7%94%D7%A4%D7%9B%D7%94+%D7%94%D7%9E%D7%9C%D7%90%D7%9B%D7%95%D7%AA%D7%99%D7%AA&entry.1127533607=%D7%90%D7%9C%D7%99%D7%A8%D7%9F+%D7%A9%D7%A7%D7%95%D7%9C%D7%A0%D7%99%D7%A7+-+%D7%94%D7%9E%D7%94%D7%A4%D7%9B%D7%94+%D7%94%D7%9E%D7%9C%D7%90%D7%9B%D7%95%D7%AA%D7%99%D7%AA&entry.1560729842=5&entry.1914024005=6&entry.1642695268=%D7%9B%D7%95%D7%97%D7%95%D7%AA+%D7%94%D7%91%D7%98%D7%97%D7%95%D7%9F&entry.1005952753=%D7%9B%D7%9F
                    // https://docs.google.com/forms/d/e/1FAIpQLScjYm6gcS-WCMMAO2Pxo7oxa2advDvmHXtBK2e8b1h8mOl-gA/viewform?usp=pp_url&entry.934400202=name&entry.1784291486=id&entry.1115520134=rank&entry.860340030=phone&entry.590287215=%D7%90%D7%9C%D7%99%D7%A8%D7%9F+%D7%A9%D7%A7%D7%95%D7%9C%D7%A0%D7%99%D7%A7+-+%D7%94%D7%9E%D7%94%D7%A4%D7%9B%D7%94+%D7%94%D7%9E%D7%9C%D7%90%D7%9B%D7%95%D7%AA%D7%99%D7%AA&entry.1127533607=%D7%99%D7%A2%D7%9C+%D7%A4%D7%9C%D7%93+-+%D7%9E%D7%A2%D7%91%D7%A8+%D7%9C%D7%A9%D7%A2%D7%9E%D7%95%D7%9D&entry.1560729842=unit&entry.1914024005=role&entry.1642695268=%D7%9B%D7%95%D7%97%D7%95%D7%AA+%D7%94%D7%91%D7%98%D7%97%D7%95%D7%9F
                    'https://docs.google.com/forms/d/e/1FAIpQLScjYm6gcS-WCMMAO2Pxo7oxa2advDvmHXtBK2e8b1h8mOl-gA/formResponse?' +
                    new URLSearchParams({
                        'entry.934400202': name ?? '',
                        'entry.1784291486': id ?? '',
                        'entry.1115520134': level ?? '',
                        'entry.860340030': phone ?? '',
                        'entry.590287215': seat1,
                        'entry.1127533607': seat2,
                        'entry.1560729842': unit ?? '',
                        'entry.1914024005': role ?? '',
                        'entry.1642695268': type,
                        'entry.349923372': bahad,
                        'entry.1005952753': bus,
                        emailAddress: email,
                    }),
                    {
                        mode: 'no-cors',
                    }
                );
                api.success({
                    message: 'Submitted successfully',

                },
                    setIsConfirmed(true),
                    setIsSubmited(true)
                );
                form.resetFields();
            } catch (e) {
                api.error({
                    message: e.message,
                });
                setIsConfirmed(false);
                setIsSubmited(false);
            }
        },
        [api, form]
    );

    return (
        <>
            {isSubmited ? <Confirmation></Confirmation> : null}
            <div className='form-container'>

                <h1 className='participants-title' style={{ textAlign: `center`, margin: `10rem 0 0 0` }}>הרשמה לכנס</h1>
                <p className='registration-text'>ההרשמה מיועדת לאנשים העוסקים בפיתוח הדרכה בצבא, בתעשייה, באקדמיה ולמנהלי
                    הדרכה.</p>
                <Form
                    form={form}
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <div className='inputs-container'>
                        <Form.Item
                            className='form-item'
                            name="email"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>אימייל:</label>}
                            rules={[{ required: true, message: 'אנא הכניסו את המייל שלכם.' }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="name"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>שם:</label>}
                            rules={[{ required: true, message: 'אנא הכניסו את שמכם.' }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="id"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>ת.ז. / מספר אישי (לצורך כניסה לבסיס):</label>}
                            rules={[{ required: true, message: 'אנא הכניסו את תעודת הזהות או המספר האישי שלכם.' }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="level"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>דרגה (לאנשי צבא בלבד):</label>}
                            rules={[{ required: false }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="phone"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>טלפון:</label>}
                            rules={[{ required: true, message: 'אנא הכניסו את מספר הטלפון שלכם.' }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="seat1"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>מושב ראשון:</label>}
                            rules={[{ required: true, message: 'אנא בחרו מושב ראשון.' }]}
                        >
                            <Radio.Group>
                                <Space className='radio-container' direction="vertical">
                                    <Radio className='radio-btn' value="פרופ׳ גילה קורץ | אבולוציה אקדמאית">פרופ׳ גילה קורץ | אבולוציה אקדמאית</Radio>
                                    {SEATS.map((name) => (
                                        <Radio key={name} className='radio-btn' value={name}>{name}</Radio>
                                    ))}
                                    {/* <Radio className='radio-btn' value="דניאל אנדרסון | שיטת Agile בתהליכי למידה">דניאל אנדרסון | שיטת Agile בתהליכי למידה</Radio> */}
                                    {/* <Radio className='radio-btn' value="יונתן חצור | איך לגרום לאחרים להזיז הרים">יונתן חצור | איך לגרום לאחרים להזיז הרים</Radio> */}
                                    {/* <Radio className='radio-btn' value="פיינשטיין שניר | הטמעת תוצרי הדרכה">פיינשטיין שניר | הטמעת תוצרי הדרכה</Radio> */}
                                </Space>
                            </Radio.Group>
                        </Form.Item>
                    </div>
                    <div className='inputs-container'>
                        <Form.Item
                            className='form-item'
                            name="seat2"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>מושב שני:</label>}
                            rules={[{ required: true, message: 'אנא בחרו מושב שני.' }]}
                        >
                            <Radio.Group>
                                <Space className='radio-container' direction="vertical">
                                    {SEATS.map((name) => (
                                        <Radio key={name} className='radio-btn' value={name}>{name}</Radio>
                                    ))}
                                </Space>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="unit"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>יחידה / ארגון:</label>}
                            rules={[{ required: true, message: 'אנא הכניסו את שם הארגון / היחידה שלכם.' }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="role"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>תפקיד בארגון:</label>}
                            rules={[{ required: true, message: 'אנא הכניסו את תפקידכם בארגון.' }]}
                        >
                            <Input className='form-input' />
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="type"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>סוג ארגון:</label>}
                            rules={[{ required: true, message: 'אנא בחרו בסוג הארגון שלכם.' }]}
                        >
                            <Radio.Group>
                                <Space className='radio-container' direction="vertical">
                                    <Radio className='radio-btn' value="כוחות הבטחון">כוחות הבטחון</Radio>
                                    <Radio className='radio-btn' value="תעשייה">תעשייה</Radio>
                                    <Radio className='radio-btn' value="צה״ל">צה״ל</Radio>
                                    <Radio className='radio-btn' value="ממשלתי">ממשלתי</Radio>
                                    <Radio className='radio-btn' value="מוסדות חינוך">מוסדות חינוך</Radio>
                                    <Radio className='radio-btn' value="מוסדות אקדמיה">מוסדות אקדמיה</Radio>
                                    <Radio className='radio-btn' value="אחר">אחר</Radio>
                                </Space>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            className='form-item form-select'
                            name="bahad"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>אם הינכם משרתים בקריית ההדרכה: בחרו בבה״ד שלכם.</label>}
                            rules={[{ required: false }]}>
                            <Select
                                initialvalues="בחר"
                                // style={{
                                //     width: 400,
                                // }}
                                options={[{
                                    value: 'בחר',
                                    label: 'בחר',
                                },
                                {
                                    value: 'מפקדה',
                                    label: 'מפקדה',
                                },
                                {
                                    value: '6',
                                    label: 'בה״ד 6',
                                },
                                {
                                    value: '7',
                                    label: 'בה״ד 7',
                                },
                                {
                                    value: '10',
                                    label: 'בה״ד 10',
                                },
                                {
                                    value: '11',
                                    label: 'בה״ד 11',
                                },
                                {
                                    value: '20',
                                    label: 'בה״ד 20',
                                },
                                {
                                    value: '13',
                                    label: 'בה״ד 13',
                                },
                                {
                                    value: 'חינוך',
                                    label: 'חינוך',
                                }
                                ]}>

                            </Select>
                        </Form.Item>
                        <Form.Item
                            className='form-item'
                            name="bus"
                            label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>האם תרצו להירשם להסעה?ֿ | ההסעה תצא מחניון ״חנה וסע״ בתל אביב | פתיחת ההסעה תלויה בכמות הנרשמים.</label>}
                            rules={[{ required: true, message: 'האם תרצו להירשם להסעה?ֿ' }]}
                        >
                            <Radio.Group>
                                <Space className='radio-container' direction="vertical">
                                    <Radio className='radio-btn' value="כן">כן</Radio>
                                    <Radio className='radio-btn' value="לא">לא</Radio>
                                    <Radio className='radio-btn' value="עוד לא יודע">עוד לא יודע</Radio>
                                </Space>
                            </Radio.Group>
                        </Form.Item>

                        <Button type="primary" htmlType="submit" className='pointer' id='submitBtn'>
                            שליחה
                        </Button>
                    </div>
                </Form >
            </div >
        </>
    )
}

export default Registration;
// entry.590287215=&entry.1127533607=%D7%99%D7%A2%D7%9C+%D7%A4%D7%9C%D7%93+-+%D7%9E%D7%A2%D7%91%D7%A8+%D7%9C%D7%A9%D7%A2%D7%9E%D7%95%D7%9D&entry.1560729842=unit&entry.1914024005=role&entry.1642695268=%D7%9B%D7%95%D7%97%D7%95%D7%AA+%D7%94%D7%91%D7%98%D7%97%D7%95%D7%9F%D7%90%D7%9C%D7%99%D7%A8%D7%9F+%D7%A9%D7%A7%D7%95%D7%9C%D7%A0%D7%99%D7%A7+-+%D7%94%D7%9E%D7%94%D7%A4%D7%9B%D7%94+%D7%94%D7%9E%D7%9C%D7%90%D7%9B%D7%95%D7%AA%D7%99%D7%AA