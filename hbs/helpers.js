const hbs = require('hbs');

// helpers
hbs.registerHelper('getAnio', () => new Date().getFullYear());

hbs.registerHelper('capitalize', (str) => {

    if (typeof str !== 'string') return ''

    let palabras = str.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLocaleLowerCase()
    })
    return palabras.join(' ');
});