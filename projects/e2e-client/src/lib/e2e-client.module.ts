import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkyE2eThemeSelectorComponent } from './theme-selector/theme-selector.component';

@NgModule({
  declarations: [SkyE2eThemeSelectorComponent],
  imports: [FormsModule],
  exports: [SkyE2eThemeSelectorComponent],
})
export class SkyE2eClientModule {}
