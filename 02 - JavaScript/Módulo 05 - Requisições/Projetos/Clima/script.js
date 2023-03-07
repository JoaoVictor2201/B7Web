const select = (el) => document.querySelector(el);
const selectAll = (el) => document.querySelectorAll(el);
const apiKey = '1645375ef0336c8bbc8a15e338d80ce0';

select('.busca').addEventListener('submit', async (e) => {
  e.preventDefault();

  let input = select('#searchInput').value;

  if (input) {
    showWaring('Carregando...');

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=${apiKey}&units=metric&lang=pt_br`;
    let results = await fetch(url);
    let json = await results.json();

    if (json.cod === 200) {
      showStats({
        name : json.name,
        country : json.sys.country,
        temp : json.main.temp,
        tempIcon : json.weather[0].icon,
        windSpeed : json.wind.speed,
        windAngle : json.wind.deg
      });
    } else {
      clearStats();
      showWaring('Cidade não encontrada!')
    }

  } else {
    clearStats();
    showWaring('Digite uma cidade!')
  }
})

function showWaring(message) {
  select('.aviso').innerHTML = message;
}

function showStats(json) {
  showWaring('');

  select('.titulo').innerHTML = `${json.name}, ${json.country}`;
  select('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;
  select('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`;
  select('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
  select('.ventoPonto').style.transform = `rotate(${json.windAngle}deg)`;

  select('.resultado').style.display = 'block';
}

function clearStats() {
  showWaring('');
  select('.resultado').style.display = 'none';
}