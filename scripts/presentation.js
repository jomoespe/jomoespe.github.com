// Printing and PDF exports
var link = document.createElement( 'link' );
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = window.location.search.match( /print-pdf/gi ) ? 'scripts/reveal.js/css/print/pdf.css' : 'scripts/reveal.js/css/print/paper.css';
document.getElementsByTagName( 'head' )[0].appendChild( link );

// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  transition: 'convex', // none/fade/slide/convex/concave/zoom
  // Optional reveal.js plugins
  dependencies: [
    { src: 'scripts/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
    { src: 'scripts/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'scripts/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'scripts/reveal.js/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: 'scripts/reveal.js/plugin/zoom-js/zoom.js', async: true },
    { src: 'scripts/reveal.js/plugin/notes/notes.js', async: true }
  ]
});
