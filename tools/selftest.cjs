#!/usr/bin/env node
// Runs the page's own self-test headlessly, straight from index.html (no build step, no dependencies).
// usage: node tools/selftest.cjs [path/to/index.html]
const fs = require('fs');
const path = require('path');

const file = path.resolve(process.argv[2] || path.join(__dirname, '..', 'index.html'));
const html = fs.readFileSync(file, 'utf8');
const block = id => {
  const m = html.match(new RegExp('<script id="' + id + '"[^>]*>([\\s\\S]*?)</script>'));
  if (!m) throw new Error('missing <script id="' + id + '"> in ' + file);
  return m[1];
};
// load the page's own scripts as CommonJS modules (both end with `module.exports = ...`)
const load = code => { const module = { exports: {} }; new Function('module', 'window', code)(module, undefined); return module.exports; };
const sandbox = { POI: load(block('poi-engine')), POI_SELFTEST: load(block('poi-selftest')) };
const DATA = JSON.parse(block('poi-data'));
JSON.parse(block('wall-data')); // the wall must at least be valid JSON

sandbox.POI_SELFTEST.run(sandbox.POI, DATA, (p, msg) => process.stderr.write('\r' + msg.padEnd(60)), block('poi-engine')).then(res => {
  process.stderr.write('\r' + ' '.repeat(60) + '\r');
  for (const r of res.results) console.log((r.pass ? 'pass  ' : 'FAIL  ') + r.name + '\n      ' + r.detail);
  console.log('\n' + (res.pass ? 'every check passed' : 'SOME CHECKS FAILED') + ' · ' + res.total + ' numbers · ' + (res.ms / 1000).toFixed(1) + ' s');
  process.exitCode = res.pass ? 0 : 1;
});
