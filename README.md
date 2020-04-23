## reactez

A simple React CLI for Component and Page creation.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

## Installation

```
## npm i -g reactez
```

## Usage

With the new Version of reactez (v1.1.0)
A Generate feature has been added.
It's simple and easy.

## Just type

```
rez generate
```

or

```
rez g
```

This takes you to an easy-to-use prompt that helps you to generate Components and Pages.

## Component generation

- Functional Component

```
rez component [COMPONENTNAME]
```

or

```
rez c [COMPONENTNAME]
```

This command creates a default Functional Component.
The component is created at /src/components/.
The generated component consists of a .jsx(component file) and a .css(style sheet) files.
Generated component comes with a Functional Component boilerplate with the style sheet imported.

- Class Component

```
rez component [COMPONENTNAME] -c
```

or

```
rez c [COMPONENTNAME] -c
```

This command creates a Class Component.
The component is created at /src/components/.
The generated component consists of a .jsx(component file) and a .css(style sheet) files.
Generated component comes with a Class Component boilerplate with the style sheet imported.

## Alternate flag:

```
rez component [COMPONENTNAME] --class
```

or

```
rez c [COMPONENTNAME] --class
```

## Page generation

- Functional Component Page

```
rez page [PAGENAME]
```

or

```
rez p [PAGENAME]
```

This command creates a default Functional Component Page.
The component is created at /src/pages/.
The generated page consists of a .jsx(component file) and a .css(style sheet) files.
Generated page comes with a Functional Component boilerplate with the style sheet imported.

- Class Component Page

```
rez page [PAGENAME] -c
```

or

```
rez p [PAGENAME] -c
```

This command creates a Class Component Page.
The component is created at /src/pages/.
The generated page consists of a .jsx(component file) and a .css(style sheet) files.
Generated page comes with a Class Component boilerplate with the style sheet imported.

## Alternate flag:

```
rez component [PAGENAME] --class
```

or

```
rez c [PAGENAME] --class
```
