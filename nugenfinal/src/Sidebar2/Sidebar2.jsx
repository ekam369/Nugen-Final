import React, { Component } from 'react';
import './css/Sidebar2.css';

class Sidebar2 extends Component {
    render() { 
        return (  
            <div>
                <div id="side-cont" className="side-cont">
                    <div className="tabs-cont">
                        <div className="head-tex">Main Apps</div>
                        <div className="tab">
                            <i class="fas fa-tachometer-alt ico"></i>
                            <div className="tab-tex">Dashboard</div>
                        </div>
                        <div className="tab">
                            <i class="far fa-calendar-check ico"></i>
                            <div className="tab-tex">Calendar</div>
                        </div>
                        <div className="tab">
                            <i class="fas fa-rss ico"></i>
                            <div className="tab-tex">News Feed</div>
                        </div>
                        <div className="tab">
                            <i class="fas fa-print ico"></i>
                            <div className="tab-tex">Invoices</div>
                        </div>

                        <div className="head-tex">Student Details</div>
                        <div className="tab">
                            <i class="fas fa-user ico"></i>
                            <div className="tab-tex">Admissions</div>
                        </div>
                        <div className="tab">
                            <i class="fas fa-money-check-alt ico"></i>
                            <div className="tab-tex">Installments</div>
                        </div>
                        <div className="tab">
                            <i class="fas fa-user-friends ico"></i>
                            <div className="tab-tex">Batches</div>
                        </div>
                        <div className="tab">
                            <i class="fas fa-user ico"></i>
                            <div className="tab-tex">Attendance</div>
                        </div>
                        <div className="tab">
                            <i class="fas fa-book-open ico"></i>
                            <div className="tab-tex">Assignments</div>
                        </div>
                        <div className="tab">
                            <i class="fas fa-bible ico"></i>
                            <div className="tab-tex">Today's Task</div>
                        </div>
                        <div className="tab">
                            <i class="fas fa-bookmark ico"></i>
                            <div className="tab-tex">Topics</div>
                        </div>

                        <div className="head-tex">Account</div>
                        <div className="tab">
                            <i class="fas fa-user-circle ico"></i>
                            <div className="tab-tex">Account Details</div>
                        </div>
                        <div className="tab">
                            <i class="fas fa-user-cog ico"></i>
                            <div className="tab-tex">Account Settings</div>
                        </div>
                    </div>

                    
                </div>
                
            </div>
        );
    }
}
 
export default Sidebar2;