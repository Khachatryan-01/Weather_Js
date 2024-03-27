WeatherManager.search("Yerevan").then(() => {
    window.weather = new Weather({ container: document.body });
});