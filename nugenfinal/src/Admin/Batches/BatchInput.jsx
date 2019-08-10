import React, { Component } from 'react';
import BatchInpContainer from './BatchInpContainer';
import './css/BatchInput.css';

class BatchInput extends Component {

    state = {
        closed: false
    }

    close = () => {
        this.changeState('closed', true);
        setTimeout( () => {
            this.props.toggleState();
            this.setState({
                closed: false
            })
        }, 590)
    }

    changeState(selState, val) {
        this.setState({
            [selState]: val
        })
    }

    render() { 
        return (  
            <div className="inp-cont "
             style={
                this.props.show ? {display:"block"} : {display:"none"}}>
                
                <div className={!this.state.closed ? "exp-inp-box animOpen" : "exp-inp-box animClose"}>
                    <div className="exp-inp-cont">
                        <div className="cross-cont">
                            <div onClick={this.close} className="cross"></div>
                        </div>
                        <div className="inp-up-cont">
                            <div className="inp-up-tex">CREATE BATCH</div>
                        </div>
                        <BatchInpContainer makeClose={this.close}/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default BatchInput;