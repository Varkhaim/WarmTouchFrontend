import React, { Component } from 'react';
import { login } from '../../util/APIUtils';
import { Link } from 'react-router-dom';
import { ACCESS_TOKEN } from '../../constants';

import { Form, Input, Button, notification } from 'antd';
import Icon from '@ant-design/icons'

class Login extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            onLogin: this.props.onLogin
        }
    }

    render() {
        return (
            <div className="login-container">
                <h1 className="page-title">Login</h1>
                <div className="login-content">
                    <LoginForm onLogin={this.state.onLogin} />
                </div>
            </div>
        );
    }
}

class LoginForm extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            onLogin: this.props.onLogin
        }

        this.onFinish = this.onFinish.bind(this);
    }

    onFinish(values)    {
        login(values)
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                this.state.onLogin();
            }).catch(error => {
            if (error.status === 401) {
                notification.error({
                    message: 'Polling App',
                    description: 'Your Username or Password is incorrect. Please try again!'
                });
            } else {
                notification.error({
                    message: 'Polling App',
                    description: error.message || 'Sorry! Something went wrong. Please try again!'
                });
            }
        });
    }

    render() {
        return (
            <Form onFinish={this.onFinish} className="login-form">
                <Form.Item
                    name={'usernameOrEmail'}
                    rules={[{required: true, message: 'Please input your username or email!' }]}
                    prefix={<Icon type="user" />}
                    size="large"
                    placeholder="Username or Email" >
                        <Input/>
                </Form.Item>
                <Form.Item
                    name={'password'}
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                    prefix={<Icon type="lock" />}
                    size="large"
                    type="password"
                    placeholder="Password"
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" size="large" className="login-form-button">Login</Button>
                    Or <Link to="/signup">register now!</Link>
                </Form.Item>
            </Form>
        );
    }
}


export default Login;