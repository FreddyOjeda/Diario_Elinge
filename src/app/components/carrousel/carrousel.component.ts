import { Component, Input, OnInit } from '@angular/core';
import { ICarrouselItem } from './Icarrousel-item.metadata';

export interface ICarrouselItem2{
  id:number;
  title?:{
      first:string;
      second:string;
  };
  subtitle?:string;
  link?:string;
  image:string;
  order?:number;
  marginLeft?:number;
}

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  /**
   * Custom properties
   */
  @Input() height =500;
  @Input() isFullScreen =false;
  @Input() items2: ICarrouselItem2[]=[];

  items=[
    {id:0,first:"Hola",second:"MUNDO",subtitle:"que mas que hace",link:"",image:"./src/assets/images/fondo.jpg",order:0,marginLeft:0}
  ]
  /**
   * Final Properties
   */
  public finalHeight: string |number=0;
  public currentPosition =0;

  constructor() { 
    this.finalHeight=this.isFullScreen? '100vh' : `${this.height}px`;
  }

  ngOnInit(): void {
    this.items.map((i,index)=>{
      i.id=index;
      i.marginLeft=0;
    });
  }

  setCurrentPosition(position:number){
    this.currentPosition=position;
    this.items[0].marginLeft = -100 * this.currentPosition;
  }

  setNext(){
    let finalPercentage = 0;
    let nextPosition = this.currentPosition+1;
    if(nextPosition <= this.items.length-1){
      finalPercentage = -100 * nextPosition;
    } else{
      nextPosition = 0;
    }
    this.items[0].marginLeft = finalPercentage;
    this.currentPosition = nextPosition
  }

  setBack(){
    let finalPercentage = 0 ;
    let backPosition = this.currentPosition-1;
    if ( backPosition >= 0 ) {
      finalPercentage = -100 *backPosition ;
    } else {
    backPosition - this.items.length - 1 ;
      finalPercentage = -100 *backPosition ;
    }
    this.currentPosition -1 ;
    this.items[0].marginLeft = finalPercentage ;
    this.currentPosition = backPosition ;
  }
}
