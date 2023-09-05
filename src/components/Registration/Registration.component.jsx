// https://docs.google.com/forms/d/e/1FAIpQLScjYm6gcS-WCMMAO2Pxo7oxa2advDvmHXtBK2e8b1h8mOl-gA/formResponse?usp=pp_url&entry.934400202=%D7%99%D7%A9%D7%A8%D7%90%D7%9C+%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99&entry.1784291486=%D7%9E%D7%A1%D7%A4%D7%A8+%D7%90%D7%99%D7%A9%D7%99&entry.1115520134=%D7%93%D7%A8%D7%92%D7%94&entry.860340030=050-0000000&entry.590287215=%D7%90%D7%A4%D7%A9%D7%A8%D7%95%D7%AA+1&entry.944023911=%D7%90%D7%A4%D7%A9%D7%A8%D7%95%D7%AA+1&entry.1560729842=%D7%90%D7%A8%D7%92%D7%95%D7%9F&entry.1914024005=%D7%AA%D7%A4%D7%A7%D7%99%D7%93&entry.1642695268=%D7%9B%D7%95%D7%97%D7%95%D7%AA+%D7%94%D7%91%D7%98%D7%97%D7%95%D7%9F&emailAddress=test@gmail.com
import './Registration.styles.css';

const Registration = () => {
    return (
        <Form>
            <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Email address is required' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="seat1"
                label="מושב 1:"
                rules={[{ required: true, message: 'React version is required' }]}
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
                label="מושב 2:"
                rules={[{ required: true, message: 'React version is required' }]}
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
        </Form>
    )
}

export default Registration;