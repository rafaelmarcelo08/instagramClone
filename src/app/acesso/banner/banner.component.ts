import {
  state,
  style,
  trigger,
  transition,
  animate
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Imagem } from 'src/app/model/imagem.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      })),
      transition('escondido <=> visivel',
        animate('1s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estato: string = 'visivel';
  public imagens: Imagem[] = [
    {
      estado: 'visivel',
      url: '/assets/banner-acesso/img_1.png'
    },
    {
      estado: 'escondido',
      url: '/assets/banner-acesso/img_2.png'
    },
    {
      estado: 'escondido',
      url: '/assets/banner-acesso/img_3.png'
    },
    {
      estado: 'escondido',
      url: '/assets/banner-acesso/img_4.png'
    },
    {
      estado: 'escondido',
      url: '/assets/banner-acesso/img_5.png'
    }
  ];

  constructor() {
    setTimeout(() => {
      this.logicaRotacao();
    }, 3000);
  }

  ngOnInit(): void {
  }

  logicaRotacao() {
    let idx: number

    for (let i: number = 0; i <= 4; i++) {
      if (this.imagens[i].estado === 'visivel') {
        this.imagens[i].estado = 'escondido';

        idx = i === 4 ? 0 : i + 1;
        this.imagens[idx].estado = 'visivel';
        break;
      }
    }

    setTimeout(() => {
      this.logicaRotacao();
    }, 3000);
  }
}
