import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../Vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  
  constructor(private vehiculoService: VehiculoService) { }

  getVehiculos() {
    this.vehiculoService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
    });
  }

  ngOnInit() {
    this.getVehiculos();
  }

}