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
  files.forEach(fileName => {
    const markdown = fs.readFileSync(`${GITHUB_WORKSPACE}/posts/${fileName}`).toString("utf-8");
    postData.push({
      fileName,
      ...frontMatter(markdown)
    });
  });

  fs.writeFileSync("posts.js",
    `export const posts = ${JSON.stringify(postData, null, 2)};`
  );
}
