import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Block = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
            <div className="col">
                <div className="card shadow-lg">

                    <div className="card-body">
                        <h5 className="card-title">Why are using firebase?</h5>
                        <p className="card-text">The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                        <h5 className="card-title">What other options do  have to implement authentication?</h5>
                        <p>Password-based authentication. Passwords are the most common methods of authentication. <br />
                            Multi-factor authentication. <br />
                            Certificate-based authentication. <br />
                            Biometric authentication. <br />
                            Token-based authentication.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow-lg">

                    <div className="card-body">
                        <h5 className="card-title">what is cors?</h5>
                        <p className="card-text">Right click the site you want to enable CORS for and go to Properties. Change to the HTTP Headers tab. In the Custom HTTP headers section, click Add. Enter Access-Control-Allow-Origin as the header name. Enter * as the header value. <br />Simply activate the add-on and perform the request. CORS or Cross-Origin Resource Sharing is blocked in modern browsers by default (in JavaScript APIs). Installing this add-on will allow you to unblock this feature. <br /> Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow-lg">

                    <div className="card-body">
                        <h5 className="card-title">What is Node?</h5>
                        <p className="card-text">A node is a point, especially in the form of lump or swelling, where one thing joins another. Cut them off cleanly through the stem just below the node. ... nerve nodes. Synonyms: nodule, growth, swelling, knot More Synonyms of node.</p>
                        <h5 className="card-title">How does Node work?</h5>
                        <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow-lg ">

                    <div className="card-body">
                        <h5 className="card-title">How does the private route work?</h5>
                        <p className="card-text">The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. <br />The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Block;