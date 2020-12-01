"use strict";

var appRoot = document.getElementById('elTiempo');
var miTiempo = {};
var miISO = {};
var url = "";

var render = function render(myWeather) {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            " ",
            myWeather.data.name,
            " "
        ),
        React.createElement(
            "p",
            null,
            " ",
            myWeather.data.weather[0].description,
            " "
        ),
        React.createElement(
            "p",
            null,
            "  ",
            React.createElement("img", { src: "http://openweathermap.org/img/wn/" + myWeather.data.weather[0].icon + "@2x.png\n                " })
        ),
        React.createElement(
            "div",
            null,
            React.createElement(
                "form",
                null,
                React.createElement(
                    "div",
                    { id: "camposTiempo" },
                    React.createElement(
                        "label",
                        { "for": "" },
                        "Poblacion"
                    ),
                    React.createElement("input", { type: "text", id: "datoPoblacion" }),
                    React.createElement(
                        "label",
                        { "for": "" },
                        "Comunidad"
                    ),
                    React.createElement("input", { type: "text", id: "datoComunidad" })
                ),
                React.createElement(
                    "label",
                    { "for": "" },
                    "Usando AlphaCODE"
                ),
                React.createElement("input", { type: "text", id: "datosISO" })
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

var render2 = function render2(iso3166) {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            iso3166.data.name
        ),
        React.createElement(
            "div",
            null,
            React.createElement(
                "form",
                null,
                React.createElement(
                    "div",
                    { id: "camposTiempo" },
                    React.createElement(
                        "label",
                        { "for": "" },
                        "Poblacion"
                    ),
                    React.createElement("input", { type: "text", id: "datoPoblacion" }),
                    React.createElement(
                        "label",
                        { "for": "" },
                        "Comunidad"
                    ),
                    React.createElement("input", { type: "text", id: "datoComunidad" })
                ),
                React.createElement(
                    "label",
                    { "for": "" },
                    "Usando AlphaCODE"
                ),
                React.createElement("input", { type: "text", id: "datosISO" })
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

var peticion = document.querySelector('#botonTiempo');
var peticion2 = document.querySelector('#botonAlpha');
var datosIntroducidos = document.querySelector("#camposTiempo");

datosIntroducidos.addEventListener('input', function (e) {
    e.preventDefault();
    console.log("Datos introducidos en el formulario");

    console.log(e.target.value);
    if (e.target.value !== "") document.querySelector("#datosISO").disabled = true;else document.querySelector("#datosISO").disabled = false;
});

peticion.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Boton pulsado");

    var poblacion = document.querySelector("#datoPoblacion").value;
    var comunidad = document.querySelector("#datoComunidad").value;

    // Estos no se usan
    // let url = 'http://api.openweathermap.org/data/2.5/weather?q=Córdoba,Andalucía,ES&appid=58e4fe89a463d7b20eec7ef72de9ec4d';

    // let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + poblacion + ',' + comunidad + ',ES&appid=58e4fe89a463d7b20eec7ef72de9ec4d';ç

    url = "http://api.openweathermap.org/data/2.5/weather?q=" + poblacion + "," + comunidad + ",ES&appid=58e4fe89a463d7b20eec7ef72de9ec4d";

    miTiempo = axios.get(url);

    miTiempo.then(function (myWeather) {
        render(myWeather);
    });
});

peticion2.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Boton pulsado");

    var iso = document.querySelector("#datosISO").value;
    url = "https://restcountries.eu/rest/v2/alpha/" + iso;

    miISO = axios.get(url);

    miISO.then(function (iso) {
        render2(iso);
    }).catch(function (error) {
        console.error("ESTO ES UN ERROR");
    });
});
