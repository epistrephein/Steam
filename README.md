# Steam
[![Steam release](https://img.shields.io/github/release/epistrephein/Steam.svg?style=flat-square)](https://github.com/epistrephein/Steam/releases/latest)
[![Ghost version](https://img.shields.io/badge/ghost-v1.x-brightgreen.svg?style=flat-square)](https://github.com/TryGhost/Ghost)
[![Demo status](https://img.shields.io/website-online-offline-brightgreen-red/https/dev.epistrephe.in/steam.svg?label=demo&style=flat-square)](https://dev.epistrephe.in/steam)

[Steam](https://github.com/epistrephein/Steam) is a minimal and responsive theme for [Ghost](http://ghost.org/), forked from [Vapor](https://github.com/sethlilly/Vapor).

It features a clean and essential style with single column layout, beautiful typography, two colors, customizable partials and some nice javascript enhancements.

See a live demo of Steam [here](https://dev.epistrephe.in/steam).

[![Steam showcase](assets/screenshots/showcase-responsive.jpg)](https://dev.epistrephe.in/steam)

## Installation
Clone the repository in the `/content/themes` folder of Ghost or upload the latest release zip from the settings. Restart Ghost and choose Steam in the design pane.

    $ git clone https://github.com/epistrephein/Steam.git

## Customization

#### Change the theme color
By default Steam uses a flat green theme color. The css for the colors are in a separate partial for easy customization: just edit `partials/theme-colors.hbs`, replacing `#33cc99` with your light shade and `#178b6b` with your dark shade.

Previous versions of Steam included premade colors partials that could just be turned on and off. These have since been removed for simplicity, so here are the values that were used if you want to keep your colors the way they were.

| Color  | Light     | Dark      |
|--------|-----------|-----------|
| Green  | `#33cc99` | `#178b6b` |
| Blue   | `#3498db` | `#2079b4` |
| Orange | `#ff9d00` | `#d88500` |
| Red    | `#f05948` | `#c62310` |

#### Customize the social icons
Facebook and Twitter icons in the footer are automatically displayed if defined in the general settings of Ghost.

If you want to add custom icons and links, duplicate any of them outside of the conditional tags and replace the url and the icon using the [Font Awesome list](http://fontawesome.io/icons/), e.g. to add a GitHub icon

```html
<a href="https://github.com/username" target="_blank" rel="noopener" title="GitHub"><i class="fa fa-2x fa-fw fa-github"></i> <span class="hidden">GitHub</span></a>
```

If you don't want the social icons section, replace `{{> footer-social}}` with `{{!> footer-social}}` in `default.hbs`.

#### Customize the blog signature
Replace the text, email address and author name in the file `partials/footer-author.hbs`.
To remove it, replace `{{> footer-author}}` with `{{!> footer-author}}` in `default.hbs`.

#### Hide post author section
If you don't want to show the author section (which is profile picture, bio, website and location) at the bottom of posts, replace `{{> post-author}}` with `{{!> post-author}}` in `post.hbs`.

#### Activate the comments
Replace `{{!> disqus}}` with `{{> disqus}}` in `post.hbs` and in `page.hbs` (if you want them in static pages too), then add your Disqus ID in `partials/disqus.hbs`.

#### Add Twitter, Google Webmaster and Facebook meta
Replace `{{!> meta}}` with `{{> meta}}` in `default.hbs`, then customize the content of `partials/meta.hbs`.

#### Activate Google Analytics
After you've created your Google Analytics account, change `{{!> google-analytics}}` to `{{> google-analytics}}` in `default.hbs`, ensuring to replace `YOUR_TRACKING_CODE` with your actual tracking code.

#### Custom favicon and apple-touch-icon
To customize the favicon and/or apple-touch-icon of your blog replace `favicon.ico`, the 16x16 and 32x32 `favicon.png` and the 180x180 `appletouchicon.png` in `/assets/img/`.

#### JavaScript
##### Smooth Scroll
Steam features [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll) for nice scrolling animations. The default settings are in `js/steam.js`

```javascript
smoothScroll.init({
    speed: 800,
    easing: 'easeInOutCubic',
    updateURL: false,
    offset: 125,
});
```

Smooth Scroll is automatically injected in footnotes refs and backrefs when created via their markdown syntax.

```md
This is the body of the post with a footnote ref[ˆ1] somewhere.

[^1]: End of the post with the footnote text.
```

##### highlight.js
Steam also features [highlight.js](https://highlightjs.org) for syntax highlighting: you can disable it by removing the line

```javascript
hljs.initHighlightingOnLoad();
```

in `js/steam.js`

You can force a code block into a specific language highlighting by appending the lang name, e.g.:

    ```ruby
    puts "Hello, World!"
    ```

If you want to suppress the highlighting for a particular code block, you can use `nohighlight`:

    ```nohighlight
    $ git clone https://github.com/epistrephein/Steam.git
    ```

## Contributing
Bug reports and pull requests are welcome on [GitHub](https://github.com/epistrephein/Steam).

This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Code of Conduct](CODE_OF_CONDUCT.md).

You can contribute changes by forking the project and submitting a pull request. To get started:

1. Fork the repo
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new pull request

## License
This project is released under the terms of the MIT license. See [LICENSE](LICENSE) for further details.
