const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory() && f !== 'node_modules') walk(full).forEach(r => results.push(r));
    else if (f.endsWith('.tsx')) results.push(full);
  });
  return results;
}
walk('src/app').forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const lines = content.split('\n');
  let foundExport = false;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(/^export\s/)) foundExport = true;
    if (!foundExport && lines[i].includes('t(')) {
      if (lines[i].includes('import') || lines[i].includes('//') || lines[i].includes('const {')) continue;
      console.log(file + ':' + (i+1) + ': ' + lines[i].trim());
    }
  }
});
