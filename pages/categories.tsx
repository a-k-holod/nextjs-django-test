// pages/categories.tsx
import React from 'react';
import CategoryList from '../app/components/CategoryList';

function CategoriesPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <CategoryList />
        </main>
    );
}

export default CategoriesPage;
