
import { useCallback } from 'react';
import './Registration.styles.css';
import { StyleProvider } from '@ant-design/cssinjs';
import { Button, Form, Input, Radio, Space, notification } from 'antd';

const Registration = () => {
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();

    const onFinish = useCallback(
        async ({ email, name, id, level, phone, seat1, seat2, unit, role, type }) => {
            try {
                await fetch(
                    'https://docs.google.com/forms/d/e/1FAIpQLScjYm6gcS-WCMMAO2Pxo7oxa2advDvmHXtBK2e8b1h8mOl-gA/formResponse?' +
                    new URLSearchParams({
                        'entry.934400202': name ?? '',
                        'entry.1784291486': id ?? '',
                        'entry.1115520134': level ?? '',
                        'entry.860340030': phone ?? '',
                        'entry.590287215': seat1,
                        'entry.944023911': seat2,
                        'entry.1560729842': unit ?? '',
                        'entry.1914024005': role ?? '',
                        'entry.1642695268': type,
                        emailAddress: email,
                    }),
                    {
                        mode: 'no-cors',
                    }
                );
            } catch (e) {
                console.log(e.message)
            }
        },
        [api, form]
    );

    return (
        <div className='form-container'>
            <h1 className='participants-title' style={{textAlign: `center`, margin: `10rem 0 0 0`}}>הרשמה לכנס</h1>
            <p  style={{fontSize: `2rem`}}>ההרשמה מיועדת לאנשים העוסקים בפיתוח הדרכה באזרחות ובצבא, ולמנהלי
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
                        label={<label style={{ fontSize: "1.7rem", fontFamily: 'assistant' }}>מייל:</label>}
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
                                <Radio className='radio-btn' value="אלירן שקולניק">אלירן שקולניק - המהפכה המלאכותית</Radio>
                                <Radio className='radio-btn' value="יעל פלד">יעל פלד - מעבר לשעמום</Radio>
                                <Radio className='radio-btn' value="מיה ליבנה">מיה ליבנה - מידה שמייצרת כוכבים בעיניים</Radio>
                                <Radio className='radio-btn' value="דניאל אנדרסון">דניאל אנדרסון - שיטת Agile בתהליכי למידה</Radio>
                                <Radio className='radio-btn' value="יניב קרמר">יניב קרמר - משאבי אנוש בעולם החדש</Radio>
                                <Radio className='radio-btn' value="אריק אינגבר"> אריק אינגבר - AI works for me</Radio>
                                <Radio className='radio-btn' value="יונתן חצור">יונתן חצור - איך לגרום לאחרים להזיז הרים</Radio>
                                <Radio className='radio-btn' value="דנה הורוביץ">דנה הורוביץ - פורמולת S4</Radio>
                                <Radio className='radio-btn' value="ניר כהן">ניר כהן - מגמגום לדיבור</Radio>
                                <Radio className='radio-btn' value="אורית ברוידס">אורית ברוידס - חדשנות: איך להישאר רלוונטים בעולם משתנה?</Radio>
                                <Radio className='radio-btn' value="נתנאל רייכר">נתנאל רייכר - כיצד מעשירים את תהליכי ההדרכה ומגשרים בין ההדרכה לתהליכי הליווי בביצוע?</Radio>
                                <Radio className='radio-btn' value="גילה קורץ">פרופ׳ גילה קורץ - אבולוציה אקדמאית</Radio>
                                <Radio className='radio-btn' value="עדן ביבס">עדן ביבס - איך להשתמש נכון בצ'אט GPT?</Radio>
                                <Radio className='radio-btn' value="פיינשטיין שניר">פיינשטיין שניר - הטמעת תוצרי הדרכה</Radio>
                                {/* <Radio value=""></Radio> */}

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
                                <Radio className='radio-btn' value="אלירן שקולניק">אלירן שקולניק - המהפכה המלאכותית</Radio>
                                <Radio className='radio-btn' value="יעל פלד">יעל פלד - מעבר לשעמום</Radio>
                                <Radio className='radio-btn' value="מיה ליבנה">מיה ליבנה - מידה שמייצרת כוכבים בעיניים</Radio>
                                <Radio className='radio-btn' value="דניאל אנדרסון">דניאל אנדרסון - שיטת Agile בתהליכי למידה</Radio>
                                <Radio className='radio-btn' value="יניב קרמר">יניב קרמר - משאבי אנוש בעולם החדש</Radio>
                                <Radio className='radio-btn' value="אריק אינגבר"> אריק אינגבר - AI works for me</Radio>
                                <Radio className='radio-btn' value="יונתן חצור">יונתן חצור - איך לגרום לאחרים להזיז הרים</Radio>
                                <Radio className='radio-btn' value="דנה הורוביץ">דנה הורוביץ - פורמולת S4</Radio>
                                <Radio className='radio-btn' value="ניר כהן">ניר כהן - מגמגום לדיבור</Radio>
                                <Radio className='radio-btn' value="אורית ברוידס">אורית ברוידס - חדשנות: איך להישאר רלוונטים בעולם משתנה?</Radio>
                                <Radio className='radio-btn' value="נתנאל רייכר">נתנאל רייכר - כיצד מעשירים את תהליכי ההדרכה ומגשרים בין ההדרכה לתהליכי הליווי בביצוע?</Radio>
                                <Radio className='radio-btn' value="גילה קורץ">פרופ׳ גילה קורץ - אבולוציה אקדמאית</Radio>
                                <Radio className='radio-btn' value="עדן ביבס">עדן ביבס - איך להשתמש נכון בצ'אט GPT?</Radio>
                                <Radio className='radio-btn' value="פיינשטיין שניר">פיינשטיין שניר - הטמעת תוצרי הדרכה</Radio>
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
                    <Button type="primary" htmlType="submit" className='pointer' id='submitBtn'>
                        שליחה
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Registration;