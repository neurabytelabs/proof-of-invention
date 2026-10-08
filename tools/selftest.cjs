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
const WALL = JSON.parse(block('wall-data'));

// The wall: every card is checked against the atlas, and the model rule is tested on fixed cards.
const ST = sandbox.POI_SELFTEST;
const card = extra => Object.assign({ n: 1551, domain: 'a computer', level: 'all out', duration: '1 hour', verdict: 'held' }, extra);
const wallChecks = [
  ['every card on the wall is sound', ST.wall(sandbox.POI, DATA, WALL), WALL.length + ' cards: number in the atlas, domain and level as decoded, model, duration, verdict'],
  ['a card may name its model', ST.wall(sandbox.POI, DATA, [card({ model: 'Example Model 1 (example-model-1)' })]), 'a named model is accepted as before'],
  ['a card may give a general class instead of a model', ST.wall(sandbox.POI, DATA, [card({ model: 'coding agent' })]), 'classes: ' + ST.MODEL_CLASSES.join(', ')],
  ['a card without a model fails', ST.wall(sandbox.POI, DATA, [card({}), card({ model: '' }), card({ model: '  ' })]).length === 3 ? [] : ['a card without a model passed'], 'missing, empty and blank models are all rejected'],
  ['a general class is told apart from a named model', ST.isModelClass('coding agent') && !ST.isModelClass('Example Model 1') && !ST.isModelClass(undefined) ? [] : ['isModelClass is wrong'], 'the page marks a class as one and shows a named model as written'],
  ['a card whose number decodes elsewhere fails', ST.wall(sandbox.POI, DATA, [card({ model: 'coding agent', domain: 'a radio' })]).length === 1 ? [] : ['a wrong domain passed'], 'a class does not excuse a card from the other rules'],
].map(([name, bad, detail]) => ({ name, pass: bad.length === 0, detail: bad.length ? bad.join('; ') : detail }));

sandbox.POI_SELFTEST.run(sandbox.POI, DATA, (p, msg) => process.stderr.write('\r' + msg.padEnd(60)), block('poi-engine')).then(res => {
  process.stderr.write('\r' + ' '.repeat(60) + '\r');
  const results = res.results.concat(wallChecks);
  const pass = results.every(r => r.pass);
  for (const r of results) console.log((r.pass ? 'pass  ' : 'FAIL  ') + r.name + '\n      ' + r.detail);
  console.log('\n' + (pass ? 'every check passed' : 'SOME CHECKS FAILED') + ' · ' + res.total + ' numbers · ' + (res.ms / 1000).toFixed(1) + ' s');
  process.exitCode = pass ? 0 : 1;
});
