// 表示処理。掲載内容は content.js で編集します。
const { projects, skills } = window.portfolioContent;
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function safeUrl(value) {
  if (!value) return null;
  try { const url = new URL(value, document.baseURI); return ['http:', 'https:'].includes(url.protocol) ? url.href : null; }
  catch { return null; }
}
function addGitHubIcon(node) {
  const icon = element('img', 'github-icon'); icon.src = 'assets/icons/github.svg';
  icon.alt = ''; icon.width = 20; icon.height = 20;
  node.prepend(icon); node.classList.add('with-github-icon'); return node;
}
// Skills・制作物は共通のカードで表示します。
function githubLink(value, label = 'GitHub') {
  const url = safeUrl(value);
  if (url && new URL(url).hostname === 'github.com') {
    const link = element('a', 'card-github', `${label} ↗`);
    link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; return addGitHubIcon(link);
  }
  return null;
}
// Version-pinned Devicon assets. Keep names visible when images cannot load.
const technologyIcons = {
  'github': 'assets/icons/github.svg',
  'openai': 'assets/icons/openai.svg',
  'java': ['java','java-original'], 'kotlin': ['kotlin','kotlin-original'],
  'spring': ['spring','spring-original'], 'junit': ['junit','junit-original'],
  'c++': ['cplusplus','cplusplus-original'], 'eclipse': ['eclipse','eclipse-original'],
  'jetpack compose': ['jetpackcompose','jetpackcompose-original'],
  'android': ['android','android-original'],
  'html': ['html5','html5-original'], 'css': ['css3','css3-original'],
  'javascript': ['javascript','javascript-original'], 'typescript': ['typescript','typescript-original'],
  'python': ['python','python-original'], 'react': ['react','react-original'],
  'next.js': ['nextjs','nextjs-original'], 'fastapi': ['fastapi','fastapi-original'],
  'dart': ['dart','dart-original'], 'flutter': ['flutter','flutter-original'],
  'git': ['git','git-original'], 'docker': ['docker','docker-original'],
  'github actions': ['githubactions','githubactions-original'], 'vs code': ['vscode','vscode-original'],
  'aws': ['amazonwebservices','amazonwebservices-original-wordmark'],
  'terraform': ['terraform','terraform-original'], 'hcl': ['terraform','terraform-original'],
  'android studio': ['androidstudio','androidstudio-original'], 'xcode': ['xcode','xcode-original'],
  'vite': ['vitejs','vitejs-original'], 'postgresql': ['postgresql','postgresql-original'],
  'postgresql / pgvector': ['postgresql','postgresql-original'],
  'pytest': ['pytest','pytest-original'], 'playwright': ['playwright','playwright-original'],
  'markdown': ['markdown','markdown-original']
};
const technologyAliases = {
  'codex': 'openai', 'openai codex': 'openai', 'openai api': 'openai', 'openai sdk': 'openai',
  'html5': 'html', 'css3': 'css', 'js': 'javascript', 'ts': 'typescript',
  'react.js': 'react', 'reactjs': 'react', 'nextjs': 'next.js',
  'spring boot': 'spring', 'springboot': 'spring', 'spring data jpa': 'spring',
  'spring framework': 'spring', 'junit4': 'junit', 'junit5': 'junit', 'junit 5': 'junit',
  'cpp': 'c++', 'cplusplus': 'c++', 'compose': 'jetpack compose',
  'jetpackcompose': 'jetpack compose', 'android sdk': 'android',
  'vscode': 'vs code', 'visual studio code': 'vs code',
  'githubactions': 'github actions', 'postgres': 'postgresql',
  'amazon web services': 'aws', 'amazonwebservices': 'aws',
  'vitejs': 'vite', 'androidstudio': 'android studio'
};
function resolveTechnologyIcon(name) {
  const key = name.normalize('NFKC').trim().toLowerCase().replace(/\s+/g, ' ');
  return technologyIcons[technologyAliases[key] || key];
}
function technologyTag(name, tag = 'span') {
  const node = element(tag, 'technology-name');
  const asset = resolveTechnologyIcon(name);
  if (asset) {
    const icon = element('img', 'technology-icon'); icon.alt = ''; icon.width = 22; icon.height = 22;
    icon.loading = 'lazy'; icon.referrerPolicy = 'no-referrer';
    icon.src = typeof asset === 'string' ? asset : `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${asset[0]}/${asset[1]}.svg`;
    icon.addEventListener('error', () => icon.remove()); node.append(icon);
  }
  node.append(document.createTextNode(name)); return node;
}

