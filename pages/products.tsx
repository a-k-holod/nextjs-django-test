// pages/products.tsx
import React from 'react';
import ProductList from '../app/components/ProductList';

function ProductsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <ProductList />
        </main>
    );
}

export default ProductsPage;
