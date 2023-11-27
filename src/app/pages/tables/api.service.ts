import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class ApiService {
    public apiUrl = "http://localhost:8080/clientes/todos";
    public apiUrl2 = "http://localhost:8080/clientes/individual/"+1;
    constructor(private http: HttpClient) {}
    tomarDatos(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
    tomarDatosIndividual(): Observable<any> {
        return this.http.get(this.apiUrl2);
    }
}
