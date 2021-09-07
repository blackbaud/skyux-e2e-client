import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SkyE2eClientModule } from 'projects/e2e-client/src/public-api';

import { VisualComponent } from './visual.component';
import { ThemeSelectorVisualComponent } from './theme-selector/theme-selector-visual.component';

@NgModule({
  declarations: [VisualComponent, ThemeSelectorVisualComponent],
  imports: [CommonModule, RouterModule, SkyE2eClientModule],
})
export class VisualModule {}
