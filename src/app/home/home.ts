import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, TranslateModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
