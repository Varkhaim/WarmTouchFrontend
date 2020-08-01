import React, { Component } from 'react';
import { signup } from '../../util/APIUtils';
import './Signup.css';
import { Link } from 'react-router-dom';
import { Form, Input, Button, notification } from 'antd';
const FormItem = Form.Item;

class Signup extends Component {
    constructor(props) {
        super(props);
    }

    onFinish(values) {
        console.info(values);
        const signupRequest = {
            name: values.name,
            email: values.email,
            username: values.username,
            password: values.password
        };
        signup(signupRequest)
            .then(response => {
                notification.success({
                    message: 'Polling App',
                    description: "Thank you! You're successfully registered. Please Login to continue!",
                });
                this.props.history.push("/login");
            }).catch(error => {
            notification.error({
                message: 'Polling App',
                description: error.message || 'Sorry! Something went wrong. Please try again!'
            });
        });
    }

    render() {
        return (
            <div className="signup-container">
                <h1 className="page-title">Sign Up</h1>
                <div className="signup-content">
                    <Form onFinish={this.onFinish} className="signup-form">
                        <Form.Item
                            label="Full Name"
                            size="large"
                            name="name"
                            autoComplete="off"
                            placeholder="Your full name"
                            >
                            <Input />
                        </Form.Item>
                        <FormItem
                            label="Username"
                            hasFeedback
                            size="large"
                            name="username"
                            autoComplete="off"
                            placeholder="A unique username"
                            >
                            <Input/>
                        </FormItem>
                        <FormItem
                            label="Email"
                            hasFeedback
                            size="large"
                            name="email"
                            type="email"
                            autoComplete="off"
                            placeholder="Your email"
                            >
                            <Input />
                        </FormItem>
                        <FormItem
                            label="Password"
                            size="large"
                            name="password"
                            type="password"
                            autoComplete="off"
                            placeholder="A password between 6 to 20 characters"
                            >
                            <Input />
                        </FormItem>
                        <FormItem>
                            <Button type="primary"
                                    htmlType="submit"
                                    size="large"
                                    className="signup-form-button"
                                    >Sign up</Button>
                            Already registered? <Link to="/login">Login now!</Link>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Signup;