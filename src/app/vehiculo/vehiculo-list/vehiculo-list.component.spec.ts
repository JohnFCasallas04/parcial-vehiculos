/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { VehiculoListComponent } from './vehiculo-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Vehiculo } from '../Vehiculo';
import { VehiculoService } from '../vehiculo.service';


describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let debug: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [VehiculoListComponent],
      imports: [HttpClientTestingModule],
      providers: [VehiculoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const vehiculo = new Vehiculo(
        i + 1, // Id
        faker.vehicle.manufacturer(), // Marca
        faker.vehicle.type(), // Línea
        faker.string.alphanumeric(),  // Referencia
        faker.date.past().getFullYear(), // Modelo
        faker.number.int(), // Kilometraje
        faker.color.human(),  // Color
        faker.image.avatar() // Imagen
      );
      component.vehiculos.push(vehiculo);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should display the table', () => {
    const birthDateDiv = debug.query(By.css(`table.table`));
    expect(birthDateDiv).toBeTruthy();
  });

  it('should have 1 <table class="table"> elements', () => {
    expect(debug.queryAll(By.css('table.table'))).toHaveSize(1);
  });

  it('should have 1 <tr class="encabezadoVehiculo"> element', () => {
    expect(debug.queryAll(By.css('#encabezadoVehiculo'))).toHaveSize(1);
  });

  it('should have 3 <tr class="vehiculo"> elements', () => {
    expect(debug.queryAll(By.css('.vehiculo'))).toHaveSize(3);
  });

});
