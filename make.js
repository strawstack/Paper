const fs = require('fs')

module.exports = GITHUB_WORKSPACE => {

  console.log(`${GITHUB_WORKSPACE}/posts`);
  
  const posts = [];
  fs.readdir(`${GITHUB_WORKSPACE}/posts`, (err, files) => {
    console.log(files);
    files.forEach(file => posts.push(file));
  });

  console.log(posts)
  
  fs.writeFileSync("posts.js", 
    `export function posts() {
      return ${JSON.stringify(posts, null, 2)};
    }`
  );
}
