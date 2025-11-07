import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [TranslateModule,NgOptimizedImage],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

}
