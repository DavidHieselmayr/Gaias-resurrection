import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavComponent} from './nav/nav.component';
import {TrailerComponent} from './trailer/trailer.component';

const routes: Routes = [
  {path: '**', component: NavComponent},
  {path: 'trailer', component: TrailerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
