import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-prod',
  templateUrl: './lista-prod.component.html',
  standalone: true,
  styleUrls: ['./lista-prod.component.scss'],
  imports: [],
})
export class ListaProdComponent  implements OnInit {

  activo: boolean = false;

  listaProducto: string[] = ["Manzana", "Pera", "Kiwi", "Banano"];

  listaObjetos = [
    {nombre: "Juana",
      edad: 25
    },
    {nombre: "Andres",
      edad: 25
    },
    {nombre: "Camilo",
      edad: 25
    },
  ]

  constructor() { }

  ngOnInit() {}

}
