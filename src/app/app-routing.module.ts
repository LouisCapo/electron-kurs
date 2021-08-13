import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./modules/main-form/main-form.module`).then(module => module.MainFormModule),
    pathMatch: 'full',
  },{
    path: 'main',
    loadChildren: () => import(`./modules/main-form/main-form.module`).then(module => module.MainFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
