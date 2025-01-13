const fs = require('fs');

module.exports = GITHUB_WORKSPACE => {

  function frontMatter(markdown) {

    function parse(frontmatterLines) {
      const map = {};
      frontmatterLines.forEach(line => {
        const split = line.split(":");
        map[split[0]] = split[1];
      })
      return map;
    }

    if (markdown.includes("+++")) {
      return parse(markdown.split("+++")[1].split("\n"));
    }
    return {};
  }

  const postData = [];
  const files = fs.readdirSync(`${GITHUB_WORKSPACE}/posts`);
  files.forEach(title => {
    const markdown = fs.readFileSync(`${GITHUB_WORKSPACE}/posts/${title}`);
    postData.push(frontMatter(markdown));
  });

  fs.writeFileSync("_posts.js",
    `export const posts = ${JSON.stringify(postData, null, 2)};`
  );
}
