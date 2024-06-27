import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [HeaderComponent, MainComponent,  FooterComponent, RouterOutlet],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
