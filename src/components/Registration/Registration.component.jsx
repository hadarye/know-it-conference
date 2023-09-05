
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
            <Form
                form={form}
                onFinish={onFinish}
                layout="vertical"
            >
                <div className='inputs-container'>


                    <Form.Item
                        className='form-item'
                        name="email"
                        label={<label style={{fontSize: "1.5rem", fontFamily: 'assistant'}}>מייל:</label>}
                        rules={[{ required: true, message: 'אנא הכניסו את המייל שלכם.' }]}

                    >
                        <Input className='form-input' />
                    </Form.Item>
                    <Form.Item
                        className='form-item'
                        name="name"
                        label={<label style={{fontSize: "1.5rem", fontFamily: 'assistant'}}>שם:</label>}
                        rules={[{ required: true, message: 'אנא הכניסו את שמכם.' }]}
                    >
                        <Input className='form-input' />
                    </Form.Item>
                    <Form.Item
                        className='form-item'
                        name="id"
                        label={<label style={{fontSize: "1.5rem", fontFamily: 'assistant'}}>ת.ז. / מספר אישי (לצורך כניסה לבסיס):</label>}
                        rules={[{ required: true, message: 'אנא הכניסו את תעודת הזהות או המספר האישי שלכם.' }]}
                    >
                        <Input className='form-input' />
                    </Form.Item>
                    <Form.Item
                        className='form-item'
                        name="level"
                        label={<label style={{fontSize: "1.5rem", fontFamily: 'assistant'}}>דרגה (לאנשי צבא בלבד):</label>}
                        rules={[{ required: false }]}
                    >
                        <Input className='form-input' />
                    </Form.Item>
                    <Form.Item
                        className='form-item'
                        name="phone"
                        label={<label style={{fontSize: "1.5rem", fontFamily: 'assistant'}}>טלפון:</label>}
                        rules={[{ required: true, message: 'אנא הכניסו את מספר הטלפון שלכם.' }]}
                    >
                        <Input className='form-input' />
                    </Form.Item>
                    <Form.Item
                        className='form-item'
                        name="seat1"
                        label={<label style={{fontSize: "1.5rem", fontFamily: 'assistant'}}>מושב ראשון:</label>}
                        rules={[{ required: true, message: 'אנא בחרו מושב ראשון.' }]}
                    >
                        <Radio.Group>
                            <Space direction="vertical">
                                <Radio value="אפשרות 1">אפשרות 1</Radio>
                                <Radio value="אפשרות 2">אפשרות 2</Radio>
                                <Radio value="אפשרות 3">אפשרות 3</Radio>
                                <Radio value="אפשרות 4">אפשרות 4</Radio>
                                <Radio value="אפשרות 5">אפשרות 5</Radio>
                                <Radio value="אפשרות 6">אפשרות 6</Radio>
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                </div>
                <div className='inputs-container'>
                    <Form.Item
                        className='form-item'
                        name="seat2"
                        label={<label style={{fontSize: "1.5rem", fontFamily: 'assistant'}}>מושב שני:</label>}
                        rules={[{ required: true, message: 'אנא בחרו מושב שני.' }]}
                    >
                        <Radio.Group>
                            <Space direction="vertical">
                                <Radio value="אפשרות 1">אפשרות 1</Radio>
                                <Radio value="אפשרות 2">אפשרות 2</Radio>
                                <Radio value="אפשרות 3">אפשרות 3</Radio>
                                <Radio value="אפשרות 4">אפשרות 4</Radio>
                                <Radio value="אפשרות 5">אפשרות 5</Radio>
                                <Radio value="אפשרות 6">אפשרות 6</Radio>
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        className='form-item'
                        name="unit"
                        label={<label style={{fontSize: "1.5rem", fontFamily: 'assistant'}}>יחידה / ארגון:</label>}
                        rules={[{ required: true, message: 'אנא הכניסו את שם הארגון / היחידה שלכם.' }]}
                    >
                        <Input className='form-input' />
                    </Form.Item>
                    <Form.Item
                        className='form-item'
                        name="role"
                        label={<label style={{fontSize: "1.5rem", fontFamily: 'assistant'}}>תפקיד בארגון:</label>}
                        rules={[{ required: true, message: 'אנא הכניסו את תפקידכם בארגון' }]}
                    >
                        <Input className='form-input' />
                    </Form.Item>
                    <Form.Item
                        className='form-item'
                        name="type"
                        label={<label style={{fontSize: "1.5rem", fontFamily: 'assistant'}}>סוג ארגון:</label>}
                        rules={[{ required: true, message: 'אנא בחרו בסוג הארגון שלכם.' }]}
                    >
                        <Radio.Group>
                            <Space direction="vertical">
                                <Radio value="כוחות הבטחון">כוחות הבטחון</Radio>
                                <Radio value="תעשייה">תעשייה</Radio>
                                <Radio value="צה״ל">צה״ל</Radio>
                                <Radio value="ממשלתי">ממשלתי</Radio>
                                <Radio value="מוסדות חינוך">מוסדות חינוך</Radio>
                                <Radio value="מוסדות אקדמיה">מוסדות אקדמיה</Radio>
                                <Radio value="אחר">אחר</Radio>
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