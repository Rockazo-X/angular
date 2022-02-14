import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Microservicio} from "../modelos/microservicio";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MicroserviciosServices {

  
  url = environment.url;
  
  private httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  constructor(private http: HttpClient) {
  }

  listar(): Observable<Microservicio[]> {
    return this.http.get<Microservicio[]>(`${this.url}Microservicios`);
  }

}
