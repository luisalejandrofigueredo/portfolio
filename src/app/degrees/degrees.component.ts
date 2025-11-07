import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-degrees',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './degrees.component.html',
  styleUrl: './degrees.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DegreesComponent {

}
