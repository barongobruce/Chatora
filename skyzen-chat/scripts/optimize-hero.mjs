import sharp from "sharp";
import fs from "fs";

const input = "src/assets/images/hero-connection.png";
const output = "src/assets/images/hero-connection.webp";

if (!fs.existsSync(input)) {
  console.error(`❌ Image not found: ${input}`);
  process.exit(1);
}

await sharp(input)
  .webp({
    quality: 82,
    effort: 6,
  })
  .toFile(output);

const originalSize = fs.statSync(input).size;
const newSize = fs.statSync(output).size;

console.log("\n✅ Hero image converted successfully!");
console.log(
  `Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`
);
console.log(
  `WebP: ${(newSize / 1024 / 1024).toFixed(2)} MB`
);
console.log(
  `Reduction: ${((1 - newSize / originalSize) * 100).toFixed(1)}%`
);