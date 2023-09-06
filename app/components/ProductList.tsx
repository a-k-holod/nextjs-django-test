// app/components/ProductList.tsx
import React, { useEffect, useState } from 'react';

interface Product {
    id: number;
    name: string;
    category: {
        name: string;
    };
    description: string;
    price: number;
}

function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);

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
                    <li key={product.id}>
                        <strong>Name:</strong> {product.name}<br />
                        <strong>Category:</strong> {product.category.name}<br />
                        <strong>Description:</strong> {product.description}<br />
                        <strong>Price:</strong> ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
