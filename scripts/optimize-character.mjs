import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const source = 'src/assets/happy-character-source.png';

await mkdir('public/images', { recursive: true });

await sharp(source).resize(640, 640, { fit: 'inside' }).webp({ quality: 84 }).toFile('public/images/happy-character.webp');

await sharp(source).resize(800, 800, { fit: 'inside' }).png({ compressionLevel: 9, palette: true }).toFile('public/images/happy-character-og.png');

console.log('optimized character images written');
