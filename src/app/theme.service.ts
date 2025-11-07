import { Injectable, signal, PLATFORM_ID, Inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isDark = signal<boolean>(false);
  readonly isDark$ = toObservable(this.isDark);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.loadTheme();
  }

  toggleTheme(): void {
    this.isDark.update((isDark) => !isDark);
    this.saveTheme();
  }

  private saveTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', this.isDark() ? 'dark' : 'light');
    }
  }

  private loadTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        this.isDark.set(storedTheme === 'dark');
      }
    }
  }
}
