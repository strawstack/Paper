import { posts as postData } from './_posts.js';
import { showdown } from './lib/showdown.js';

export const posts = postData;

function parseMatter(frontmatterLines) {
    const map = {};
    frontmatterLines.forEach(line => {
      const split = line.split(":");
      map[split[0]] = split[1];
    })
    return map;
  }

export function html(markdown) {
    const create = n => document.createElement(n);

    // Split frontmatter and markdown content
    const split = markdown.split("+++");
    const frontmatter = parseMatter(split[1]);
    const content = split[2];

    // Add back link to body
    const a = create("a");
    a.setAttribute("href", "../index.html");
    a.innerHTML = "< back";
    document.body.appendChild(a);

    // Create div to hold post content
    const div = create("div");
    document.body.appendChild(div);

    // Add post content to body
    const converter = new showdown.Converter();
    div.innerHTML = converter.makeHtml(content);
}
