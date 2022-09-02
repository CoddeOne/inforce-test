import React, { useCallback, useState } from 'react';
import ProductFormDialog from '../ProductFormDialog';

const ProductActionButton = ({ product, onAction }) => {
    const [modalShowing, setModalShowing] = useState();

    const handleCancel = useCallback(() => setModalShowing(false), []);

    const handleAction = useCallback(data => {
        onAction(data);
        handleCancel();
    }, [onAction, handleCancel])

    return (
        <>
            <button
                type="button"
                onClick={() => setModalShowing(true)}
            >
                {!product ? 'Add product' : 'Edit product'}
            </button>
            {modalShowing && (
                <ProductFormDialog
                    product={product}
                    onCancel={handleCancel}
                    onConfirm={handleAction}
                />
            )}
        </>
    );
};

export default ProductActionButton;
