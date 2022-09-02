import React from 'react';

import { useAddProductMutation } from '../../api';
import useProductsList from '../../hooks/useProductsList';
import useProductRemove from '../../hooks/useProductRemove';
import ProductCard from '../../components/ProductCard';
import RemoveProductDialog from '../../components/RemoveProductDialog';
import ProductActionButton from '../../components/ProductActionButton';
import './index.css';

const Products = () => {
    const { isLoading, products, sort, changeSort } = useProductsList();
    const { selectedForRemoval, setSelectedForRemoval, confirmRemoval, deselectForRemoval } = useProductRemove();
    const [addProduct] = useAddProductMutation();

    if (isLoading) {
        return <p>Products list is loading...</p>;
    }

    return (
        <div className="ProductsList">
            <div className="ProductsList-sort">
                <ProductActionButton onAction={addProduct} />
                <select value={sort} onChange={changeSort}>
                    <option value="alphabetically">Alphabetically</option>
                    <option value="count">By count</option>
                </select>
            </div>
            <div className="ProductsList-grid">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onDelete={setSelectedForRemoval}
                    />
                ))}
            </div>
            {selectedForRemoval && (
                <RemoveProductDialog
                    product={selectedForRemoval}
                    onClose={deselectForRemoval}
                    onConfirm={confirmRemoval}
                />
            )}
        </div>
    );
};

export default Products;
