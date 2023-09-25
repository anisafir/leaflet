import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  constructor() { }
  // ngOnInit() {

  // }

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([37.557739830766174, 127.00036370522173], 8)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // //menambah marker
    // const marker = new L.Marker([35.75943, -5.80081]);
    // this.map.addLayer(marker);
    // marker.bindPopup('ini Pop up yea').openPopup();;
    const markerIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41]
    });


    const marker = L.marker([37.557739830766174, 127.00036370522173], { icon: markerIcon }).addTo(this.map);
    this.map.addLayer(marker);
    marker.bindPopup('ini Pop up yea')
      .openPopup();

    // menambah layer peta osm
    var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
    }).addTo(this.map);

    var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
    }).addTo(this.map);

    var baseMaps = {
      "OpenStreetMap": osmLayer,
      "OpenStreetMapHOT": osmHOT,
      "OpenTopographicMap": openTopoMap,
    };

    L.control.layers(baseMaps).addTo(this.map);

  }




}
