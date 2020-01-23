const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const centerX = window.innerWidth/2;
const centerY = window.innerHeight/2;

fetch('./users.json')
.then(res => res.json())
.then(data => {

    const filteredLatLng = Object.values(data.Data
        .filter(d => d.lat && d.lon && d.lat !== 0 && d.lon !== 0 && typeof d.lat === 'number' && typeof d.lon === 'number')
        .reduce((total, item) => ({ ...total, [`${item.lat}${item.lon}`]: item }), {}));

        mapPattern(filteredLatLng)
        
})
.catch(err => console.error(err));

const newSize = () => {
    canvas.height= window.innerHeight;
    canvas.width = window.innerWidth;
};

const airQuality = (data) => {

    const PM10 = (data.PM10)*(2/3);
    const SO2 = (data.SO2)*(5);
    const CO = (data.CO)*(0.001);
    const H2S = (data.H2S)*(2/3);
    const PM25 = (data.PM25)*(4);
    const O3 = (data.PM25)*(5/6);
    const NO2 = (data.NO2)*(0.5);

    const qPM10 = (PM10 >=0 && PM10 <=75) ? 'good'
     :(PM10 >=76 && PM10 <=150) ? 'average' 
     : (PM10 >=151 && PM10 <=250) ? 'bad' : 'alert';

     const qSO2 = (SO2 >=0 && SO2 <=10) ? 'good'
     :(SO2 >=11 && SO2 <=20) ? 'average' 
     : (SO2 >=21 && SO2 <=500) ? 'bad' : 'alert';

     const qCO = (CO >=0 && CO <=5049) ? 'good'
     :(CO >=5050 && CO <=10049) ? 'average' 
     : (CO >=10050 && CO <=15049) ? 'bad' : 'alert';

     const qH2S = (H2S >=0 && H2S <=75) ? 'good'
     :(H2S >=76 && H2S <=150) ? 'average' 
     : (H2S >=151 && H2S <=1500) ? 'bad' : 'alert';

     const qPM25 = (PM25 >=0 && PM25 <=12.5) ? 'good'
     :(PM25 >=12.6 && PM25 <=25) ? 'average' 
     : (PM25 >=25.1 && PM25 <=125) ? 'bad' : 'alert';

     const qO3 = (O3 >=0 && O3 <=60) ? 'good'
     :(O3 >=61 && O3 <=120) ? 'average' 
     : (O3 >=121 && O3 <=210) ? 'bad' : 'alert';

     const qNO2 = (NO2 >=0 && NO2 <=100) ? 'good'
     :(NO2 >=101 && NO2 <=200) ? 'average' 
     : (NO2 >=201 && NO2 <=300) ? 'bad' : 'alert';
    

    return {
     PM10: qPM10,
     SO2: qSO2,
     CO: qCO,
     H2S: qH2S,
     PM25: qPM25,
     O3: qO3,
     NO2: qNO2
    };
}

const mapPattern = (data) => {
    canvas.height= window.innerHeight;
    canvas.width = window.innerWidth;

    
    //draw each position
    data.forEach(position => {
        const coordX = centerX+(position.lat*centerX/90);
        const coordY = centerY+(position.lat*centerY/180);

        console.log(airQuality(position));
        

        console.log('lat:', coordX);
        console.log('lon:', coordY);


        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(coordX, coordY, 8, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();

        
    });
    
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
            y: e.clientY - rect.top
        };
    }




window.addEventListener('resize', newSize);
window.addEventListener('load', mapPattern);