import React, { Component } from 'react';
import './css/Assignment.css';
import NewTaskSubmission from './NewTaskSubmission';
import Submissions from './Submissions';
import AssignmentContainer from './Assignment-Container';
import AddTask from './AddTask';
import Sidebar2 from '../../Sidebar2/Sidebar2';
import Head from '../../Head/Head';

class Assignment extends Component {
    
    render() { 
        return (  
            <div>
                <Head />
                <Sidebar2 />
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