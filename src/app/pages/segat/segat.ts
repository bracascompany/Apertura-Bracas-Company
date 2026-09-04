import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-segat',
  imports: [],
  templateUrl: './segat.html',
  styleUrl: './segat.scss',
})
export class Segat implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(document.body, 'theme-segat');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'theme-segat');
  }
}
