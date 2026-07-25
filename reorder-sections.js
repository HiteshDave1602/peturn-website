const fs = require('fs');
const path = 'app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

function extractSection(id) {
  const re = new RegExp(`<section id="${id}"[\\s\\S]*?<\\/section>`, '');
  const match = content.match(re);
  if (!match) throw new Error(`Section ${id} not found`);
  return match[0];
}

const aboutBlock = extractSection('about');
content = content.replace(aboutBlock, '');
content = content.replace(/\n{3,}/g, '\n\n');

const heroRe = /<section id="home"[\s\S]*?<\/section>/;
const heroMatch = content.match(heroRe);
if (!heroMatch) throw new Error('Hero section not found');
const heroBlock = heroMatch[0];

const insertion = heroBlock + '\n\n      ' + aboutBlock;
content = content.replace(heroBlock, insertion);

fs.writeFileSync(path, content, 'utf8');
console.log('Done! New order: home -> about -> rest (unchanged)');