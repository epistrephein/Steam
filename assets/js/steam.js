// Smooth Scroll
smoothScroll.init({
    speed: 800,
    easing: 'easeInOutCubic',
    updateURL: false,
    offset: 125
});

// Inject data-scroll attr into footnotes
function footnotesSmoothScroll() {
    var sups = document.getElementsByTagName('sup');
    var footnotes = document.getElementsByClassName('footnote');
    for (var i = 0; i < sups.length; i++) {
        sups[i].getElementsByTagName('a')[0].setAttribute('data-scroll', '');
        footnotes[i].getElementsByTagName('a')[0].setAttribute('data-scroll', '');
    }
}
footnotesSmoothScroll();

// Highlight.js
hljs.initHighlightingOnLoad();
