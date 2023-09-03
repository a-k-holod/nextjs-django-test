// components/Products.js
'use client';
import React, { useEffect, useState } from 'react';
const categoryAPI = 'https://django-rest-starter-production-0e39.up.railway.app/api/categories/';
const productAPI = 'https://django-rest-starter-production-0e39.up.railway.app/api/products/';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('https://django-rest-starter-production-0e39.up.railway.app/api/products/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
