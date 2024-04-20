import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCirclePlus, faDesktop, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { SwiperOptions } from 'swiper/types';


@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {

  isLogged = false;

  faTrashCan=faTrashCan;
  faCirclePlus=faCirclePlus;
  faPenToSquare=faPenToSquare;
  faGithub=faGithub;
  faDesktop=faDesktop;

  config: SwiperOptions = {
    slidesPerGroup: 5,
    initialSlide: 0,
    spaceBetween: 10,
    navigation: true,
    centeredSlides: true,
    keyboard: {
      enabled: true
    },
    loop: true,
    pagination: {
      clickable: true
    },
    autoplay: true,
    speed: 1000,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      930: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    }
  }
}
