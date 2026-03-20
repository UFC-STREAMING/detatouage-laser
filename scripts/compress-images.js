const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const targetImages = [
  'Accueil-detatouage.png',
  'Contact-detatouage.png',
  'avant-apres-detatouage.png',
  'Ville-detatouage.png',
  'Departement-detatouage.png'
];

async function compressImage(filename) {
  const inputPath = path.join(imagesDir, filename);
  const outputPath = path.join(imagesDir, filename.replace('.png', '.webp'));
  
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  ${filename} not found, skipping`);
    return;
  }

  const statsBefore = fs.statSync(inputPath);
  const sizeBefore = (statsBefore.size / 1024 / 1024).toFixed(2);

  console.log(`🔄 Compressing ${filename} (${sizeBefore}MB)...`);

  try {
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);

    const statsAfter = fs.statSync(outputPath);
    const sizeAfter = (statsAfter.size / 1024 / 1024).toFixed(2);
    const reduction = ((1 - statsAfter.size / statsBefore.size) * 100).toFixed(1);

    console.log(`✅ ${filename} → ${outputPath.split('/').pop()}`);
    console.log(`   Before: ${sizeBefore}MB | After: ${sizeAfter}MB | Reduction: ${reduction}%\n`);
  } catch (error) {
    console.error(`❌ Error compressing ${filename}:`, error.message);
  }
}

async function compressAll() {
  console.log('🚀 Starting image compression...\n');
  
  for (const filename of targetImages) {
    await compressImage(filename);
  }
  
  console.log('✅ Compression complete!');
}

compressAll().catch(console.error);
