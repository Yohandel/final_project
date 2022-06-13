import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './bills/bills.component';
import { IncomeBllsComponent } from './income-blls/income-blls.component';
import { IncomeComponent } from './income/income.component';

const routes: Routes = [
  {
    path: 'home',
    component: IncomeBllsComponent
  },
  {
    path: 'gastos',
    component: BillsComponent
  },
  {
    path: 'ingresos',
    component: IncomeComponent
  },
  {
    path: '**',
    redirectTo: '/home',pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
