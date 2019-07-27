import React, { Component } from 'react';
import './css/Head.css';
import $ from 'jquery';

class Head extends Component {

    componentDidMount() {
        //Jquert menu bars
        $(document).ready(function(){
            $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
                $(this).toggleClass('open');
            });
        });
    }

    show = () => {
        document.getElementById("side-cont").style.width="281px";
    }

    render() { 
        return (  
            <div className="headCont">
                <div className="nugen-template">
                <div onClick={this.show} className="sideMenu">
                    <div id="nav-icon1">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
 
export default Head;