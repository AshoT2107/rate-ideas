import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './core/component/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-navbar />`,
  imports: [RouterOutlet, MatButtonModule, NavbarComponent],
})
export class AppComponent {}
