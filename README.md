# blog-markdown-widget

> Custom widget for converting markdown blog articles to HTML

[![NPM](https://img.shields.io/npm/v/blog-markdown-widget.svg)](https://www.npmjs.com/package/blog-markdown-widget) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save blog-markdown-widget
```

## Usage

```jsx
import React, { Component } from "react";

import BlogMarkdownComponent from "blog-markdown-widget";
import "blog-markdown-widget/dist/index.css";

class Example extends Component {
  render() {
    const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
| a | b |
| - | - |

![open-source-markdown-to](https://innovationorigins.com/app/uploads/2019/02/open-source.jpg)


<h1>HELLOOOOO</h1>

`;

    return <BlogMarkdownComponent text={markdown} />;
  }
}
```

## License

MIT © [kasdihacene](https://github.com/kasdihacene)
