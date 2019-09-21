import React, { Component } from 'react';
import '../../style/main.css';
import OrdersTable from '../Tables/OrdersTable';
import Form from '../Form';

 class Main extends Component {

     render(){
        return (
            <div className="Main">
                <div className="row">
                    <div className="col s6">
                        <Form />
                    </div>
                </div>

                <div className="row">
                    <div className="col s6">
                        <OrdersTable />
                    </div>
                </div>
            </div>
        );
    }
      
}

export default Main;
