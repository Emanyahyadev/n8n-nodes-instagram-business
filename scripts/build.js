const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Clean dist directory
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true, force: true });
}

// 2. Compile TypeScript
console.log('Compiling TypeScript...');
execSync('npx tsc', { stdio: 'inherit' });

// 3. Helper to copy matching assets
function copyFiles(srcDir, destDir, extensions) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const files = fs.readdirSync(srcDir);
  for (const file of files) {
    const srcFile = path.join(srcDir, file);
    const stat = fs.statSync(srcFile);
    if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) {
      const destFile = path.join(destDir, file);
      fs.copyFileSync(srcFile, destFile);
      console.log(`Copied ${file} -> ${path.relative(path.join(__dirname, '..'), destDir)}`);
    }
  }
}

// 4. Copy assets for Instagram node & credentials
const root = path.join(__dirname, '..');
copyFiles(path.join(root, 'nodes', 'Instagram'), path.join(root, 'dist', 'nodes', 'Instagram'), ['.svg', '.json']);
copyFiles(path.join(root, 'credentials'), path.join(root, 'dist', 'credentials'), ['.svg']);

console.log('Build completed successfully!');
