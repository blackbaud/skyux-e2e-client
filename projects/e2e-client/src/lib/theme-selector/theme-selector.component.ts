import { Component, OnInit } from '@angular/core';

import {
  SkyTheme,
  SkyThemeMode,
  SkyThemeService,
  SkyThemeSettings,
} from '@skyux/theme';

type ThemeSelectorValue = 'default' | 'modern-light' | 'modern-dark';

@Component({
  selector: 'sky-e2e-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss'],
})
export class SkyE2eThemeSelectorComponent implements OnInit {
  public set themeName(value: ThemeSelectorValue | undefined) {
    const previousThemeName = this._themeName;
    this._themeName = value;

    if (value !== previousThemeName) {
      this.updateThemeSettings();
    }
  }

  public get themeName(): ThemeSelectorValue | undefined {
    return this._themeName;
  }

  private _themeName: ThemeSelectorValue | undefined;

  constructor(private themeSvc: SkyThemeService) {}

  public ngOnInit() {
    this.themeSvc.settingsChange.subscribe((settingsChange) => {
      const settings = settingsChange.currentSettings;

      switch (settings.theme.name) {
        case 'modern':
          if (settings.mode === SkyThemeMode.presets.dark) {
            this.themeName = 'modern-dark';
          } else {
            this.themeName = 'modern-light';
          }
          break;
        default:
          this.themeName = 'default';
          break;
      }
    });
  }

  private updateThemeSettings() {
    let theme: SkyTheme;
    let themeMode = SkyThemeMode.presets.light;

    switch (this.themeName) {
      case 'modern-light':
        theme = SkyTheme.presets.modern;
        break;
      case 'modern-dark':
        theme = SkyTheme.presets.modern;
        themeMode = SkyThemeMode.presets.dark;
        break;
      default:
        theme = SkyTheme.presets.default;
        break;
    }

    this.themeSvc.setTheme(new SkyThemeSettings(theme, themeMode));
  }
}
