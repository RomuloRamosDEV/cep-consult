import { formatCurrency, getLocaleDayPeriods } from '@angular/common';
import { Component } from '@angular/core';
import {CepServiceService} from './cep-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CepAngular';

  constructor(private cepsService:CepServiceService){ }

    consultaCep(valor, form){
      this.cepsService.buscar(valor).subscribe((dados) => this.populaForm(dados, form));
    }

    populaForm(dados, form){
      form.setValue({
        cep: dados.cep,
        logradouro: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        uf: dados.uf
      })
    }

  }


