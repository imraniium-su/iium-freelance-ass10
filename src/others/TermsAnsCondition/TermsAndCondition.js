import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h3>Terms and conditions</h3>
            <p>Go back to : <Link to='/register'>Registration</Link></p>
        </div>
    );
};

export default TermsAndCondition;