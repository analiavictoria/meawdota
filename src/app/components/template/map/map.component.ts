import { environment } from 'src/environments/environment';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  
  map!: mapboxgl.Map;
  style = 'mapbox://styles/analiavictoire/cl39mjvrx002515pfucexfin9';
  lat = -3.044662;
  lng = -59.9671039;
  
  constructor() { }

  ngOnInit() {
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1IjoiYW5hbGlhdmljdG9pcmUiLCJhIjoiY2wzOWlrZDJtMGEwdDNjbzVuOHB0eWR4MyJ9.-F9C0O0ZqeHUvIf9DXRXJQ'
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 13,
        center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}