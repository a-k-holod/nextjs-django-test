// pages/index.tsx
import React from 'react';
import Link from 'next/link';

function HomePage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h2>Products</h2>
                <Link href="/products">View Products</Link>
            </div>
            <div>
                <h2>Categories</h2>
                <Link href="/categories">View Categories</Link>
            </div>
        </main>
    );
}

export default HomePage;
