import { writeFileSync } from 'fs'

module.exports = ({ github, context }) => {
  writeFileSync("posts2.js", "Post list data placeholder");
}
