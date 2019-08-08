import React, { Component } from 'react';
// import Aux from '../../HOC/Aux';
import './css/ExpenditureInput.css';

class ExpInpContainer extends Component {

    close = (e) => {
        e.preventDefault();
    }

    render() { 
        return (  
                <div className="inp-details-cont">
                    <div className="inp-details-box">
                    <form >
                        <div className="detail-box">
                            <label>PAID BY</label>
                            <input type="text" name="name" placeholder="Paid By" required/>
                        </div>
                        <div className="detail-box">
                            <label>Description</label>
                            <input type="text" name="desc" placeholder="Description" required/>
                        </div>
                        <div className="detail-box">
                            <label>Mode Of Payment</label>
                                <select id="mode" required>
                                <option value="">Mode Of Payment</option>
                                <option value="cash">Cash</option>
                                <option value="cheque">Cheque</option>
                                <option value="paytm">Paytm</option>
                                <option value="googlepay">Google Pay</option>
                                <option value="phonepe">Phone Pe</option>
                            </select>
                        </div>
                        <div className="detail-box">
                            <label>From Account Of</label>
                            <input type="text" placeholder="From Account of" required/>
                        </div>
                        <div className="detail-box">
                            <label>Amount</label>
                            <input type="text" placeholder="Amount" required/>
                        </div>
                        <button onClick={this.props.makeClose} className="inp-submit-btn" type="submit">Add Details</button>
                    </form>
                </div>
            </div>
            
        );
    }
}
 
export default ExpInpContainer;