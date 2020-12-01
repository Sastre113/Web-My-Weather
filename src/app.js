const appRoot = document.getElementById('elTiempo');
let miTiempo = {};
let miISO = {};
let url = "";

let render = (myWeather) => {
    const template = (
        <div>
            <p> {myWeather.data.name} </p>
            <p> {myWeather.data.weather[0].description} </p>
            <p>  <img src={`http://openweathermap.org/img/wn/${myWeather.data.weather[0].icon}@2x.png
                `}></img>
            </p>
            <div>
                <form>
                    <div id="camposTiempo">
                        <label for="">Poblacion</label>
                        <input type="text" id="datoPoblacion" />
                        <label for="">Comunidad</label>
                        <input type="text" id="datoComunidad" />
                    </div>
                    <label for="">Usando AlphaCODE</label>
                    <input type="text" id="datosISO" />
                </form>
            </div>
        </div>
    );
    ReactDOM.render(template, appRoot);
};


let render2 = (iso3166) => {
    const template = (
        <div>
            <h1>{iso3166.data.name}</h1>
            <div>
                <form>
                    <div id="camposTiempo">
                        <label for="">Poblacion</label>
                        <input type="text" id="datoPoblacion" />
                        <label for="">Comunidad</label>
                        <input type="text" id="datoComunidad" />
                    </div>
                    <label for="">Usando AlphaCODE</label>
                    <input type="text" id="datosISO" />
                </form>
            </div>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

const peticion = document.querySelector('#botonTiempo');
const peticion2 = document.querySelector('#botonAlpha');
const datosIntroducidos = document.querySelector("#camposTiempo");

datosIntroducidos.addEventListener('input', (e) => {
    e.preventDefault();
    console.log("Datos introducidos en el formulario");

    console.log(e.target.value)
    if (e.target.value !== "")
        document.querySelector("#datosISO").disabled = true;
    else
        document.querySelector("#datosISO").disabled = false;
});


peticion.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Boton pulsado");

    let poblacion = document.querySelector("#datoPoblacion").value;
    let comunidad = document.querySelector("#datoComunidad").value;

    // Estos no se usan
    // let url = 'http://api.openweathermap.org/data/2.5/weather?q=Córdoba,Andalucía,ES&appid=58e4fe89a463d7b20eec7ef72de9ec4d';

    // let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + poblacion + ',' + comunidad + ',ES&appid=58e4fe89a463d7b20eec7ef72de9ec4d';ç

    url = `http://api.openweathermap.org/data/2.5/weather?q=${poblacion},${comunidad},ES&appid=58e4fe89a463d7b20eec7ef72de9ec4d`;


    miTiempo = axios.get(url,);

    miTiempo.then((myWeather) => {
        render(myWeather);
    });
});

peticion2.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Boton pulsado");

    let iso = document.querySelector("#datosISO").value;
    url = `https://restcountries.eu/rest/v2/alpha/${iso}`;

    miISO = axios.get(url,);

    miISO.then((iso) => {
        render2(iso);
    }).catch((error) => {
        console.error("ESTO ES UN ERROR");
    });
});

