# Changelog

All notable changes to this project will be documented in this file.  
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased
[Diff](https://github.com/epistrephein/Steam/compare/v2.0.1...master)

#### Changed
- Use a flat yellow color for marked text
- Reduce border-left size of blockquote

## 2.0.1 - 2017-11-09
[Release](https://github.com/epistrephein/Steam/releases/tag/v2.0.1) |
[Diff](https://github.com/epistrephein/Steam/compare/v2.0.0...v2.0.1)

#### Fixed
- Fixed theme name in `package.json`
- Markdown syntax for footnotes is now properly working
- Links with `target="_blank"` have now `rel="noopener"` to prevent malicious endpoints

#### Changed
- Social accounts defined in Ghost general settings are now displayed automatically in the footer
- Renamed `theme-green.hbs` to `theme-colors.hbs` for clarity
- Updated README with latest behavior

## 2.0.0 - 2017-11-04
[Release](https://github.com/epistrephein/Steam/releases/tag/v2.0.0) |
[Diff](https://github.com/epistrephein/Steam/compare/v1.5.0...v2.0.0)

#### Added
- Ready for Ghost v1.0+

#### Changed
- Changed icon `tag` to `tags` in post footer
- Show navigation only if active in blog settings
- Updated head meta tags to latest standards
- Updated CSS and JavaScript libraries to latest version
- Updated LICENSE to mention original author
- Updated CHANGELOG and moved to [Keep a Changelog](http://keepachangelog.com/) format

#### Removed
- Removed link hover effect from blog title header


## 1.5.0 - 2016-05-22
[Release](https://github.com/epistrephein/Steam/releases/tag/v1.5.0) |
[Diff](https://github.com/epistrephein/Steam/compare/v1.4...v1.5.0)

#### Changed
- Removed author meta indentation from post footer
- Upscaled favicon to 180px
- Moved from ico to png favicon
- Moved custom fonts `@import` to `<link>` ([Vapor #43](https://github.com/sethlilly/Vapor/pull/43))
- Updated external javascript and css to latest version

#### Fixed
- Tags are no longer misaligned when navigation is active (fixes [#13](https://github.com/epistrephein/Steam/issues/13))


## 1.4 - 2015-09-27
[Release](https://github.com/epistrephein/Steam/releases/tag/v1.4) |
[Diff](https://github.com/epistrephein/Steam/compare/v1.3...v1.4)

#### Changed
- Updated [highlight.js](https://highlightjs.org) to v8.8.0
- Updated [smooth-scroll](https://github.com/cferdinandi/smooth-scroll) to v7.1.1 and moved to CDN version
- Updated [normalize.css](http://necolas.github.io/normalize.css/) to v3.0.3
- Updated github customized style for highlight.js
- Explicitly included jQuery to comply to Ghost 0.7 (as noted in [#7](https://github.com/epistrephein/Steam/issues/7))

#### Fixed
- Replaced hardcoded root domain `/` with `@blog.url` helper in blog footer (fixes [#6](https://github.com/epistrephein/Steam/issues/6))


## 1.3 - 2015-07-17
[Release](https://github.com/epistrephein/Steam/releases/tag/v1.3) |
[Diff](https://github.com/epistrephein/Steam/compare/v1.2...v1.3)

#### Added
- Support for meta elements ([PR #4](https://github.com/epistrephein/Steam/pull/4))
- Support for tags page
- Redesigned look for the author section at the bottom of post (and also toggleable)
- Google Analytics partial for quick implementation

#### Changed
- Moved menu partials to official ghost navigation ([PR #3](https://github.com/epistrephein/Steam/pull/3))
- Font size reduced
- A few tweaks here and there

#### Fixed
- `<title>` displays blog title and description in the home and post title in the post page


## 1.2 - 2014-11-07
[Release](https://github.com/epistrephein/Steam/releases/tag/v1.2) |
[Diff](https://github.com/epistrephein/Steam/compare/v1.1...v1.2)

#### Added
- Multiple theme colors + blank partial for custom color
- Customizable partial for favicon & apple-touch-icon

#### Changed
- The page title now shows the blog description as well
- Tweaks and bugfixes


## 1.1 - 2014-10-27
[Release](https://github.com/epistrephein/Steam/releases/tag/v1.1) |
[Diff](https://github.com/epistrephein/Steam/compare/v1.0...v1.1)

#### Added
- Customizable partials for menu, social icons and blog signature

#### Changed
- Better handing of external javascript tools
- Little tweaks in the style for a cleaner look


## 1.0 - 2014-10-13
[Release](https://github.com/epistrephein/Steam/releases/tag/v1.0)
- Initial release of Steam
