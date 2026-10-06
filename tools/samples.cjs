#!/usr/bin/env node
// Prints prompts straight from index.html, for reading a domain the way the machine will write it.
// usage: node tools/samples.cjs                  list every domain with its number range
//        node tools/samples.cjs <domain-id> [n]  n prompts per courage level (default 3) and every distinct sentence
//        node tools/samples.cjs #1551            one number, with the source of every fragment
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(file, 'utf8');
const block = id => html.match(new RegExp('<script id="' + id + '"[^>]*>([\\s\\S]*?)</script>'))[1];
const load = code => { const module = { exports: {} }; new Function('module', 'window', code)(module, undefined); return module.exports; };
const eng = load(block('poi-engine')).make(JSON.parse(block('poi-data')));

const arg = process.argv[2];
const v = eng.latest(), b = eng.block(v);
function range(d) {
  let s = b.start;
  for (let i = 0; i < d; i++) s += b.sizes[i];
  return [s, s + b.sizes[d] - 1];
}
if (!arg) {
  eng.domainsAt(v).forEach((D, d) => {
    const [a, z] = range(d);
    console.log(String(d).padStart(2), D.id.padEnd(20), (eng.pad(a) + '-' + eng.pad(z)).padEnd(18), D.source);
  });
  console.log('\n' + eng.total() + ' numbers in version ' + v);
} else if (/^#?\d+$/.test(arg)) {
  const r = eng.render(parseInt(arg.replace('#', ''), 10));
  console.log(r.id, r.domain.id, r.level.name, r.words + ' words\n\n' + r.text + '\n');
  r.sentences.forEach(s => {
    console.log('[' + s.tpl + ']');
    s.frags.forEach(f => console.log('   ' + JSON.stringify(f.t).padEnd(60) + ' ' + f.g.padEnd(12) + (f.src.k === 'tpl' ? 'grammar ' + f.src.tpl : f.src.domain + '.' + f.src.path.join('.'))));
  });
} else {
  const d = eng.atlas.findIndex(D => D.id === arg);
  if (d < 0) { console.error('no domain "' + arg + '"'); process.exit(1); }
  const [a, z] = range(d), per = +process.argv[3] || 3;
  const bySlot = {};
  [2, 1, 0].forEach(level => {
    console.log('-- ' + eng.LEVELS[level].name);
    let shown = 0;
    for (let n = a; n <= z; n++) {
      const r = eng.render(n);
      r.sentences.forEach(s => { (bySlot[s.slot + ':' + s.part] = bySlot[s.slot + ':' + s.part] || new Set()).add(s.text); });
      if (r.level.id === eng.LEVELS[level].id && shown < per && (n - a) % Math.max(1, Math.floor((z - a) / (per * 3))) === 0) {
        console.log(r.id + ' (' + r.words + ' words) ' + r.text + '\n');
        shown++;
      }
    }
  });
  console.log('-- every distinct sentence');
  Object.keys(bySlot).forEach(k => { console.log('  ' + k); [...bySlot[k]].sort().forEach(t => console.log('    ' + t)); });
}
