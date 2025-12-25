'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Gallery() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await fetch('/api/gallery');

            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }

            const data = await response.json();
            setImages(data.images || []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <div className="text-lg">Loading gallery...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <div className="text-red-500">Error: {error}</div>
            </div>
        );
    }

    if (images.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <div className="text-gray-500">No images found in gallery</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="content_bg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-9">
                {images.map((image, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-lg  hover:shadow-xl transition-shadow duration-300 drop-shadow-2xl">
                        <div className="relative aspect-square shadow">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                        </div>
                        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                    </div>
                ))}
            </div>
        </div>
    );
}
