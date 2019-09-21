import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
// import uuid from 'uuid';

export const OrderContext = createContext()

const OrdersProvider = (props) => {
    const [orders, setOrders] =  useState([]);

    useEffect(
        // const that = this;
        // axios.get('http://localhost:5000').then( res => {
        //     const serverData = res.data;
        //     console.log(serverData)
        //     that.setState({UpcomingOrder: serverData})
        axios.get(`http://localhost:5000`)
            .then(res => {
                const orders = res.data;
                setOrders(orders);
            })
    )

    // const addOrder = (formNewOrder) => {
    //     const newOrder = {
    //         id: uuid.v4(),
    //         name: formNewOrder.name,
    //         amount: formNewOrder.amount,
    //         date: formNewOrder.date,
    //         time: formNewOrder.time,
    //         table: formNewOrder.table,
    //         canceled: false
    //     }

    //     this.setState({UpcomingOrders:
    //         [...this.state.UpcomingOrders, newOrder ]
    //     });
    // }


    // const deleteOrder = (id) => {
    //     this.setState({UpcomingOrders: 
    //         [...this.state.UpcomingOrders.filter(UpcomingOrder => UpcomingOrder.id !== id )] 
    //     });
    // }


    return (
        <OrderContext.Provider value={{ 
            ...this.state, 
            addOrder: this.addOrder, 
            deleteOrder: this.deleteOrder 
            }}>
            {this.props.children}
        </OrderContext.Provider>
    )
}

export default OrdersProvider;