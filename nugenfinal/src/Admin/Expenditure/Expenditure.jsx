import React, { Component } from 'react';
import './css/Expenditure.css';
import ExpenditureInput from './ExpenditureInput';

class Expenditure extends Component {

    state = {
        show: false
    }

    showExpInp = () => {
        this.setState( {
            show: true
        })
    }

    updateParState = () => {
        this.setState({
            show: false
        })
    }

    render() { 
        return (
            <div>
                <div className="exp-cont">
                    <div className="up-cont">
                        <div className="assi-tex">Expenditures</div>
                        <div className="bt-search">
                            <div onClick={this.showExpInp} className="bt-add">
                                <i className="fas fa-plus-circle"></i>&nbsp;
                                Add</div>
                            <input type="text" className="search" placeholder="search"/>
                        </div>
                    </div>
                    <div className="box"></div>
                </div>
                <ExpenditureInput show={this.state.show} toggleState={this.updateParState}/>
            </div>  
        );
    }
}
 
export default Expenditure;