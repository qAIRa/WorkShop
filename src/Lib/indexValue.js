const indexValue = (data) => {

    const lat = data.lat.toFixed(5);
    const lng = data.lon.toFixed(5);
    const CO2 = (typeof data.CO2 !== 'number' || data.CO2 <=0) ? '-' :  data.CO2.toFixed(2);
    const NO = (typeof data.NO !== 'number' || data.NO <=0) ? '-' :  data.NO.toFixed(2);
    const PM1 = (typeof data.PM1 !== 'number' || data.PM1 <=0) ? '-' :  data.PM1.toFixed(2);
    const humidity = (typeof data.humidity !== 'number' || data.humidity <=0) ? '-' :  data.humidity.toFixed(2);
    const pressure = (typeof data.pressure !== 'number' || data.pressure <=0) ? '-' :  (data.pressure/1000).toFixed(2);
    const temperature = (typeof data.temperature !== 'number' || data.temperature <=0) ? '-' :  data.temperature.toFixed(2);


    const PM10 = (typeof data.PM10 !== 'number' || data.PM10 <=0) ? '-' :  (data.PM10*2/3).toFixed(2);
    const SO2 = (typeof data.SO2 !== 'number'||data.SO2 <=0) ? '-' : (data.SO2*5).toFixed(2);
    const CO = (typeof data.CO !== 'number' || data.CO <=0) ? '-' : (data.CO*0.001).toFixed(2);
    const H2S = (typeof data.H2S !== 'number' || data.H2S <=0) ? '-' : (data.H2S*2/3).toFixed(2);
    const PM25 = (typeof data.PM25 !=='number' || data.PM25 <=0) ? '-' : (data.PM25*4).toFixed(2);
    const O3 = (typeof data.O3 !== 'number' || data.O3 <=0) ? '-' : (data.O3*5/6).toFixed(2);
    const NO2 = (typeof data.NO2 !== 'number' || data.NO2 <=0) ? '-' : (data.NO2*0.5).toFixed(2);
    
    
    return {
        lat,
        lng,
        CO2,
        NO,
        PM1,
        humidity,
        pressure,
        temperature,
        PM10,
        SO2,
        CO,
        H2S,
        PM25,
        O3,
        NO2,
       };
}

export {indexValue};
