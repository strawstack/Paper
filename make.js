const fs = require('fs')

module.exports = GITHUB_WORKSPACE => {

  console.log(`${GITHUB_WORKSPACE}/posts`);
  
  const posts = [];
  fs.readdirSync(`${GITHUB_WORKSPACE}/posts`, (_, files) => {
    files.forEach(file => posts.push(file));
  });
  
  fs.writeFileSync("posts.js", 
    `export function posts() {
      return ${JSON.stringify(posts, null, 2)};
    }`
  );
}
