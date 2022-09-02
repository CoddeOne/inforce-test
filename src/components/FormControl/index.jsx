import React from 'react';

import './index.css';

const FormControl = ({ children, label }) => (
    <div className="FormControl">
        <label>{label}</label>:
        {children}
    </div>
);

export default FormControl;
