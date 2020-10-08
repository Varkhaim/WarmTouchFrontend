import React, {Component} from 'react';
import AdminBox from "./../components/Admin/AdminBox";
import LoginBox from "./../components/Admin/LoginBox";
import jwt_decode from "jwt-decode";
import AuthService from '../components/services/auth.service';

class AdminPage extends Component 
{
    render() 
    {
        var user = jwt_decode(AuthService.getCurrentUser().accessToken).sub;
        console.log(user);
        return (
            <div className="admin-page">
                {user=="admin"
                ? <AdminBox />
                : <LoginBox />}
            </div>)
    }
}   

export default AdminPage;