"use client";

import "@/app/tiptap.css";

import { memo } from "react";
import DOMPurify from "dompurify";

import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import "highlight.js/styles/atom-one-dark.css";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/themes/prism-tomorrow.css";

interface SafeHtmlProps {
  html: string;
  className?: string;
  forbidTags?: string[];
}

const SafeHtml = memo(
  ({ html, className = "", forbidTags = [] }: SafeHtmlProps) => {
    if (!html) return null;

    try {
      // Register highlight.js languages
      hljs.registerLanguage("typescript", typescript);
      hljs.registerLanguage("javascript", javascript);
      hljs.registerLanguage("typescriptreact", typescript);
      hljs.registerLanguage("xml", xml);

      // Configure DOMPurify to allow specific tags and attributes
      DOMPurify.setConfig({
        ALLOWED_TAGS: [
          "ul",
          "li",
          "ol",
          "label",
          "input",
          "span",
          "div",
          "img",
          "p",
          "strong",
          "em",
          "br",
          "a",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "pre",
          "code",
          "table",
          "thead",
          "tbody",
          "tr",
          "td",
          "th",
        ],
        ALLOWED_ATTR: [
          "src",
          "alt",
          "href",
          "target",
          "rel",
          "class",
          "id",
          "style",
          "type",
          "checked",
          "disabled",
        ],
        ADD_URI_SAFE_ATTR: ["src"], // Allow src attributes for images
        FORBID_TAGS: forbidTags,
      });

      const sanitizedHtml = DOMPurify.sanitize(html);

      // Apply syntax highlighting
      const doc = new DOMParser().parseFromString(sanitizedHtml, "text/html");
      doc.querySelectorAll("pre code").forEach((el) => {
        const element = el as HTMLElement;
        // Get language from class, e.g. language-jsx
        const match = Array.from(element.classList).find((cls) =>
          cls.startsWith("language-")
        );
        const lang = match ? match.replace("language-", "") : "javascript";
        element.innerHTML = Prism.highlight(
          element.textContent || "",
          Prism.languages[lang] || Prism.languages.javascript,
          lang
        );
      });
      const highlightedHtml = new XMLSerializer().serializeToString(doc);

      return (
        <div
          className={className}
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
      );
    } catch (error) {
      console.error("Error sanitizing HTML:", error);
      return null;
    }
  }
);

SafeHtml.displayName = "SafeHtml";

export default SafeHtml;
