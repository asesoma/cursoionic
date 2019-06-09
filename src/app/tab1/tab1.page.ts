import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    constructor(private router : Router){}

    valocaliza(){
      this.router.navigate(['localiza']);
    }
  
  parques : any []=[
      {
      Name : "Parque Simon Bolivar",
      Description : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
      foto: "casa290.PNG"
       },
       {
         Name:"Parque de los Novios",
         Description: "Este es el parque de los Novios",
         foto:"casa890.PNG"
       }

       /*,
       {
         Name:"Parque el Country",
         Description: "Este es el parque del Country",
         foto: "elCountry.jpg"
       },
       {
         Name:"Parque Tercer Milenio",
         Description: "Este es el Parque Tercer Mileno",
         foto: "tercer_milenio.jpg"
       },
       {
         Name:"Parque El Tunal",
         Description: "Este es el Parque El Tunal",
         foto: "elTunal.jpg"
       },
       {
         Name:"Parque San Cristobal",
         Description: "Este es el Parque San Cristobal",
         foto: "parqueSanCristobal.jpg"
       } */

    ]




}
