import { Component, effect, inject, PLATFORM_ID, Inject } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { ThemeService } from './theme.service';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavigationComponent,
    TranslateModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'portfolio';
  readonly themeService = inject(ThemeService);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        if (this.themeService.isDark()) {
          document.body.classList.add('dark-theme');
        } else {
          document.body.classList.remove('dark-theme');
        }
      }
    });
  }
}
