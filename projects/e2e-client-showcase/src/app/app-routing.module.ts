import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeSelectorVisualComponent } from './visual/theme-selector/theme-selector-visual.component';
import { VisualComponent } from './visual/visual.component';

const routes: Routes = [
  {
    path: 'visual',
    component: VisualComponent,
  },
  {
    path: 'visual/theme-selector',
    component: ThemeSelectorVisualComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
