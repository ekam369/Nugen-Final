import React, { Component } from 'react';
import './css/Assignment.css';
import NewTaskSubmission from './NewTaskSubmission';
import Submissions from './Submissions';
import AssignmentContainer from './Assignment-Container';
import AddTask from './AddTask';

class Assignment extends Component {
    
    render() { 
        return (  
            <div>
                <div className="assign-box">
                    <div className="arrow">
                        <i className="fa fa-angle-double-left ic"></i>
                    </div>
                    <AssignmentContainer />
                    <AddTask />
                    <Submissions />
                    <NewTaskSubmission />
                </div>
            </div>
        );
    }
}
 
export default Assignment;