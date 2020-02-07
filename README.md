![Local qAIRa Map]()

# Local qAIRa Map
Open source web page developed with the purpose of displaying the air quality data offline for a workshop.

## Getting Started

Clone or download the project to the device where it will be used.

Make sure you have a json format file in the Data folder, as well as a .mbtiles format map hosted in the root folder.

### Prerequisites


Install [Docker](http://www.docker.com/) on your computer and then run in the Worshop directory with the downloaded MBTiles the command:

```bash
docker run --rm -it -v $(pwd):/data -p 8080:80 klokantech/tileserver-gl
```

This will download and start a ready to use container on your computer and the maps are going to be available in webbrowser on localhost:8080.


### Installing

After having our map available in localhost: 8080.
We verify to have the file:

```
WorkShop/src/Data/users.json
```

With the format:

```
{
  "Data":[
    {
      "id": 'number',
      "timestamp": 'date',
      "CO": 'number',
      "CO2": 'number',
      "H2S": 'number',
      "NO": 'number',
      "NO2":'number',
      "O3": 'number',
      "PM1": 'number',
      "PM25": 'number',
      "PM10": 'number',
      "SO2": 'number',
      "VOC": 'number',
      "UV": 'number',
      "UVA": 'number',
      "UVB": 'number',
      "spl": 'number',
      "humidity": 'number',
      "pressure": 'number',
      "temperature": 'number',
      "lat": 'number',
      "lon": 'number',
      "qhawax_id": 'number',
      "alt": 'number'
    }
  ]
```
Luego vamos a la carpeta src y la desplegamos localmente.

## Built With

* [Leaflet.TileLayer.MBTiles](https://www.npmjs.com/package/Leaflet.TileLayer.MBTiles)


## Authors

* **qAIRa Drones** - *Initial work* - [GitHub](https://github.com/qAIRa/WorkShop)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
