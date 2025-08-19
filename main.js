(function () {
  const pages = [
    { id: 'overview', title: 'Overview', file: 'overview.md', group: 'Guide' },
    { id: 'getting-started', title: 'Getting Started', file: 'getting-started.md', group: 'Guide' },
    { id: 'installation', title: 'Installation', file: 'installation.md', group: 'Guide' },
    { id: 'cli', title: 'CLI', file: 'cli.md', group: 'Reference' },
    { id: 'configuration', title: 'Configuration', file: 'configuration.md', group: 'Reference' },
    { id: 'project-structure', title: 'Project Structure', file: 'project-structure.md', group: 'Reference' },
    { id: 'modules', title: 'Core Modules', file: 'modules.md', group: 'Reference' },
    { id: 'framework-api', title: 'Framework API', file: 'framework-api.md', group: 'Reference' },
    { id: 'templates', title: 'Templates', file: 'templates.md', group: 'Guide' },
    { id: 'examples', title: 'Examples', file: 'examples.md', group: 'Guide' },
    { id: 'troubleshooting', title: 'Troubleshooting', file: 'troubleshooting.md', group: 'Help' },
    { id: 'faq', title: 'FAQ', file: 'faq.md', group: 'Help' },
    { id: 'roadmap', title: 'Roadmap', file: 'roadmap.md', group: 'Meta' }
  ];

  const $nav = document.getElementById('nav');
  const $content = document.getElementById('content');
  const $year = document.getElementById('year');
  $year.textContent = new Date().getFullYear();

  // Theme toggle
  const $themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('vf_theme');
  if (savedTheme === 'light') document.body.classList.add('light');
  $themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('vf_theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });

  function buildNav() {
    $nav.innerHTML = '';
    const groups = [...new Set(pages.map(p => p.group))];
    for (const group of groups) {
      const label = document.createElement('div');
      label.className = 'group';
      label.textContent = group;
      $nav.appendChild(label);
      for (const page of pages.filter(p => p.group === group)) {
        const a = document.createElement('a');
        a.href = `#/docs/${page.id}`;
        a.textContent = page.title;
        a.dataset.pageId = page.id;
        $nav.appendChild(a);
      }
    }
  }

  function setActive(pageId) {
    const links = $nav.querySelectorAll('a');
    links.forEach(a => {
      if (a.dataset.pageId === pageId) a.classList.add('active');
      else a.classList.remove('active');
    });
  }

  async function render(pageId) {
    const page = pages.find(p => p.id === pageId) || pages[0];
    setActive(page.id);
    try {
      const res = await fetch(`docs/${page.file}?v=${Date.now()}`);
      const md = await res.text();
      const html = marked.parse(md, { mangle: false, headerIds: true });
      $content.innerHTML = html;
      if (window.hljs) {
        $content.querySelectorAll('pre code').forEach(block => hljs.highlightElement(block));
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.title = `${page.title} · VeFramework Docs`;
    } catch (err) {
      $content.innerHTML = `<h1>Not found</h1><p>This page does not exist yet.</p>`;
    }
  }

  function router() {
    const hash = location.hash || '#/docs/overview';
    const [, , id] = hash.split('/');
    render(id || 'overview');
  }

  buildNav();
  addEventListener('hashchange', router);
  router();
})();


