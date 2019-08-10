import React, { Component } from 'react';

class BatchInpcontainer extends Component {

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showInp = () => {
        console.log(this.state);
    }

    render() { 
        return (  
                <div className="inp-details-cont">
                    <div className="inp-details-box">
                    <form >
                        <div className="detail-box">
                            <label>TOTAL STUDENTS</label>
                            <input onChange={this.handleInput} type="number" name="total_students" placeholder="Total Students" required/>
                        </div>
                        <div className="detail-box">
                            <label>BATCH NAME</label>
                            <input onChange={this.handleInput} type="text" name="batch_name" placeholder="Batch Name" required/>
                        </div>
                        <div className="detail-box">
                            <label>COURSE NAME</label>
                            <input onChange={this.handleInput} type="text" name="course_name" placeholder="Course Name" required/>
                        </div>
                        <div className="detail-box">
                            <label>BATCH TIMING</label>
                            <input onChange={this.handleInput} type="text" name="batch_timing" placeholder="Batch Timing" required/>
                        </div>
                        <button onClick={this.showInp} className="inp-submit-btn" type="submit">Add Details</button>
                    </form>
                </div>
            </div>
            
        );
    }

}
 
export default BatchInpcontainer;