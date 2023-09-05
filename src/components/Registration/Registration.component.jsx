
import { useCallback } from 'react';
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
        <Form style={{Margin: '10rem 0 0 10rem'}}
            form={form}
            onFinish={onFinish}
        >
            <Form.Item
                name="email"
                label="email"
                rules={[{ required: true, message: 'אנא הכניסו את המייל שלכם.' }]}

            >
                <Input />
            </Form.Item>
            <Form.Item
                name="name"
                label="name"
                rules={[{ required: true, message: 'אנא הכניסו את שמכם.' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="id"
                label="id"
                rules={[{ required: true, message: 'אנא הכניסו את תעודת הזהות או המספר האישי שלכם.' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="level"
                label="level"
                rules={[{ required: false }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="phone"
                label="phone"
                rules={[{ required: true, message: 'אנא הכניסו את מספר הטלפון שלכם.' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="seat1"
                label="seat1"
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
            <Form.Item
                name="seat2"
                label="seat2"
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
                name="unit"
                label="unit"
                rules={[{ required: true, message: 'אנא הכניסו את שם הארגון / היחידה שלכם.' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="role"
                label="role"
                rules={[{ required: true, message: 'אנא הכניסו את תפקידכם בארגון' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="type"
                label="type"
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
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Registration;