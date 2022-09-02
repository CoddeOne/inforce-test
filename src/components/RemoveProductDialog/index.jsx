import React from 'react';
import Dialog from '../Dialog';

const RemoveProductDialog = ({ product, onClose, onConfirm }) => (
    <Dialog>
        <h3>Do you really want to remove product with id {product.id}?</h3>
        <div className="Dialog-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="button" onClick={onConfirm}>Confirm</button>
        </div>
    </Dialog>
);

export default RemoveProductDialog;
