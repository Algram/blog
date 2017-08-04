const frontMatter = require('front-matter');
const markdownIt = require('markdown-it');
const hljs = require('highlight.js');
const objectAssign = require('object-assign');

const highlight = (str, lang) => {
  if ((lang !== null) && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value;
    } catch (_error) {
      console.error(_error);
    }
  }
  try {
    return hljs.highlightAuto(str).value;
  } catch (_error) {
    console.error(_error);
  }
  return '';
};

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight
});

md.use(require('markdown-it-external-links'), {
  externalClassName: 'link--external',
  internalClassName: null,
  externalTarget: '_blank',
  externalRel: 'noopener'
});

md.use(require('markdown-it-attrs'));

// TODO convert to arrow function as soon as a solution for this-binding is found
module.exports = function(content) {
  this.cacheable();
  const meta = frontMatter(content);
  const body = md.render(meta.body);
  const result = objectAssign({}, meta.attributes, {
    body
  });
  this.value = result;
  return `module.exports = ${JSON.stringify(result)}`;
};
