webpackJsonp([0xe85a03ca10220000],{"./node_modules/json-loader/index.js!./.cache/json/hyper.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>I always hated the clunky pieces of software that call themselves <em>Youtube Downloader</em>. They look terrible, are a pain to use, littered with ads and just in general not a nice experience.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; z-index: -1; display: block; "\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 68.0161943319838%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACoElEQVQ4y21TaW/aQBT0n6kKwSe28YExl7HNGQgEEpETVCAQaBpVbfrrp7Mmidq0H0bjfd4371zpk+rjTyhmBTLx0Z4r1pA36++QS02obusvm4CUsxtQgxiyH0FxmijQKJzfcGI16UzHxgD5Wg9atYt8tYe886/YUdCNoQUJFJdiFiNbDGDV3mG4EVQ7Rs6OkKN4zmwwUB2ftTBD7gOk4s0N3MMDvG9buE9bePs1vMcV7MMO+tMzPNrcwxal/Yb/H+A+7+B93/8Xpd0akjO+RnDLy9dfYM6XUO5W0O7XsK9XsK5W8G+I2zXCxRaV+w282xU8skMuL3dw79bZ2V88oHS5gOS1Jgi7c7jxOfT6KXKdGZTuJax4glLzDOVkBi+dwmtPYbfOUGyc8l4fctCGxp4qYQdKpQOV33K5TcHGCLV0Bp9sBB3kkzEMijr1Ieywj3I0zhAwsECpOoDXGMIKezArXfq0oXsJihTV/RSSzyyq6QU8ssEL+XQCJT2HmTn14VPMjUZwkhFcwooGzPwUZthFkdDLKTRCCAvOMgyZoWCj0kMhHqOQlXbMQgQUAlbchxn1YNQ7MMI2FK8FnSKqn1DoCPEtuR8EZYqpyQQOz3a1n2VeYt+cZAgnHsLkHtr1QdYewW+ZmtxNUfZryW+CLJkZnlDQao6ykl320mowu6QPI2KJTTEA7i0fg1pLOZA4g1o92iThUE1eBQMKtkaQO9PsbDGACOhRPGBvvXh0HEJw7JnIyOSUNZYqMhU2qUTBoH3Bxo+h1/i8uB4Kp+xyoibPwm5FnHjnDBbLVhlEY2/V4Mg626JwXQxOXxZTFkOQZ1zo6QLKfI3Ccg+DLKDRXiQXrzYwlgdY8w2KX39Be/wB4/CSsb7/CWP/kp3lxSN+A8Q88vMMTSNuAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Youtube Downloader"\n        title="Youtube Downloader Demonstration GIF"\n        src="/blog/static/4a918c8ddd0ad583300ec7822264be24-be30b.png"\n        srcset="/blog/static/4a918c8ddd0ad583300ec7822264be24-990ca.png 160w,\n/blog/static/4a918c8ddd0ad583300ec7822264be24-3d464.png 320w,\n/blog/static/4a918c8ddd0ad583300ec7822264be24-be30b.png 640w,\n/blog/static/4a918c8ddd0ad583300ec7822264be24-fdb73.png 960w,\n/blog/static/4a918c8ddd0ad583300ec7822264be24-d60ff.png 988w"\n        sizes="(max-width: 640px) 100vw, 640px"\n      />\n    </span>\n  </span>\n  {someType}</p>\n<p>As a big fan of selfhosting I wanted something that was under my control. <a href="https://www.docker.com/what-docker">Docker</a> is a perfect solution for an isolated problem like a Youtube Downloader, but after some research I realized that there was no such thing for Docker yet (Okey, there was no <strong>good</strong> one). I was really excited because this seemed like a nice opportunity to finally stress my homeserver a bit. Up to this point it was basically converting electricity to heat at terrible efficiency. The coding was done using <strong>react</strong> for the frontend and a <strong>hapi</strong>-webserver in the backend <em>(You gotta love Node.js)</em>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>    fontFamily<span class="token punctuation">:</span> <span class="token string">\'"Roboto Mono", monospace\'</span>\n</code></pre>\n      </div>\n<p>Since everything on my homeserver is running in an isolated Docker-Container, the <code>ytdl-webserver</code> <em>(thats what I will call this from now on)</em> needed a <code>Dockerfile</code>. Those are extremely easy to set up and it still blows my mind how much it abstracts from the complicated matter of an OS. I will show you mine:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment" spellcheck="true">// Custom CSS to remove header/window-controls and adjust styling</span>\ncss<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`\n  .terms_19b1ydh {\n    margin-top: 20px;\n  }\n  .header_windowHeader {\n    display: none;\n  }\n  .tabs_nav {\n    top: 0;\n  }\n  .terms_terms {\n    margin-top: 0;\n  }\n  .terms_termsShifted {\n    margin-top: 30px;\n  }\n`</span></span>\n</code></pre>\n      </div>\n<p>Isn’t that amazing? You build an image from this file and have an application that can run <strong>everywhere</strong> without having to know <strong>anything</strong> about the underlying OS? <strong>What a time to be alive!</strong></p>\n<h2>2 What does it do</h2>\n<p class="notice notice--info">tldr; Watch the GIF down below</p>\n<p>At the moment the application takes a link from a YouTube video as an input. Then the video gets downloaded with the popular command line tool <a href="https://rg3.github.io/youtube-dl/">youtube-dl</a>. Once it is finished it gets converted to an MP3. Note that I plan on adding other options here like downloading the video without converting, converting it to different formats, etc.</p>\n<p>Functionality like that is easy to implement with the current structure, so if you enjoy coding as much as I do, head over to the <a href="https://github.com/Algram/ytdl-webserver">project page</a> and <strong>contribute</strong>.</p>\n<p>I also added some kind of web storage caching for the already downloaded videos and tried to keep everything as consistent as possible. The project is far from finished though, so give it some love.</p>\n<h2>3 Using it</h2>\n<p>The appliation is super easy to get going. Everything runs with Node.js, so installing is a matter of one line. Since the GitHub-Repo also includes the <code>Dockerfile</code> you can even build your own image and host it wherever you want!</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token string">\'hyper-statusline\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'hyperterm-chesterish\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'hyper-dark-scrollbar\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'hypercwd\'</span>\n  <span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>I hope this article deemed useful to someone who can now selfhost their own Youtube Downloader. The GitHub-Repo for the project <a href="https://github.com/Algram/ytdl-webserver">can be found here.</a> If you have any questions, open up an issue over there or write me!</p>',frontmatter:{title:"My Hyper Terminal Setup",keywords:"electron, hyper, terminal, config, theme, nodejs, pretty",githubIssue:null}}},pathContext:{slug:"/hyper/",prev:{excerpt:"I always hated the clunky pieces of software that call themselves  Youtube Downloader . They look terrible, are a pain to use, littered with ads and just in general not a nice experience. As a big fan...",timeToRead:2,frontmatter:{date:"2016-11-04 14:21",path:"/selfhosted-youtube-downloader-with-docker/",category:"development",keywords:"selfhosting, docker, youtube downloader, nodejs, react, webserver",title:"Host your own YouTube-Downloader with Docker",githubIssue:"1"},fields:{slug:"/selfhosted-youtube-downloader-with-docker/"}},next:{excerpt:"As a regular listener to podcasts you will know the pain of not having\nthem available right when you need them most. There are tons of apps for your\nsmartphone that handle that but fewer programs for...",timeToRead:3,frontmatter:{date:"2016-04-24 21:51",path:"/raspberry-pi-podcast-downloader/",category:"raspberry pi",keywords:"raspberry pi, podcasts, automatic downloading, automation, bash, script",title:"Automatically download Podcasts with the Raspberry Pi",githubIssue:null},fields:{slug:"/raspberry-pi-podcast-downloader/"}}}}}});
//# sourceMappingURL=path---hyper-bc710def1995c7fc08d5.js.map