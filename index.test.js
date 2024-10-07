// index.test.js
const helloWorld = require('./index.js');

test('debe retornar "Hola Mundo"', () => {
    expect(helloWorld()).toBe("Hola Mundo");
});
