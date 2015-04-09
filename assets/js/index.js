/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // Test if Disqus is avalaible        
        if (disqus_shortname != undefined) {
            var disqus_identifier = '{{post.id}}';
            (function() {
                var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            })();
        }
        
        // Test if Analytics is avalaible
        if (google_analytics_id != undefined) {
            (function(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function() {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
            
            ga('create', google_analytics_id, 'auto');
            ga('send', 'pageview');
        }

        // Activate smoothScroll
        smoothScroll.init({
            speed: 800,
            easing: 'easeInOutCubic',
            updateURL: false,
            offset: 125,
        });
        
        // Activate Highlighting
        hljs.initHighlightingOnLoad();
        
    });

}(jQuery));