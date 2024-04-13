import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {

  constructor(private element : ElementRef,private renderer : Renderer2) {

  }
  @HostBinding('style.backgroundColor') backgroundColor : string = 'black';
  @HostBinding('style.border') border : string = '#282828 2px solid';
  @HostBinding('style.color') textColor : string = 'white';

  @HostListener('mouseenter') OnMouseEnter(){
    this.backgroundColor = 'white';
    this.textColor = '#282828';
    this.border='#282828 3px solid';
  }

  @HostListener('mouseout') OnMouseOut(){
    this.backgroundColor = 'black';
    this.textColor = 'white';
    this.border='#282828 2px solid';
  }
}
