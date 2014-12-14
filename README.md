# Steam
Steam is a minimal and responsive theme for [Ghost](http://ghost.org/), largely based on [Vapor](https://github.com/sethlilly/Vapor) by Seth Lilly.

It features a clean and essential style with single column layout, beautiful typography, two colors, customizable partials and some nice javascript enhancements.

See *Steam* live [here](https://steamthe.me).

## Installation
#### Git - development release
Just clone the repository in the `/content/themes` folder of Ghost. Restart Ghost and choose Steam in the settings pane.

    $ git clone https://github.com/epistrephein/Steam.git

#### Zip - stable release
Download the [latest stable release](https://github.com/epistrephein/Steam/releases) of Steam and unzip it in the `/content/themes` folder of Ghost. Restart Ghost and choose Steam in the settings pane.

## Customization
#### Activate a custom menu
Replace `{{!> menu}}` with `{{> menu}}` in `default.hbs`, then customize the file `partials/menu.hbs` using the given template.

#### Choose a theme color
By default Steam uses a flat green theme color. To switch to another theme color, first replace `{{> theme-green}}` with `{{!> theme-green}}` in `default.hbs`, then choose your desired color among those available: i.e. to activate the orange theme replace `{{!> theme-orange}}` with `{{> theme-orange}}`.

To use a custom color, replace instead `{{!> theme-customcolor}}` with `{{> theme-customcolor}}` and change the three occurrences of `#111111` and `#000000` in `partials/theme-customcolor.hbs` with the colors you prefer.

#### Customize the social icons
Change the given `a href` addresses in `partials/footer-social.hbs` or replace the icons with the ones you prefer using the [Font Awesome list](http://fortawesome.github.io/Font-Awesome/icons/), e.g. to add a Facebook icon add

    <a href="https://www.facebook.com/username" target="_blank" title="Facebook"><i class="fa fa-2x fa-fw fa-facebook"></i> <span class="hidden">Facebook</span></a>

If you don't want the social icons section, replace `{{> footer-social}}` with `{{!> footer-social}}` in `default.hbs`.

#### Customize the blog signature
Replace the text, email address and author name in the file `partials/footer-author.hbs`. To remove it, replace `{{> footer-author}}` with `{{!> footer-author}}` in `default.hbs`.

#### Hide post author section
If you don't want to show the author section (which is profile picture, bio, website and location) at the bottom of posts, replace `{{> post-author}}` with `{{!> post-author}}` in `post.hbs`.

#### Activate the comments
Replace `{{!> comments-disqus}}` with `{{> comments-disqus}}`, `{{!> comments-facebook}}` with `{{> comments-facebook}}` or `{{!> comments-google-plus}}` with `{{> comments-google-plus}}` in the `post.hbs` file.

To enable Disqus comments, remember to add your actual Disqus ID in `partials/comments-disqus.hbs`.

#### Activate Google Analytics
After you've created your Google Analytics account, change `{{!> google-analytics}}` to `{{> google-analytics}}` in `default.hbs`, ensuring to replace `YOUR_TRACKING_CODE` with your actual tracking code.

#### Custom favicon and apple-touch-icon
To customize the favicon and/or apple-touch-icon of your blog place your 16x16 `favicon.ico` and 152x152 `appletouchicon.png` in `/assets/img/`.

#### JavaScript
##### Smooth Scroll
Steam features [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll): the default settings are at the bottom of `default.hbs`

    <script>
        smoothScroll.init({
            speed: 800,
            easing: 'easeInOutCubic',
            updateURL: false,
            offset: 125,
        });
    </script>

To use Smooth Scroll for footnotes, first locate the word or sentence in edit mode where you want to put the link to the footnote (generally a number of an ascending order) and add the following code

    <sup id="reference1"><a data-scroll href="#footnote1">1</a></sup>

where `reference1` is the unique name of the footnote link, `footnote1` is the unique name of the footnote itself and `1` the number of the note. Don't forget to add `data-scroll` if you want to benefit of the Smooth Scroll functionality. Do this for every footnote link you want to add, increasing the number of each identifier.

Next, at the end of the post insert

    ---
    <ol class="notes">
    <li id="footnote1">Here is the notation that the sentence above leads up to. <a data-scroll href="#reference1">↩</a></li>
    </ol>

which is the actual body of the footnote and is linked to the link you add before. Make sure `footnote1` and `reference1` match the link that calls them. Insert as many `<li>` tags as your footnote links and don't forget to add `data-scroll` or Smooth Scroll won't work.

##### highlight.js
Steam features also [highlight.js](https://highlightjs.org) for syntax highlighting: you can disable it by removing the line

    <script>hljs.initHighlightingOnLoad();</script>

at the bottom of `default.hbs`.

You can force a code block into a specific language highlighting by appending the lang name, e.g.:

    ```ruby
    puts "Hello, World!"
    ```

If you want to suppress the highlighting for a particular code block, you can use `nohighlight`:

    ```nohighlight
    $ git clone https://github.com/epistrephein/Steam.git
    ```

The css defining the colors is `assets/css/github.css`, which is a slighty modified version of [this style](https://github.com/isagalaev/highlight.js/blob/master/src/styles/github.css).

## License
Steam is a fork of [Vapor](https://github.com/sethlilly/Vapor) - Copyright (c) 2013-2014 [Seth Lilly](https://github.com/sethlilly/).<br>
Steam is open source and released under the [MIT License](https://github.com/epistrephein/Steam/blob/master/LICENSE), feel free to contribute.
