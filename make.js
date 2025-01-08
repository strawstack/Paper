import { writeFileSync } from 'fs'

export function make() {
  writeFileSync("posts.js", 
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
