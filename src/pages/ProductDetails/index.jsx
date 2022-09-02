import React from 'react';
import { useParams } from 'react-router-dom';

import { useEditProductMutation, useGetProductByIdQuery } from '../../api';
import Comments from '../../components/Comments';
import ProductActionButton from '../../components/ProductActionButton';

const ProductDetails = () => {
    const { id } = useParams();
    const { data: product, isLoading } = useGetProductByIdQuery(id);
    const [editProduct] = useEditProductMutation();

    const handleProductEdit = newProduct => editProduct(newProduct);

    if (isLoading) {
        return 'Product is loading...';
    }

    return (
        <div>
            <img src={product.imageUrl} alt={product.name} width="450" />
            <p>Product ID: {product.id}</p>
            <p>Product name: {product.name}</p>
            <p>Count: {product.count}</p>
            <p>Width: {product.size.width}</p>
            <p>Height: {product.size.height}</p>
            <p>Weight: {product.weight}</p>
            <div>
                <ProductActionButton product={product} onAction={handleProductEdit} />
            </div>

            <strong>Comments:</strong>

            <Comments comments={product.comments} />
        </div>
    );
};

export default ProductDetails;
