const appRoot = document.getElementById('elTiempo');
let miTiempo = {};

let render = (myWeather) =>{
    const template = (
            <div>
                <p> {myWeather.data.name} </p>
                <p> {myWeather.data.weather[0].description} </p>  
                <p>  <img src={`http://openweathermap.org/img/wn/${myWeather.data.weather[0].icon}@2x.png
                `}></img>
                 </p>  
            </div>
            
         
    );
    ReactDOM.render(template, appRoot);
};

const peticion = document.querySelector('#botonTiempo');

peticion.addEventListener('click',  (e) => {
    e.preventDefault();
    console.log("Boton pulsado")
    // miTiempo = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Córdoba,Andalucía,ES&appid=58e4fe89a463d7b20eec7ef72de9ec4d',);

    miTiempo = axios.get('http://api.openweathermap.org/data/2.5/weather?q=Córdoba,Andalucía,ES&appid=58e4fe89a463d7b20eec7ef72de9ec4d',);

    miTiempo.then((myWeather) =>{
        render(myWeather);
    });

    
});

