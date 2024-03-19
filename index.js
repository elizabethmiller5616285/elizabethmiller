const chroma = require('chroma-js');

// Function to generate a random color
function generateRandomColor() {
    return chroma.random().hex();
}

// Function to lighten a color by a specified percentage
function lightenColor(color, percentage) {
    return chroma(color).brighten(percentage).hex();
}

// Function to darken a color by a specified percentage
function darkenColor(color, percentage) {
    return chroma(color).darken(percentage).hex();
}

// Function to blend two colors together
function blendColors(color1, color2, mode = 'multiply') {
    return chroma.mix(color1, color2, 0.5, mode).hex();
}

module.exports = {
    generateRandomColor,
    lightenColor,
    darkenColor,
    blendColors
};
