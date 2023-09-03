// app/components/CategoryList.tsx
'use client';

import React, { useEffect, useState } from 'react';

function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch('https://django-rest-starter-production-0e39.up.railway.app/api/categories/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }

        fetchCategories();
    }, []);

    return (
        <div>
            <h2>Categories</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <strong>Name:</strong> {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryList;
