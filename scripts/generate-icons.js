import sharp from 'sharp';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgPath = resolve(__dirname, '../public/icon-512.svg');
const svg = readFileSync(svgPath);

const sizes = [
  { size: 180, file: 'apple-touch-icon.png' },
  { size: 192, file: 'icon-192.png' },
  { size: 512, file: 'icon-512.png' },
  { size: 32, file: 'favicon-32.png' },
  { size: 16, file: 'favicon-16.png' },
];

for (const { size, file } of sizes) {
  await sharp(svg, { density: 600 })
    .resize(size, size)
    .png()
    .toFile(resolve(__dirname, '../public', file));
  console.log(`Generated ${file} (${size}x${size})`);
}
