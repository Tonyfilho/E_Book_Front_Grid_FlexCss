import { Component } from '@angular/core';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [SectionComponent, FooterComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
