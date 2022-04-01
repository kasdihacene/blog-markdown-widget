import React from "react";

import { BlogMarkdownComponent } from "blog-markdown-widget";
import { Container } from "react-bootstrap";

const App = () => {
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

![Drag Racing ><](https://image.shutterstock.com/image-vector/city-town-village-landscapes-modern-600w-230199868.jpg)


<h1>HELLO THIS IS AN HTML CODE</h1>

`;
  return (
    <Container fluid>
      <BlogMarkdownComponent text={markdown} />
    </Container>
  );
};

export default App;
