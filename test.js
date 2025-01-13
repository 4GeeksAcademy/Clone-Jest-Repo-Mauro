// Importar la función sum del archivo app.js
const {sum} = require("./app.js");

//Comineza tu primera prueba
test("adds 14 + 9 to equal 23", () => {
    //Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum (14,9);

    //Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

//Aca testamos la conversion de moneda de Euro a Dolar 
test("One Euro should be 1.07 Dollars", function() {
    // Importo la funcion desde app.js 
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

// Aca testeamos la conversion de moneda de Dollar a Yen
test("One Dollar should be 146.262 Japanese Yen", function() {
    //Importo la funcion desde app.js
    const {fromDollarToYen} = require('./app.js');

    // Uso la función como debe ser usada
    const Yen = fromDollarToYen(3.5);

    // 1 Euro son 1.07 Dollars, entonces 1 Dollar es 0.9346 Euros y 1 Euro son 156.5 Yenes, entonces 1 Dollar son 146.262 Yenes.
    const expected = 3.5 * 146.262;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(511.91588785046724); // entonces 3.5 Dollars a Yenes debería ser (3.5 * 146.2616822429907)
});

// Aca testeamos la conversión de moneda de Yen a Bristish Pound
test("One Pound should be 179.885 Japanese Yen", function() {
    const {fromYenToPound} = require('./app.js');

    // Uso la función como debe ser usada
    const Pound = fromYenToPound(3.5); //

    // Si 0.87 Pound es 1 Euro, y 1 Euro es 156.5 Yenes, entonces 1 Pound es 1.149 Euros y 1.149 Euros deberian ser 179.818 Yenes, entonces 1 Pound deberia ser 179.885 Yenes; asi 3.5 Pound serían 629.598 Yenes
    const expected = 3.5 * 179.8850574712644;

    //Hago mi comparación, osea la prueba
    expect(fromYenToPound(3.5)).toBe(629.5977011494252); // 1 Pound es 179.885 Yenes, entonces 3.5 Punds serían (3.5 * 179.8850574712644) = 629.5977 Yenes
});