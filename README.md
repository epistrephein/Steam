# Steam
Steam is a minimal and responsive theme for [Ghost](http://ghost.org/), largely based on [Vapor](https://github.com/sethlilly/Vapor) by Seth Lilly.

It features a clean style with single column layout and two colors, perfect for focusing on text.

With customizable partials and some nice javascript enhancements, Steam is perfect for any kind of blog, whether it is about coding, short stories or photographs.

## Demo
See *Steam* live [here](http://epistrephe.in/steam/).

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
By default Steam uses a flat green theme color. To switch to another theme color, first replace `{{> theme-green}}` with `{{!> theme-green}}` in `default.hbs`, then choose your desired color among those available, e.g. orange, and replace `{{!> theme-orange}}` with `{{> theme-orange}}`.

To use a custom color, replace instead `{{!> theme-customcolor}}` with `{{> theme-customcolor}}` and change the three occurrences of `#111111` and `#000000` with the colors you prefer.

#### Customize the social icons
Change the given `a href` addresses in `partials/footer-social.hbs` or replace the icons with the ones you prefer using the [Font Awesome list](http://fortawesome.github.io/Font-Awesome/icons/), e.g. to add a Facebook icon add

    <a href="https://www.facebook.com/username" target="_blank" title="Facebook"><i class="fa fa-2x fa-fw fa-facebook"></i> <span class="hidden">Facebook</span></a>

If you don't want the social icons section, replace `{{> footer-social}}` with `{{!> footer-social}}` in `default.hbs`.

#### Customize the blog signature
Replace the text, email address and author name in the file `partials/footer-author.hbs`. To remove it, replace `{{> footer-author}}` with `{{!> footer-author}}` in `default.hbs`.

#### Activate the comments
Replace `{{!> comments-disqus}}` with `{{> comments-disqus}}`, `{{!> comments-facebook}}` with `{{> comments-facebook}}` or `{{!> comments-google-plus}}` with `{{> comments-google-plus}}` in the `post.hbs` file.

#### Custom favicon and apple-touch-icon
If you want to customize the favicon and/or apple-touch-icon of your blog, replace `{{!> favicon-appletouchicon}}` with `{{> favicon-appletouchicon}}` in `default.hbs`, then place your 16x16 `favicon.ico` and 152x152 `appletouchicon.png` in `/assets/img/` and restart Ghost.

#### Other customizations
Steam features [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll): the default settings are at the bottom of `default.hbs`

    <script>
        smoothScroll.init({
            speed: 800,
            easing: 'easeInOutCubic',
            updateURL: false,
            offset: 125,
        });
    </script>

Steam features also [highlight.js](https://highlightjs.org) for syntax highlighting: you can disable it by removing the line 
    
    <script>hljs.initHighlightingOnLoad();</script>

at the bottom of `default.hbs`.

## Caveats
**Static pages** are currently under development.

**Author pages** are not yet supported: as for now, the author name only links to the custom website choosen in the settings.

## License
Steam is open source and released under the MIT License, feel free to contribute.
