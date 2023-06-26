import { Component } from '@angular/core';
import {CryptoService} from "../../services/crypto.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private cryptoService: CryptoService) {
  }


  fetchData(){
    this.cryptoService.getData().subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }


  getDate(){
    return new Date().toLocaleDateString("en-GB");
  }
}
