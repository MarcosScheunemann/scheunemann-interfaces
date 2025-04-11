const fs = require('fs');
const path = require('path');

const pkgPath = path.resolve(__dirname, 'package.json');
const pkg = require(pkgPath);

function incrementVersion(version) {
  const parts = version.split('.');
  const patch = parseInt(parts[2]) + 1;
  return `${parts[0]}.${parts[1]}.${patch}`;
}
pkg.version = incrementVersion(pkg.version);
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
