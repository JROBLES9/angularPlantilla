import { Component, OnInit } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {
  data: any;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.tomarDatos().subscribe((respuesta) => {
      this.data = respuesta;
      console.log(this.data);
    });
    this.apiService.tomarDatosIndividual().subscribe((respuesta) => {
      this.data = respuesta;
      console.log(this.data);
    });
  }
}
