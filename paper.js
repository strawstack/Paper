import { posts as postData } from './_posts.js';
import showdown from './lib/showdown.js';

export function html(markdownStrs) {
    const converter = new showdown.Converter();
    document.body.innerHTML = converter.makeHtml(markdownStrs.join(""));
}

export function posts() {
    return postData();
}