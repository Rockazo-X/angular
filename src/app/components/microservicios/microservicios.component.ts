import { Component, OnInit } from '@angular/core';
import { Microservicio } from '../../modelos/microservicio';
import { MicroserviciosServices } from '../../services/microservicios.services'
import {Observable} from "rxjs";
import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-microservicios',
    templateUrl: './microservicios.component.html'
})
export class MicroserviciosComponent implements OnInit {

    microservicios: Observable<Microservicio[]>;

    constructor(private _microserviciosService: MicroserviciosServices) { 
    }

    ngOnInit(): void {
        this.microservicios = this._microserviciosService.listar();
        console.log(this.microservicios);
    }

}
