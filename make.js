const fs = require('fs')

module.exports = () => {
  
  const posts = [];
  fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
      posts.push(file);
    });
  });
  
  fs.writeFileSync("posts.js", 
    `export function posts() {
      return ${JSON.stringify(posts, null, 2)};
    }`
  );
}
