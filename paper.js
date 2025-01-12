import { posts as postData } from './_posts.js';
import { showdown } from './lib/showdown.js';

export const posts = postData;

export function html(markdownStrs) {
    const converter = new showdown.Converter();
    document.body.innerHTML = converter.makeHtml(markdownStrs.join(""));
}