function makeCard(item, index, isProject) {
  const article = element('article', isProject ? 'portfolio-card work' : 'portfolio-card skill-card');
  const content = element('div', 'card-content');
  content.append(element('span', 'card-label', `${String(index + 1).padStart(2, '0')} / ${item.label || 'SKILL'}`), element('h3', '', item.title), element('p', 'card-description', item.description));
  if (isProject) {
    const tags = element('div', 'tags'); (item.tags || []).forEach(tag => tags.append(technologyTag(tag))); content.append(tags);
  } else {
    const technologies = element('dl', 'skill-technologies');
    [['言語', item.languages], ['ライブラリ・フレームワーク', item.libraries], ['ツール・サービス', item.tools]].forEach(([label, values]) => {
      if (!values?.length) return;
      const row = element('div'); const tags = element('dd', 'tags'); values.forEach(value => tags.append(technologyTag(value)));
      row.append(element('dt', '', label), tags); technologies.append(row);
    });
    if (technologies.children.length) content.append(technologies);
  }
  const actions = element('div', 'card-actions');
  const links = isProject ? [{ url: item.sourceUrl, label: 'GitHub' }] : (item.githubLinks || (item.sourceUrl ? [{url:item.sourceUrl,label:'GitHub'}] : []));
  links.forEach(link => { const github = githubLink(link.url, link.label || 'GitHub'); if (github) actions.append(github); });
  if (isProject) {
    const details = element('button', 'card-detail', '詳細を見る ＋'); details.type = 'button';
    details.setAttribute('aria-label', `${item.title}の詳細を見る`);
    details.addEventListener('click', () => openProject(item)); actions.append(details);
  }
  if (actions.children.length) content.append(actions);
  article.classList.add('no-image');
  article.append(content); return article;
}
const grid = document.querySelector('.works-grid');
projects.forEach((project, index) => grid.append(makeCard(project, index, true)));
const skillGrid = document.querySelector('.skill-grid');
skills.forEach((skill, index) => {
  const group = element('article', 'skill-group');
  const heading = element('div', 'skill-group-heading'); heading.append(element('h3', '', skill.title));
  if (skill.description) heading.append(element('p', 'card-description', skill.description));
  group.append(heading);
  const children = skill.children || [{...skill, description: ''}];
  children.forEach((child, i) => group.append(makeCard(child, i, false)));
  skillGrid.append(group);
});
const commonTools = window.portfolioContent.commonTools || [];
if (commonTools.length) {
  const group = element('article', 'common-tools'); group.append(element('h3', '', 'tools'));
  const list = element('dl');
  commonTools.forEach(tool => { const row = element('div'); row.append(technologyTag(tool.name, 'dt'), element('dd', '', tool.description)); list.append(row); });
  group.append(list); skillGrid.append(group);
}
const dialog = document.querySelector('#project-dialog');
function openProject(project) {
  document.querySelector('#detail-title').textContent = project.title;
  document.querySelector('#detail-description').textContent = project.description;
  const body = document.querySelector('#detail-body'); body.replaceChildren();
  (project.sections || []).forEach(([title, text]) => body.append(element('h3', '', title), element('p', '', text)));
  const links = element('div', 'detail-links');
  [['デモを見る ↗', project.demoUrl], ['ソースコードを見る ↗', project.sourceUrl]].forEach(([label, value]) => {
    const url = safeUrl(value); if (!url) return;
    const link = element('a', '', label); link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; if (new URL(url).hostname === 'github.com') addGitHubIcon(link); links.append(link);
  });
  body.append(links); dialog.showModal();
}
document.querySelectorAll('.close, .dialog-close').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const r = dialog.getBoundingClientRect();
  if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
});

// サイト情報も content.js から更新できます。
const about = window.portfolioContent.about;
document.querySelector('#site-location').textContent = about.location;
const contact = document.querySelector('#site-contact');
const email = about.contact.email.trim();
if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  const link = element('a', '', about.contact.label || email);
  link.href = `mailto:${email}`;
  contact.append(link);
} else { contact.textContent = about.contact.label; }

const social = document.querySelector('#site-social');
about.social.forEach(item => {
  const url = safeUrl(item.url);
  const node = element(url ? 'a' : 'span', '', item.label);
  if (url) { node.href = url; node.target = '_blank'; node.rel = 'noopener noreferrer'; if (new URL(url).hostname === 'github.com') addGitHubIcon(node); }
  social.append(node);
});
