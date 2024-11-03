import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './Vehiculo';
import { VehiculoService } from './vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {


  constructor(private vehiculoService: VehiculoService) { }
  vehiculos: Array<Vehiculo> = [];

  getVehiculos() {
    this.vehiculoService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
    });
  }

  ngOnInit() {
    this.getVehiculos();
  }

}
