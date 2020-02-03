import {airQuality} from '../Lib/colorPicker.js';
import {indexValue} from '../Lib/indexValue.js';

const graphs= document.getElementById('graphs');
const chart = document.getElementById('chart');
const home = document.getElementById('logo');

const ChartHtml = `

<table>
  <thead>
  <tr>
  <th >Latitude</th>
  <th >Longitude</th>
  <th >CO</th>
  <th >CO2</th>
  <th >H2S</th> 
  <th >NO</th>
  <th >NO2</th>
  <th >O3</th>
  <th >PM1</th>
  <th >PM2.5</th>
  <th >PM10</th>
  <th >SO2</th>
  <th >Humidity</th>
  <th >Pressure (Pa)</th>
  <th >Temp (C°)</th>
  </tr>
  </thead>
  <tbody id="body-chart">
  </tbody>
</table>

 
`;


const viewChartPage = () => {

    document.getElementById('container').innerHTML = '';
    const chartElem = document.createElement('div');
    chartElem.setAttribute('class', 'chart');
    chartElem.innerHTML = ChartHtml;


fetch('../src/Data/users.json')
.then(res => res.json())
.then(data => {

    const filteredLatLng = Object.values(data.Data
        .filter(d => d.lat && d.lon && d.lat !== 0 && d.lon !== 0 && typeof d.lat === 'number' && typeof d.lon === 'number')
        .reduce((total, item) => ({ ...total, [`${item.lat}${item.lon}`]: item }), {}));
        
        filteredLatLng.forEach(position => {

          const indexV = indexValue(position);
          const airQ = airQuality(indexV);

            const bodyChart = chartElem.querySelector('#body-chart');
            const row = document.createElement('tr');
 
             
            const qPM10 = airQ.qPM10;
            const qSO2 = airQ.qSO2;
            const qCO = airQ.qCO;
            const qH2S = airQ.qH2S;
            const qPM25 = airQ.qPM25;
            const qO3 = airQ.qO3;
            const qNO2  = airQ.qNO2;

            const lat = indexV.lat;
            const lng = indexV.lng;
            const CO2 = indexV.CO2;
            const NO = indexV.NO;
            const PM1 = indexV.PM1;
            const humidity = indexV.humidity;
            const pressure= indexV.pressure;
            const temperature= indexV.temperature;

            const PM10 = indexV.PM10;
            const SO2 = indexV.SO2;
            const CO = indexV.CO;
            const H2S = indexV.H2S;
            const PM25 = indexV.PM25;
            const O3 = indexV.O3;
            const NO2  = indexV.NO2;
            

           row.innerHTML=`
            <td>${lat}</td>
            <td>${lng}</td>
            <td bgcolor="${qCO}">${CO}</td>
            <td>${CO2}</td>
            <td bgcolor="${qH2S}">${H2S}</td>
            <td>${NO}</td>
            <td bgcolor="${qNO2}">${NO2}</td>
            <td bgcolor="${qO3}">${O3}</td>
            <td>${PM1}</td>
            <td bgcolor="${qPM25}">${PM25}</td>
            <td bgcolor="${qPM10}">${PM10}</td>
            <td bgcolor="${qSO2}">${SO2}</td>
            <td>${humidity}</td>
            <td>${pressure}</td>
            <td>${temperature}</td>
           `;

            bodyChart.appendChild(row);
            
        })

})
.catch(err => console.error(err));



  graphs.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#/graphs';
  });

  chart.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#/chart';
  });

  home.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#';
  });

  return chartElem;
}

export {viewChartPage};