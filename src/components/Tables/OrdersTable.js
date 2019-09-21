import React, { Component } from 'react';
import NextOrder from './NextOrder';
import { Orders } from '../../../Context';

class OrdersTable extends Component {
    static contextType = Orders;

    render() {
        const {UpcomingOrders} = this.context;
        
        return (
            <div className="nexts-orders">
                <table className="responsive-table centered">
                    <thead>
                        <tr>
                            <th>Table</th>
                            <th>Name</th>
                            <th>Seats</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {UpcomingOrders.map(UpcomingOrder => (
                            <NextOrder key={UpcomingOrder.id} UpcomingOrder={UpcomingOrder}/>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default OrdersTable;