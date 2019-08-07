import React, { Component } from 'react';
import './css/ExpenditureInput.css';

class ExpenditureInput extends Component {

    close = () => {
        this.props.toggleState();
    }

    render() { 
        return (  
            <div className="inp-cont"
             style={
                 true ? {display:"block"} : {display:"none"}}>
                
                <div className="exp-inp-box">
                    <div className="exp-inp-cont">
                        <div className="cross-cont">
                            <div className="cross"></div>
                        </div>
                        <div className="inp-up-cont">
                            <div className="inp-up-tex">Expenditure Details</div>
                        </div>
                        <div className="inp-details-cont">
                            <div className="inp-details-box">
                                <div className="detail-box">
                                    <label>PAID BY</label>
                                    <input type="text" placeholder="Paid By"/>
                                </div>
                                <div className="detail-box">
                                    <label>Description</label>
                                    <input type="text" placeholder="Description"/>
                                </div>
                                <div className="detail-box">
                                    <label>Mode Of Payment</label>
                                        <select id="mode">
                                        <option selected>Mode Of Payment</option>
                                        <option >Cash</option>
                                        <option >Cheque</option>
                                        <option >Paytm</option>
                                        <option >Google Pay</option>
                                        <option >Phone Pe</option>
                                    </select>
                                </div>
                                <div className="detail-box">
                                    <label>From Account Of</label>
                                    <input type="text" placeholder="From Account of"/>
                                </div>
                                <div className="detail-box">
                                    <label>Amount</label>
                                    <input type="text" placeholder="Amount"/>
                                </div>

                                <div onClick={this.close} className="inp-submit-btn">Add Details</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ExpenditureInput;