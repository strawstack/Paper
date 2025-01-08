const fs = require('fs')

module.exports = GITHUB_WORKSPACE => {

  console.log(GITHUB_WORKSPACE);
  
  const posts = [];
  fs.readdir(GITHUB_WORKSPACE, (err, files) => {
    console.log(files);
  });
  
  fs.writeFileSync("posts.js", 
    `export function posts() {
      return ${JSON.stringify(posts, null, 2)};
    }`
  );
}
