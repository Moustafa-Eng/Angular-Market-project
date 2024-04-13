import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
  selector : '[setBackground]'
})
export class SetBackground{
  // @Input() textColor : string;
  // @Input() backColor : string;
  @Input() textBold : string;
  @Input() title : string;
  @Input('setBackground')changeTextAndBackColor : {textColor : string, backColor : string};
  // private ele : ElementRef
  // private renderer : Renderer2;
  constructor(private el : ElementRef,private renderer : Renderer2){
    // this.ele = el;
    // this.renderer = renderer;
  }

  ngOnInit(){
    // this.ele.nativeElement.style.backgroundColor = 'green';
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.changeTextAndBackColor.backColor);
    this.renderer.setStyle(this.el.nativeElement, 'color', this.changeTextAndBackColor.textColor);
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', this.textBold);
    this.renderer.setAttribute(this.el.nativeElement,'title','span');

  }
}
