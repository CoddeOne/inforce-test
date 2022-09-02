import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const ProductCard = ({ product, onDelete }) => (
    <div className="ProductCard">
        <img
            className="ProductCard-image"
            src={product.imageUrl}
            alt={product.name}
        />
        <div className="ProductCard-content">
            <h3>{product.name}</h3>

            <Link to={`/${product.id}`}>
                <button type="button">Details</button>
            </Link>
            <button type="button" onClick={() => onDelete(product)}>Delete</button>
        </div>
    </div>
);

export default memo(ProductCard);
