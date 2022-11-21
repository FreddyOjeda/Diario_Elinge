import { AfterViewInit, Component, OnInit } from '@angular/core';

import Swiper, {Navigation,Pagination,Scrollbar,A11y} from 'swiper';
Swiper.use([Navigation,Pagination]);

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    const myswiper = new Swiper('.swiper', {
      // Optional parameters
    
      loop: true,
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }

  ngOnInit(): void {
  }

}
