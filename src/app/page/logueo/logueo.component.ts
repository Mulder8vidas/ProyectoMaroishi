import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SharedserviceService} from "../../services/sharedservice.service";
import {AutenticacionService} from "../../services/autenticacion.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.component.html',
  styleUrls: ['./logueo.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class LogueoComponent implements OnInit {
  relacion(){
    this.sharedservice.cambioLogin(false)
    this.sharedservice.cambioRecuperar(true)

  }
  mostrar(){
    console.log("aea")
    this.sharedservice.cambioLoginActivo(true)
  }
  ocultar(){
    this.sharedservice.cambioLoginActivo(false)
  }
  usuario:string="";
  value2: string="";
  status:boolean=false;
  Login(email:any,password:any){

    this.seriviciocompleto.Loguear(email,password).subscribe((value:any) => {

      console.log(value);
      localStorage.setItem("token",value.Token);

      this.sharedservice.datausuarios(this.usuario=value.data);
      alert("Logeado")
      this.sharedservice.usuarioLogerado(true);
      /*location.reload();*/
      this.router.navigate(["/"]);


    },error => {


      alert(error.error.details[0])

    })
  }



  constructor(private sharedservice:SharedserviceService,  private seriviciocompleto:AutenticacionService,private router:Router) {

  }

  ngOnInit(): void {

  }

}
