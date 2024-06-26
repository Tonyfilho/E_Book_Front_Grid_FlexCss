import { SectionComponent } from './section/section.component';
import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [HeaderComponent, SectionComponent,  FooterComponent, RouterOutlet],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
