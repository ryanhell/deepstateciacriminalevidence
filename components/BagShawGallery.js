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
      <h1 className="text-3xl font-bold text-center mb-8">"Where is Ryan? I Cant let Ryan see me!"</h1>
    <h2>"It doesnt matter you have to go now the deputies are waiting at the end of the road they wont come on the property while you are here, you have to go now!"</h2>
    <p className='text-2xl'>Sally Bagshaw is who we think this lady was. She had been ordered to flee the property because for some odd reason the sheriffs deputies would not come on the property until she was off of it. After the officers placed me in the squad car Jeremiah the dispatcher who picked up us, extorted me then threatened shoot me and stole my truck then created thus false charge and attempted to swat me by calling a deputy buddy and ortdering him to make me disappear for good and saying that it was urgent; well Jewremiah is standing at the cops suv I am in and I distinctly heard Jeremiah asking to deputy in a frantic voice where this lady was did they see her and deputy said yes. Deouty didnt sound as enthusiastic and jermeiah you could tell had done these sorts of things many times before. </p>
      
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
