# UCSS - Utility CSS

This library is a configurable collection of reusable utility classes that aims to be used as silent classes or directly at your markup.

Every property is defined as an array of values that will auto-generate multiple classes (optional) and silent classes.

We support an extensive list of properties and most of them are already pre-configured with generic values that should be adjusted to your project needs.

If you want to know more about utility classes you can read [The Role of Utility Classes in Scalable CSS](http://davidtheclark.com/on-utility-classes), a very nice article by [David Clark](https://twitter.com/davidtheclark).

---

## Installation

##### Install the dependency:

Use [bower](http://bower.io) or just download it from [github](https://github.com/seegno/ucss):

    $ bower install --save ucss

##### Import it on your project:

As any `scss` project you should include the `settings` overrides and the `ucss` library at your main file. An example of it should look like this:

    // Your overrides to `ucss` settings.
    @import "_my_settings_file.scss";

    // The `ucss` vendor.
    @import "<path-to-ucss-folder>/ucss.scss";

    // Your custom project styles below.
    // ...

---

## Settings

The main configuration are defined in `_settings.scss` file. There are 3 major things to be configured:

##### What to include

Every supported property is defined in `$ucss-properties` and you can just any unwanted property from this list.

If you want to redefine what each property will generate, you can find their configuration in the `properties` folder.

##### CSS classes generation

You can define if CSS should be generated or not by changing it globally on `$ucss-generate-classes`, orby changing the second parameter on `$ucss-properties` if you want to disabled a specific one.

##### Class naming

By default, `ucss` will generate class names like `.ucss-color--blue` which can be fully configured:

1. `ucss-`: the **prefix** can be changed on `$ucss-prefix`.
2. `color`: the **property** is defined on `$ucss-properties`.
3. `--`: the **delimiter** can be changed on `$ucss-delimiter`.
4. `blue`: the **modifier** is defined for each property, in this case, `$ucss-color`.

---

## How to use

After configuring `ucss` to your project needs you can use it as:

##### Extend as silent classes:

`ucss` will always generate `silent classes` that can be easily extended at your project, e.g.:

    .your-class {
      @extend %ucss-color--white;
      @extend %ucss-background-color--black;
    }

    .your-other-class {
      @extend %ucss-color--white;
    }

##### Use generated classes at your markup:

You can also use them directly on your markup, if you decide to allow `ucss` to generate css classes:

    <div class="ucss-color--white ucss-background-color--black"></div>
    <div class="ucss-color--blue"></div>

---

## Properties

The list of properties included where,

- (x) means that the property have some pre-configured generic values.
- (-) means that the property can be used but is empty by default.
- (~) means that can't be directly used, but can be configured as a child.

### Background

- (x) background-color
- (-) background-image
- (x) background-repeat
- (x) background-attachment
- (-) background-position
- (-) background

### Border

- (-) border-width
  - (~) border-top-width
  - (~) border-right-width
  - (~) border-bottom-width
  - (~) border-left-width
- (-) border-color
  - (~) border-top-color
  - (~) border-right-color
  - (~) border-bottom-color
  - (~) border-left-color
- (x) border-style
  - (~) border-top-style
  - (~) border-right-style
  - (~) border-bottom-style
  - (~) border-left-style
- (-) border
  - (~) border-top
  - (~) border-right
  - (~) border-bottom
  - (~) border-left
- (-) border-radius
  - (~) border-top-left-radius
  - (~) border-top-right-radius
  - (~) border-bottom-right-radius
  - (~) border-bottom-left-radius

### Outline

- (-) outline-width
- (x) outline-style
- (-) outline-color
- (-) outline

### Color

- (x) color
- (x) opacity

### Text

- (x) text-align
- (x) text-decoration
- (-) text-indent
- (x) text-transform
- (-) line-height
- (x) vertical-align
- (-) letter-spacing
- (-) word-spacing
- (x) white-space
- (x) direction

### Font

- (x) font-family
- (x) font-style
- (x) font-variant
- (x) font-weight
- (x) font-size
- (-) font

### Margin & Padding

- (x) margin
  - (~) margin-top
  - (~) margin-right
  - (~) margin-bottom
  - (~) margin-left
- (x) padding
  - (~) padding-top
  - (~) padding-right
  - (~) padding-bottom
  - (~) padding-left

### List

- (x) list-style-type
- (-) list-style-image
- (x) list-style-position
- (-) list-style

### Box Size

- (-) width
- (-) min-width
- (-) max-width
- (-) height
- (-) min-height
- (-) max-height

### Visual formatting

- (x) display
- (x) position
- (-) top
- (-) right
- (-) bottom
- (-) left
- (x) float
- (x) clear
- (-) z-index
- (x) overflow
- (-) clip
- (x) visibility
- (x) cursor

### Table

- (x) caption-side
- (x) table-layout
- (x) border-collapse
- (-) border-spacing
- (x) empty-cells

### Generated content

- (-) content
- (-) quotes
- (-) counter-reset
- (-) counter-increment
