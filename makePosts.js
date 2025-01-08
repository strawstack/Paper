const fs = require('fs');

module.exports = ({ github, context }) => {
  fs.writeFileSync("posts2.js", "Post list data placeholder");
}
