import React, { Component } from 'react';
import { Orders } from '../../Context';

class NextOrder extends Component {
    static contextType = Orders;

    // ClickMe = (name, table, e) => {
    //     console.log(name, table);
    //     console.log(e.target);
    // }

    render() {
        const {id ,table, name, amount, date, time} = this.props.UpcomingOrder;
        const {deleteOrder} = this.context;
        // const show = {
        //     display: canceled ? 'none' : 'inherent'
        // }

        return (
            // <React.Fragment>
                <tr>
                    <td>{table}</td>
                    <td>{name}</td>
                    <td>{amount}</td>
                    <td>{date}</td>
                    <td>{time}</td>
                    <td className="icons">
                        <i className="material-icons prefix">edit</i>
                    </td>
                    <td className="icons">
                        <i onClick={deleteOrder.bind(this, id)} className="material-icons prefix">delete</i>
                    </td>
                </tr>
            //  </React.Fragment>
        )
    }
}

export default NextOrder;