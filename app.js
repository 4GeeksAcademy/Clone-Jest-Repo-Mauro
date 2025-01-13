// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(EurosToExchange) {
    // Convertimos el valor a dólares
    let valueInDollar = EurosToExchange * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
};

// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(DollarsToExchange) {
    // Convertimos el valor a Yenes
    let valueDollarToEuro = (1 / 1.07); // 1 Dollar es 0.9346 Euros

    let valueDollarToYen = (valueDollarToEuro * 156.5); // 1 Dollar es 146.262

    let valueInYen = DollarsToExchange * valueDollarToYen;
    // Retornamos el valor en Yenes
    return valueInYen;
};

// Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = function(PoundsToExchange) {
    // Convertimos el valor a Euros
    
    let valuePoundToEuro = (1 / 0.87); // es el valor de 1 Pound en Euros
    
    let valueEuroToYen = ((valuePoundToEuro) * 156.5); // es el valor del Yen frente al Euro

    let valuePoundToYen = (PoundsToExchange * valueEuroToYen); 

    // Retornamos el valor en Pounds
    return valuePoundToYen;
};



// Esta es mi función que suma dos números
let sum = (a,b) => {
    return a+b ;
};

// Solo un registro en consola para nosotros
console.log(sum(7,3));

// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

// Exporta la función para usarla en otros archivos
// (similar a las palabras clave "export" cuando se usa webpack)
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
