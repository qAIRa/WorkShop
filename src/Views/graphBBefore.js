import {airQuality} from '../Lib/colorPicker.js'
const canvas = document.getElementById('container');
const centerX = window.innerHeight/2;
const centerY = window.innerWidth/2;


fetch('./users.json')
.then(res => res.json())
.then(data => {

    const filteredLatLng = Object.values(data.Data
        .filter(d => d.lat && d.lon && d.lat !== 0 && d.lon !== 0 && typeof d.lat === 'number' && typeof d.lon === 'number')
        .reduce((total, item) => ({ ...total, [`${item.lat}${item.lon}`]: item }), {}));

        mapPattern(filteredLatLng);  
        
})
.catch(err => console.error(err));



const mapPattern = (data) => 
    {
    canvas.height= window.innerHeight;
    canvas.width = window.innerWidth;
    
    const latConst = -Math.trunc(data[0].lat);
    const lngConst = -Math.trunc(data[0].lon);

    const latitudes = [];
    const longitudes = [];
    //draw each position
    data.forEach(position => {

        latitudes.push(position.lat);
        longitudes.push(position.lon);

        // const coordX = (position.lat + latConst)>0 ? position.lat + latConst : -(position.lat + latConst);
        // const coordY = (position.lon + lngConst)>0 ? position.lon + lngConst : -(position.lon + lngConst);
        const coordX = position.lat;
        const coordY = position.lon;

        console.log(coordX, coordY);
        console.log(position.lat, position.lon);
        
        

        const color = airQuality(position).airColor;

        setPositionDots(canvas,color,position, coordX, coordY);
        
    });
    const maxLat =Math.max.apply(null, latitudes);
    const minLat =Math.min.apply(null, latitudes);
    const maxLng =Math.max.apply(null, longitudes);
    const minLng =Math.min.apply(null, longitudes);
    
}

    //report the mouse position on click
    canvas.addEventListener("click", (e) => {
        e.preventDefault();
        const mousePos = getMousePos(e);
        console.log(mousePos.x + ',' + mousePos.y);
    }, false);

    //Get Mouse Position
    const getMousePos = (e) => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    }   
    
    

    const setPositionDots = (elemHTML,  color, position, coordX, coordY) => {
        
        const dot = document.createElement('div');
        
        dot.setAttribute('id',`${position.id},P`);
        dot.setAttribute('class', 'dot-color');

        dot.style.left = (coordY )+'px';
        dot.style.top = (coordX )+'px';
       
        dot.style.backgroundColor = color;

        elemHTML.appendChild(dot); 

        const infoDot = document.getElementById(`${position.id},P`);  
        
        
        // infoDot.addEventListener('click', (e)=>infoWindow(position, infoDot));
        // infoDot.addEventListener('click', () => createModal('prueba'));
        
        
    }

    const newSize = () => {
        canvas.height= window.innerHeight;
        canvas.width = window.innerWidth;
    };



window.onresize = () => newSize;
window.onload= () => mapPattern;

