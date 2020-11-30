const readRequest = document.querySelector('#miTiempo');


readRequest.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log("Boton pulsado")
    const res = await axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={58e4fe89a463d7b20eec7ef72de9ec4d}',)

});

