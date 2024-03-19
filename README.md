# Elizabethmiller

Elizabethmiller is a Node.js module for color manipulation using the chroma-js library.

## Installation

You can install Elizabethmiller via npm: `npm install elizabethmiller`

## Usage
```javascript
const chromaUtils = require('chroma-utils');

// Generate a random color
const randomColor = chromaUtils.generateRandomColor();

// Lighten a color
const lightenedColor = chromaUtils.lightenColor('#FF0000', 0.5);

// Darken a color
const darkenedColor = chromaUtils.darkenColor('#00FF00', 0.3);

// Blend two colors
const blendedColor = chromaUtils.blendColors('#FF0000', '#00FF00');
```