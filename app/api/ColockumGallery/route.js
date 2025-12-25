import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), 'public');
    const galleryDir2 = path.join(publicDir, 'Chelan/July4_2024'); // Changed from 'gallery' to 'ryansPhotos'
    
    // Check if ryansPhotos directory exists
    if (!fs.existsSync(galleryDir2)) {
      return NextResponse.json({ images: [] });
    }

    // Read all files from the ryansPhotos directory
    const files = fs.readdirSync(galleryDir2);
    
    // Filter for image files
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const images = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext);
      })
      .map(file => ({
        name: file,
        src: `Chelan/july4_2024/${file}`, // Changed from '/gallery/' to '/ryansPhotos/'
        alt: path.parse(file).name
      }));

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error reading ryansPhotos directory:', error);
    return NextResponse.json({ error: 'Failed to load images' }, { status: 500 });
  }
}