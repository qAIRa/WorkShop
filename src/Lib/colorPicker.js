import {indexValue} from './indexValue.js';

const airQuality = (data) => {

    const PM10 = data.PM10;
    const SO2 = data.SO2;
    const CO = data.CO;
    const H2S = data.H2S;
    const PM25 = data.PM25;
    const O3 = data.O3;
    const NO2 = data.NO2;


    const qPM10 = (PM10 >=0 && PM10 <=75) ? 'green'
     :(PM10 >=76 && PM10 <=150) ? 'yellow' 
     : (PM10 >=151 && PM10 <=250) ? 'orange' : (PM10>=251) ? 'red' : 'transparent';

     const qSO2 = (SO2 >=0 && SO2 <=10) ? 'green'
     :(SO2 >=11 && SO2 <=20) ? 'yellow' 
     : (SO2 >=21 && SO2 <=500) ? 'orange' : (SO2>=501) ? 'red' : 'transparent';

     const qCO = (CO >=0 && CO <=5049) ? 'green'
     :(CO >=5050 && CO <=10049) ? 'yellow' 
     : (CO >=10050 && CO <=15049) ? 'orange' : (CO>=15050) ? 'red' : 'transparent';

     const qH2S = (H2S >=0 && H2S <=75) ? 'green'
     :(H2S >=76 && H2S <=150) ? 'yellow' 
     : (H2S >=151 && H2S <=1500) ? 'orange' : (H2S>=1501) ? 'red' : 'transparent';

     const qPM25 = (PM25 >=0 && PM25 <=12.5) ? 'green'
     :(PM25 >=12.6 && PM25 <=25) ? 'yellow' 
     : (PM25 >=25.1 && PM25 <=125) ? 'orange' : (PM25>=126) ? 'red' : 'transparent';

     const qO3 = (O3 >=0 && O3 <=60) ? 'green'
     :(O3 >=61 && O3 <=120) ? 'yellow' 
     : (O3 >=121 && O3 <=210) ? 'orange' : (O3>=211) ? 'red' : 'transparent';


     const qNO2 = (NO2 >=0 && NO2 <=100) ? 'green'
     :(NO2 >=101 && NO2 <=200) ? 'yellow' 
     : (NO2 >=201 && NO2 <=300) ? 'orange' : (NO2>=301) ? 'red' : 'transparent';

     const airColor = 
     (qPM10=== 'red' || qSO2=== 'red' || qCO=== 'red'
      || qH2S=== 'red' || qPM25=== 'red' || qO3=== 'red'
       || qNO2=== 'red') ?'red' : 
       (qPM10 === 'orange' || qSO2 === 'orange' ||
        qCO === 'orange' || qH2S === 'orange' || qPM25 === 'orange'
         || qO3 === 'orange' || qNO2 === 'orange') ?'orange' : 
         (qPM10 === 'yellow' || qSO2 === 'yellow' ||
          qCO === 'yellow' || qH2S === 'yellow' || 
          qPM25 === 'yellow' || qO3 === 'yellow' || 
          qNO2 === 'yellow') ? 'yellow' : (qPM10 === 'green' || qSO2 === 'green' ||
          qCO === 'green' || qH2S === 'green' || 
          qPM25 === 'green' || qO3 === 'green' || 
          qNO2 === 'green') ? 'green' : 'transparent';

    
    return {
     qPM10,
     qSO2,
     qCO,
     qH2S,
     qPM25,
     qO3,
     qNO2,
     airColor
    };
}

export {airQuality};