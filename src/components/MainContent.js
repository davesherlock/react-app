import React from "react"

function MainContent() {
    return (
        <div id="page-content-wrapper">
            <div className="container-fluid">
                <div className="clearfix"><br/>
                </div>
                <div className="row" id="icon-div" style="height:50px;">
                    <div className="col-lg-12"><!--TOGGLE THIS PADDING-->
                        <span className="pull-right " id="menu-toggle">
          <i className="fa fa-bars fa-2x" id="menu-icon"></i>
          <i className="fa fa-times fa-2x" id="close-icon" style="display:none;"></i>
          </span>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="center-block">

                            <div className="left-badger">
                                <img className="img-circle img-responsive"
                                     src="https://davesherlock.com/img/me-bw3.jpg"/>
                            </div>
                            <div className="right-badger">
                                <div className="text-wrapper">
                                    <h1>Dave Sherlock</h1>
                                    <h4>Web Applications Developer & Interaction Designer</h4>
                                    <a href="mailto:hello@davesherlock.com"
                                       target="_blank">hello@davesherlock.com</a><br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent