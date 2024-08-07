const SitemapGenerator = require('sitemap-generator');

// create generator
const generator = SitemapGenerator('https://divineinfotech.org', {
  stripQuerystring: false
});

// register event listeners
generator.on('done', () => {
  console.log('Sitemap generated!');
});

// start the crawler
generator.start();
