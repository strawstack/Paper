const fs = require('fs')

module.exports = GITHUB_WORKSPACE => {

  //
  const posts = [];
  const files = fs.readdirSync(`${GITHUB_WORKSPACE}/posts`);
  files.forEach(file => posts.push(file));

  fs.writeFileSync("posts.js", 
    `export function posts() {
      return ${JSON.stringify(posts, null, 2)};
    }`
  );
}
