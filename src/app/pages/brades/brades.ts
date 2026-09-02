import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-brades',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './brades.html',
  styleUrl: './brades.scss'
})
export class BradesComponent implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2) {}
  ngOnInit() { this.renderer.addClass(document.body, 'theme-brades'); }
  ngOnDestroy() { this.renderer.removeClass(document.body, 'theme-brades'); }
}
