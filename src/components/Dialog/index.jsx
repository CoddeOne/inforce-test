import React from 'react';
import { createPortal } from 'react-dom';

import './index.css';

const Dialog = ({ children }) => createPortal(
    <div className="Dialog">
        <div className="Dialog-modal">
            {children}
        </div>
    </div>,
    document.body
)

export default Dialog;
