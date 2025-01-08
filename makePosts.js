const fs = require('fs');

module.exports = () => {
  fs.writeFileSync("posts.js", 
    `export function posts() {
      return [
        {
          type: 'file',
          data: 5
        },
        {
          type: 'dir',
          data: 6
        },
        {
          type: 'file',
          data: 7
        }
      ];
    }`
  );
}
