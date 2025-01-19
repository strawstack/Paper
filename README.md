# Paper

A minimalist blog built by a github action.

# What is Paper?

Paper is a blog hosted in a Github repo. [index.html](https://github.com/strawstack/Paper/blob/main/index.html) is the main page of the blog which lists all the blog posts. Individual posts are stored in the `posts` directory. Each post is an `html` file. Post files contain some `html` boilerplate and some markdown. When a new post is committed to the `posts` directory, this is seen as a `push` action by Github which triggers the Github action in `.github/workflows` to rebuild the `posts.js` file which becomes a source of truth containing data about each post. `posts.js` is used by the blog's main page to list all posts. The Markdown inside of post files is converted to HTML and added to the body of the DOM by [Showdown](https://showdownjs.com/) a Markdown parser written in Javascript.   

# Resources

- https://github.com/actions/github-script
- https://github.com/actions/checkout
- https://github.com/strawstack/TrueStaticMarkdownBlog
- 
