import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage {

  result = document.getElementById('txtResultado');

  constructor() { }

  async ObtemPosicao() {
    var isError = false;
    var msgError = "";
    let CHAVE = 'C791E885F7C5F';
    let METODO = 'localizacao';
    let DATAMINIMA = '';
    let PLACA = '';
    let chaveJson = { "CHAVE": CHAVE, "DataMinima": DATAMINIMA, "Placa": PLACA, "Metodo": METODO };
    let URL = 'http://cliente.dfleet.com.br/data/posicao';
    let Data = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(chaveJson),
      headers: { "Content-type": "application/json; charset=UTF-8", "Access-Control-Allow-Origin": "*" }
    })
      .then(response => response.json())
      .then(json => {
        isError = false;
        msgError = "dados retornados";
        console.log('dados retornados com sucesso', json);
        return { isError: false, msgError: "Dados retornados com sucesso", Data: [json] };
      })
      .catch(err => {
        isError = true;
        msgError = 'ocorreu um erro ao consultar o API: ' + err;
        console.log('ocorreu um erro ao consultar o API', err);
        return { isError: true, msgError: msgError, Data: [] };
      });

    // tratamento dos dados
    if (isError) {
      alert(msgError);
    }
    else {

      var resultado = '';
      for (var x = 0; x < Data.Data.length; x++) {
        resultado = resultado + 'Rota: ' + Data.Data[x].FROTA + ' - Hora: ' +
          Data.Data[x].DATAEVENTO.replace('T', ' ') +
          ' LOCALIZAÇÃO: ' + Data.Data[x].ENDERECO + '<BR />';
      }
      this.result!.innerHTML = resultado;
      alert('dados recebidos');
    }
  }

}
