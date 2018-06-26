import { Directive, ElementRef, Renderer } from '@angular/core';
import { OnInit } from '@angular/core';

@Directive({
  selector: '[appOnIteration]'
})
export class OnIterationDirective implements OnInit {

  constructor(private el: ElementRef,
              private renderer: Renderer
            ) { }
  ngOnInit() {
    // this.renderer.createText('p', 'hello');
  }

}
