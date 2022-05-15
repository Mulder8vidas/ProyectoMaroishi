import { Component, OnInit } from '@angular/core';
import {SharedserviceService} from "../../services/sharedservice.service";

@Component({
  selector: 'app-recupera',
  templateUrl: './recupera.component.html',
  styleUrls: ['./recupera.component.css']
})
export class RecuperaComponent implements OnInit {
  change(){
    this.sharedservice.cambioRecuperar(false)
    this.sharedservice.cambioLogin(true)
  }
  constructor(private sharedservice:SharedserviceService) { }

  ngOnInit(): void {
  }

}
