import React from "react"

function MainContent() {
    return (
        <div className="row">
            <div className="center-block">
                <div className="left-badger">
                    <img className="img-circle img-responsive" alt="me.jpg" src="https://davesherlock.com/img/me-bw3.jpg" />
                </div>
                <div className="right-badger">
                    <div className="text-wrapper">
                        <h1>Dave Sherlock</h1>
                        <h4>Web Applications Developer &amp; Interaction Designer</h4>
                        <a href="mailto:hello@davesherlock.com">hello@davesherlock.com</a><br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent