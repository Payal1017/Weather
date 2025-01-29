async function Weather() {
    const cityName = document.getElementById('city').value;
    const apiKey = '12b166d57a039484a5dda5018b2c4c3a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
  
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('City not found');

    const data = await response.json();
    document.getElementById('result').innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><b>Temp:</b> ${data.main.temp} °C</p>
      <p><b>Condition:</b> ${data.weather[0].description}</p>
      `;

  } catch (error){
    document.getElementById('result').innerHTML = `<p style="color:red;>${error.message}</p>`;
  }
}
