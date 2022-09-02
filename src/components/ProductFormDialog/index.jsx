import React, { useState } from 'react';

import Dialog from '../Dialog';
import { createProductFormObj, fromProductFormValue } from '../../utils/createProductFormObj';
import FormControl from '../FormControl';

const ProductFormDialog = ({ product, onCancel, onConfirm }) => {
    const [formValue, setFormValue] = useState(() => createProductFormObj(product));
    const [error, setError] = useState();

    const handleFormChange = e => setFormValue(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }));

    const handleConfirm = () => {
        const { id, ...value } = formValue;
        const hasEmptyValues = Object.values(value).some(value => value === '');

        if (hasEmptyValues) {
            setError('Please fill all fields.');
        } else {
            onConfirm(fromProductFormValue(formValue));
        }
    }

    return (
        <Dialog>
            <form noValidate>
                <FormControl label="Name">
                    <input type="text" name="name" value={formValue.name} onChange={handleFormChange} />
                </FormControl>
                <FormControl label="Count">
                    <input type="text" name="count" value={formValue.count} onChange={handleFormChange} />
                </FormControl>
                <FormControl label="Image URL">
                    <input type="text" name="imageUrl" value={formValue.imageUrl} onChange={handleFormChange} />
                </FormControl>
                <FormControl label="Weight">
                    <input type="text" name="weight" value={formValue.weight} onChange={handleFormChange} />
                </FormControl>
                <FormControl label="Width">
                    <input type="text" name="width" value={formValue.width} onChange={handleFormChange} />
                </FormControl>
                <FormControl label="Height">
                    <input type="text" name="height" value={formValue.height} onChange={handleFormChange} />
                </FormControl>

                {!!error && <div>{error}</div>}

                <div className="Dialog-actions">
                    <button type="button" onClick={onCancel}>Cancel</button>
                    <button type="button" onClick={handleConfirm}>Confirm</button>
                </div>
            </form>
        </Dialog>
    );
};

export default ProductFormDialog;
