import { Component, ViewChild } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { IonButton, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('A') button1: any;
  @ViewChild('B') button2: any;
  @ViewChild('C') button3: any;
  @ViewChild('D') button4: any;
  @ViewChild('E') button5: any;
  @ViewChild('F') button6: any;
  @ViewChild('G') button7: any;
  @ViewChild('H') button8: any;
  @ViewChild('I') button9: any;
  @ViewChild('J') button10: any;
  @ViewChild('K') button11: any;
  @ViewChild('L') button12: any;
  @ViewChild('M') button13: any;
  @ViewChild('N') button14: any;
  @ViewChild('O') button15: any;
  @ViewChild('P') button16: any;
  @ViewChild('Q') button17: any;
  @ViewChild('R') button18: any;
  @ViewChild('S') button19: any;
  @ViewChild('T') button20: any;
  @ViewChild('U') button21: any;
  @ViewChild('V') button22: any;
  @ViewChild('W') button23: any;
  @ViewChild('X') button24: any;
  @ViewChild('Y') button25: any;
  @ViewChild('Z') button26: any;

  @ViewChild('img1') img1: any;
  public palavra: string;
  public errou: number;
  public palavraOculta: string;
  public arrayPalavraOculta: Array<string> = [];
  public arrayPalavra: Array<string> = [];
  public vencedor: string;

  constructor(private toast: ToastController) {
    this.palavra = '';
    this.palavraOculta = '';
    this.errou = 0;
    this.vencedor = 'ganhou';
  }

  jogar() {
    this.palavra = this.palavra.toUpperCase();
    for (let i = 0; i < this.palavra.length; i++) {
      let letra = this.palavra.substring(i, i + 1);
      this.arrayPalavra.push(letra);
    }

    for (let i = 0; i < this.arrayPalavra.length; i++) {
      this.palavraOculta = this.palavraOculta + '?';
      this.arrayPalavraOculta.push('?');
    }
  }

  pesquisar(button: IonButton, letra: string) {
    let achou = false;
    this.palavraOculta = '';
    for (let i = 0; i < this.arrayPalavra.length; i++) {
      if (letra == this.arrayPalavra[i]) {
        this.arrayPalavraOculta[i] = letra;
        achou = true;
      }
    }

    for (let i = 0; i < this.arrayPalavraOculta.length; i++) {
      this.palavraOculta = this.palavraOculta + this.arrayPalavraOculta[i];
    }

    if (this.ganhou() == true) {
      this.presentToast('Você venceu.....');
    }

    if (achou == false) {
      this.errou++;
      this.carregarImagem(this.errou);
      if (this.errou == 6) {
        this.presentToast('Você foi enforcado.......');
      }
    }
  }

  carregarImagem(errou: number) {
    let arrayEndereco = [
      '../../assets/icon/forca-img-1.png',
      '../../assets/icon/forca-img-2.png',
      '../../assets/icon/forca-img-3.png',
      '../../assets/icon/forca-img-4.png',
      '../../assets/icon/forca-img-5.png',
      '../../assets/icon/forca-img-6.png',
      '../../assets/icon/forca-img-7.png',
    ];
    this.img1.src = arrayEndereco[errou - 1];
  }

  async presentToast(mens: string) {
    const toast = await this.toast.create({
      message: mens,
      duration: 2000,
      position: 'bottom',
    });

    await toast.present();
  }

  ganhou() {
    let ganhou = false;
    for (let i = 0; i < this.arrayPalavraOculta.length; i++) {
      if (this.arrayPalavraOculta[i] == '?') {
        return false;
      }
    }
    return true;
  }

  reiniciar() {
    this.arrayPalavra = [];
    this.arrayPalavraOculta = [];
    this.img1 = "src = '../../assets/icon/forca-img-1.png'";
    this.button1.disabled = false;
  }
}
