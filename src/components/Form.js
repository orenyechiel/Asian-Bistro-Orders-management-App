import React, { Component } from 'react';
import { Orders } from '../Context';
import M from 'materialize-css';

class Form extends Component {

    state =  {
        formNewOrder: {
            name: '',
            phone: '',
            amount: '',
            date: '',
            time: '',
            table: '',
            canceled: false
        }
    }

    static contextType = Orders;
    
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    //  intialDatePicker = () => {
    //     document.addEventListener('DOMContentLoaded', function() {
    //         var elems = document.querySelectorAll('.datepicker');
    //         M.Datepicker.init(elems, {isRTL: false});
    //     });
    // }

    inputValue = (e) => {
        this.setState({
            [e.target.name]:  e.target.value
        })
    };

    submitForm = (e) => {
        e.preventDefault();
        this.context.addOrder(this.state);
    };


    render() {
        const { name, phone, amount, date, time } = this.props;

        return (
            <form onSubmit={this.submitForm}>
                <div className="input-field col s12">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="name_field" type="text" className="validate" name='name' value={name} onChange={this.inputValue} required />
                    <label htmlFor="name_field">Name</label>
                </div>
                <div className="input-field col s12">
                    <i className="material-icons prefix">phone</i>
                    <input id="telephone_field" type="tel" className="validate" name='phone' value={phone} onChange={this.inputValue} required />
                    <label htmlFor="telephone_field">Phone</label>
                </div>
                <div className="input-field col s12">
                    <i className="material-icons prefix">supervisor_account</i>
                    <input id="amount_field" type="number" className="validate" name='amount' value={amount} onChange={this.inputValue} required />
                    <label htmlFor="amount_field">Amount</label>
                </div>

                <div className="input-field col s6">
                    <i className="material-icons prefix">date_range</i>
                    <input id="date_field" type="text" className="datepicker" name="date" value={date} onChange={this.inputValue} />
                    <label htmlFor="date_field">date</label>
                </div>

                <div className="input-field col s6">
                    <i className="material-icons prefix">access_time</i>
                    <input id="time_field" type="text" className="timepicker" name="time" value={time} onChange={this.inputValue} />
                    <label htmlFor="time_field">time</label>
                </div>

                <button className="btn blue-grey darken-3 waves-effect waves-light" type="submit" name="action">
                    Add the Order
                    <i className="material-icons right">send</i>
                </button>
            </form>
        )
    }
}

export default Form;