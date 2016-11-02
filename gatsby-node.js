const Feed = require('feed');
const markdownIt = require('markdown-it');
const fs = require('fs');
const moment = require('moment');
const prune = require('underscore.string').prune;
const frontmatter = require('front-matter');
const config = require('./configFeed');

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true
});

function generateRSSFeed(allPages) {
  // Only generate feed for actual posts
  const pages = allPages.filter(page => page.data.layout === 'post');

  const author = {
    name: config.authorName,
    email: config.authorEmail,
    link: config.domain
  };

  const feed = new Feed({
    title: config.blogTitle,
    description: config.blogDescription,
    link: config.domain,
    copyright: `All rights reserved ${moment(new Date()).format('YYYY')}, Raphael`,
    author
  });

  for (const page of pages) {
    const content = md.render(
      frontmatter(
        fs.readFileSync(
          `${__dirname}/pages/${page.requirePath}`,
          'utf-8'
      )
    ).body);

    const description = prune(content.replace(/<[^>]*>/g, ''), 600);

    feed.addItem({
      title: page.data.title,
      link: config.domain + page.path,
      description,
      content,
      author: [author],
      date: page.date,
      image: `${config.domain}${page.path}hero.jpg`
    });
  }

  fs.writeFileSync(`${__dirname}/public/feed.xml`, feed.render('rss-2.0'));
}

exports.postBuild = (pages, callback) => {
  generateRSSFeed(pages);
  callback();
};
