import {airQuality} from '../Lib/colorPicker.js';
import {indexValue} from '../Lib/indexValue.js';

const green = {
  color: 'green',
  fillColor: '#66cd00',
  fillOpacity: 0.5,
}

const orange = {
  color: 'orange',
  fillColor: '#ff8c00',
  fillOpacity: 0.5,
}
const yellow = {
  color: 'yellow',
  fillColor: '	#ffd700',
  fillOpacity: 0.5,
}

const red = {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
}

const graphs= document.getElementById('graphs');
const chart = document.getElementById('chart');
const home = document.getElementById('logo');

const popup = (data, color) => `
<div>
<table class="table-popup">
<caption>Information</caption>
<thead>
<tr>
<th>Element</th>
<th>Value</th>
<th>Color</th>
</tr>
</thead>
<tbody>
<tr>
<td>CO</td>
<td>${data.CO}</td>
<td bgcolor=${color.qCO}></td>
</tr>
<tr>
<td>H<sub>2</sub>S</td>
<td>${data.H2S}</td>
<td bgcolor=${color.qH2S}></td>
</tr>
<tr>
<td>SO<sub>2</sub></td>
<td>${data.SO2}</td>
<td bgcolor=${color.qSO2}></td>
</tr>
<tr>
<td>NO<sub>2</sub></td>
<td>${data.NO2}</td>
<td bgcolor=${color.qNO2}></td>
</tr>
<tr>
<td>O<sub>3</sub></td>
<td>${data.O3}</td>
<td bgcolor=${color.qO3}></td>
</tr>
<tr>
<td>PM 2,5</td>
<td>${data.PM25}</td>
<td bgcolor=${color.qPM25}></td>
</tr>
<tr>
<td>PM 10</td>
<td>${data.PM10}</td>
<td bgcolor=${color.qPM10}></td>
</tr>
</tbody>
</table>
</div>
`;















const viewGraphPage = () => {

  document.getElementById('container').innerHTML = '';
  

  const mapElem = document.createElement('div');
  mapElem.setAttribute('id', 'mapId');


  const map = new L.Map(mapElem).fitWorld();
 
 
  
  map.setView(new L.LatLng(-12.070978, -77.083197), 13);
  const mb = L.tileLayer("http://localhost:8080/styles/klokantech-basic/{z}/{x}/{y}.png").addTo(map);

  setTimeout(()=>{ map.invalidateSize(true)},100);
 
  mb.on('databaseloaded', function(ev) {
      console.info('MBTiles DB loaded', ev);
  });
  mb.on('databaseerror', function(ev) {
      console.info('MBTiles DB error', ev);
  });  
    

fetch('../src/Data/users.json')
.then(res => res.json())
.then(data => {

    const filteredLatLng = Object.values(data.Data
        .filter(d => d.lat && d.lon && d.lat !== 0 && d.lon !== 0 && typeof d.lat === 'number' && typeof d.lon === 'number')
        .reduce((total, item) => ({ ...total, [`${item.lat}${item.lon}`]: item }), {}));
        
        filteredLatLng.forEach(position => {

          const indexV = indexValue(position);
          const airQ = airQuality(indexV);
          
          switch (airQ.airColor) {
            case 'green':
              return L.circle([position.lat, position.lon], 100, green).addTo(map).bindPopup(popup(indexV,airQ));
              break;
            case 'yellow':
              return L.circle([position.lat, position.lon], 100, yellow).addTo(map).bindPopup(popup(indexV,airQ));
               break;
            case 'orange':
              return L.circle([position.lat, position.lon], 100, orange).addTo(map).bindPopup(popup(indexV,airQ));
               break;
            case 'red':
              return L.circle([position.lat, position.lon], 100, red).addTo(map).bindPopup(popup(indexV,airQ));
              break;
          
            default:
              break;
          }

        
            

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
    return mapElem;
};

export {viewGraphPage}