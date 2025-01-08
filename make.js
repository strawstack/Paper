const fs = require('fs')

module.exports = (path) => {
  
  const posts = [];
  fs.readdir(`${path}/posts`, (err, files) => {
    console.log(files);
  });
  
  fs.writeFileSync("posts.js", 
    `export function posts() {
      return ${JSON.stringify(posts, null, 2)};
    }`
  );
}
