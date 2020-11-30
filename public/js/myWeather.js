'use strict';

var appRoot = document.getElementById('elTiempo');
var miTiempo = {};

var render = function render(myWeather) {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            ' ',
            myWeather.data.name,
            ' '
        ),
        React.createElement(
            'p',
            null,
            ' ',
            myWeather.data.weather[0].description,
            ' '
        ),
        React.createElement(
            'p',
            null,
            '  ',
            React.createElement('img', { src: 'http://openweathermap.org/img/wn/' + myWeather.data.weather[0].icon + '@2x.png\n                ' })
        )
    );
    ReactDOM.render(template, appRoot);
};

var peticion = document.querySelector('#botonTiempo');

peticion.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Boton pulsado");
    // miTiempo = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Córdoba,Andalucía,ES&appid=58e4fe89a463d7b20eec7ef72de9ec4d',);

    miTiempo = axios.get('http://api.openweathermap.org/data/2.5/weather?q=Córdoba,Andalucía,ES&appid=58e4fe89a463d7b20eec7ef72de9ec4d');

    miTiempo.then(function (myWeather) {
        render(myWeather);
    });
});
