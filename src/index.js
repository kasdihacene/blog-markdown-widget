import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Form, Col, Row, Container } from "react-bootstrap";
import rehypeRaw from "rehype-raw";

export const BlogMarkdownComponent = ({ text }) => {
  const [content, setContent] = useState(text);

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={6}>
            <Form.Control
              className="h-100 d-inline-block"
              as="textarea"
              rows={3}
              autoFocus
              onChange={(event) => setContent(event.target.value)}
            />
          </Col>
          <Col md={6}>
            <ReactMarkdown
              children={content}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      style={dark}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
