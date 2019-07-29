import React, { Component } from 'react';
import './css/Assignment.css';
import NewTaskSubmission from './NewTaskSubmission';

class Assignment extends Component {
    
    clicks = () => {
        document.getElementById("box").style.transform = "rotateY(180deg)";
        document.getElementById("box").style.transition = "2s";
        document.getElementById("content").style.display = "none";
    }
    
    render() { 
        return (  
            <div>
                <div className="assign-box">
                    <div id="box" className="assign-cont">
                        <div id="content">
                        <div className="assi-tex">Assignment Status</div>
                        <div className="bt-search">
                            <div onClick={this.clicks} className="bt-add">
                                <i class="fas fa-plus-circle"></i>&nbsp;
                                Add</div>
                            <input type="text" className="search" placeholder="search"/>
                        </div>
                        <div className="assign-tables">
                            <div className="head-tex">Date added</div>
                            <div className="head-tex">Name</div>
                            <div className="head-tex">Language</div>
                            <div className="head-tex">Submissions</div>
                            <div className="head-tex">Credits</div>
                        </div>
                        <div className="content">
                            <div className="cont-tex">20-06-2019</div>
                            <div className="cont-tex">Moving Eyes</div>
                            <div className="cont-tex">HTML/CSS</div>
                            <div className="cont-tex">
                                <div className="sub success">20</div></div>
                            <div className="cont-tex">5.0</div>
                        </div>
                        <div className="content">
                            <div className="cont-tex">20-06-2019</div>
                            <div className="cont-tex">Moving Eyes</div>
                            <div className="cont-tex">HTML/CSS</div>
                            <div className="cont-tex">
                                <div className="sub success10">10</div></div>
                            <div className="cont-tex">5.0</div>
                        </div>
                        <div className="content">
                            <div className="cont-tex">20-06-2019</div>
                            <div className="cont-tex">Moving Eyes</div>
                            <div className="cont-tex">HTML/CSS</div>
                            <div className="cont-tex">
                                <div className="sub success15">15</div></div>
                            <div className="cont-tex">5.0</div>
                        </div>
                        <div className="content">
                            <div className="cont-tex">20-06-2019</div>
                            <div className="cont-tex">Moving Eyes</div>
                            <div className="cont-tex">HTML/CSS</div>
                            <div className="cont-tex">
                                <div className="sub success">20</div></div>
                            <div className="cont-tex">5.0</div>
                        </div>
                        <div className="content">
                            <div className="cont-tex">20-06-2019</div>
                            <div className="cont-tex">Moving Eyes</div>
                            <div className="cont-tex">HTML/CSS</div>
                            <div className="cont-tex">
                                <div className="sub success">20</div></div>
                            <div className="cont-tex">5.0</div>
                        </div>
                        <div className="content">
                            <div className="cont-tex">20-06-2019</div>
                            <div className="cont-tex">Moving Eyes</div>
                            <div className="cont-tex">HTML/CSS</div>
                            <div className="cont-tex">
                                <div className="sub success5">4</div></div>
                            <div className="cont-tex">5.0</div>
                        </div>
                        <div className="content">
                            <div className="cont-tex">20-06-2019</div>
                            <div className="cont-tex">Moving Eyes</div>
                            <div className="cont-tex">HTML/CSS</div>
                            <div className="cont-tex">
                                <div className="sub success15">18</div></div>
                            <div className="cont-tex">5.0</div>
                        </div>
                        <div className="content">
                            <div className="cont-tex">20-06-2019</div>
                            <div className="cont-tex">Moving Eyes</div>
                            <div className="cont-tex">HTML/CSS</div>
                            <div className="cont-tex">
                                <div className="sub success15">18</div></div>
                            <div className="cont-tex">5.0</div>
                        </div>
                        <div className="content">
                            <div className="cont-tex">20-06-2019</div>
                            <div className="cont-tex">Moving Eyes</div>
                            <div className="cont-tex">HTML/CSS</div>
                            <div className="cont-tex">
                                <div className="sub success15">18</div></div>
                            <div className="cont-tex">5.0</div>
                        </div>
                        <div className="content">
                            <div className="cont-tex">20-06-2019</div>
                            <div className="cont-tex">Moving Eyes</div>
                            <div className="cont-tex">HTML/CSS</div>
                            <div className="cont-tex">
                                <div className="sub success15">18</div></div>
                            <div className="cont-tex">5.0</div>
                        </div>
                        <div className="content">
                            <div className="cont-tex">20-06-2019</div>
                            <div className="cont-tex">Moving Eyes</div>
                            <div className="cont-tex">HTML/CSS</div>
                            <div className="cont-tex">
                                <div className="sub success15">18</div></div>
                            <div className="cont-tex">5.0</div>
                        </div>
                        <div className="content">
                            <div className="cont-tex">20-06-2019</div>
                            <div className="cont-tex">Moving Eyes</div>
                            <div className="cont-tex">HTML/CSS</div>
                            <div className="cont-tex">
                                <div className="sub success15">18</div></div>
                            <div className="cont-tex">5.0</div>
                        </div>
                        <div className="content">
                            <div className="cont-tex">20-06-2019</div>
                            <div className="cont-tex">Moving Eyes</div>
                            <div className="cont-tex">HTML/CSS</div>
                            <div className="cont-tex">
                                <div className="sub success15">18</div></div>
                            <div className="cont-tex">5.0</div>
                        </div>

                        </div>
                    </div>
                    <NewTaskSubmission />
                </div>
            </div>
        );
    }
}
 
export default Assignment;