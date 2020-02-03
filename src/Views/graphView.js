

const graphs= document.getElementById('graphs');
const chart = document.getElementById('chart');
const home = document.getElementById('logo');

const viewGraphPage = () => {
  document.getElementById('container').innerHTML = '';

  const mapElem = document.createElement('div');
  mapElem.setAttribute('id', 'mapId');


  const map = new L.Map(mapElem).fitWorld();
 
  
  map.setView(new L.LatLng(-13.254308, 34.301525), 8);
  const mb = L.tileLayer.mbTiles('../src/Images/africa_malawi.mbtiles').addTo(map);
  

  mb.on('databaseloaded', function(ev) {
      console.info('MBTiles DB loaded', ev);
  });
  mb.on('databaseerror', function(ev) {
      console.info('MBTiles DB error', ev);
  });

  

  
  // var map = new L.Map(mapElem);

	// var mb = L.tileLayer.mbTiles('./Views/countries-raster.mbtiles', {
	// 	minZoom: 0,
	// 	maxZoom: 6
	// })

	// mb.on('databaseloaded', function(ev) {
	// 	console.info('MBTiles DB loaded', ev);
	// });
	// mb.on('databaseerror', function(ev) {
	// 	console.info('MBTiles DB error', ev);
	// });

  // mb.addTo(map);



  
    

fetch('../src/Data/users.json')
.then(res => res.json())
.then(data => {

    const filteredLatLng = Object.values(data.Data
        .filter(d => d.lat && d.lon && d.lat !== 0 && d.lon !== 0 && typeof d.lat === 'number' && typeof d.lon === 'number')
        .reduce((total, item) => ({ ...total, [`${item.lat}${item.lon}`]: item }), {}));
        
        filteredLatLng.forEach(position => {



            

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