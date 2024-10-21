import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {

  imagem:string = './assets/lobo.jpg';

  alterarImagem(){
   if (this.imagem === './assets/lobo.jpg') {
    this.imagem = './assets/bicicleta-300-200.jpg';
   }else if (this.imagem !== './assets/lobo.jpg'){
    this.imagem = './assets/lobo.jpg';{
}
    }else if(this.imagem !== './assets/lobo.jpg' && this.imagem !== './assets/bicicleta-300-200.jpg'){
      this.imagem === './assets/matos.jpg';
    }
     {


    }

    }

    }








