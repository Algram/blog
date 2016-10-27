Feed = require('feed')
filter = require('lodash/filter')
sortBy = require('lodash/sortBy')
moment = require('moment')
MarkdownIt = require('markdown-it')
const fs = require('fs')
frontmatter = require('front-matter')

exports.postBuild = (pages, callback) => {
  // perform actions on pages here
  md = MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
  })

  generateAtomFeed(pages);
  callback();
};

function generateAtomFeed(allPages) {
  const pages = allPages.filter(page => page.data.layout === 'post');

  const feed = new Feed({
    title: 'Feed Title',
    description: 'This is my personnal feed!',
    link: 'http://example.com/',
    image: 'http://example.com/image.png',
    copyright: 'All rights reserved 2013, John Doe',
    author: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      link: 'https://example.com/johndoe'
    }
  });

  for (const page of pages) {
    const description = md.render(
      frontmatter(
        fs.readFileSync(
          `${__dirname}/pages/${page.requirePath}`,
          'utf-8'
        )
      ).body);

    feed.addItem({
      title: page.data.title,
      link: page.url,
      description,
      author: [
        {
          name: 'Jane Doe',
          email: 'janedoe@example.com',
          link: 'https://example.com/janedoe'
        }
      ],
      date: page.date,
      image: page.image
    });
  }

  fs.writeFileSync(`${__dirname}/public/feed.rss`, feed.render('rss-2.0'));
}
