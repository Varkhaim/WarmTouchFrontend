import React, {Component} from 'react';
import AdminNewsBox from './AdminNews/AdminNewsBox';
import AdminPricingBox from './AdminPricing/AdminPricingBox';

const adminURL = "http://localhost:8080/about/all"
class AdminBox extends Component 
{
    render()
    {
        return (  
        <div className="admin-card">
            <div className="card-header">
              <h2 className="mb-0">
                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne">
                  Newsy
                </button>
              </h2>
            </div>
            <div id="collapseOne" className="collapse in">
              <div className="card-body">
                <AdminNewsBox />          
              </div>
            </div>
            
            <div className="card-header">
              <h2 className="mb-0">
                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTwo">
                  Cennik
                </button>
              </h2>
            </div>
            <div id="collapseTwo" className="collapse in">
              <div className="card-body">
                <AdminPricingBox />          
              </div>
            </div>
        </div>
        )
    }
}

export default AdminBox;