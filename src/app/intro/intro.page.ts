import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "Gatitos",
      img: "https://www.zooplus.es/magazine/wp-content/uploads/2021/06/Lombrices-en-gatitos.jpg",
      icon: "beer-outline",
      description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las" 
    },
    {
      title: "Perritos",
      img: "assets/images/perritos.jpeg",
      icon: "barbell-outline",
      description: "Hola soy la explicacion del slide, Hola soy la explicacion del slide" 
    },
    {
      title: "Hamsters",
      img: "https://t1.ea.ltmcdn.com/es/posts/5/8/8/cuidados_y_alimentacion_del_hamster_7885_600.jpg",
      icon: "beer-outline",
      description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto" 
    },
    {
      title: "Gatitos",
      img: "https://www.zooplus.es/magazine/wp-content/uploads/2021/06/Lombrices-en-gatitos.jpg",
      icon: "beer-outline",
      description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las" 
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  close() {
    this.router.navigateByUrl("/home");
  }

}
