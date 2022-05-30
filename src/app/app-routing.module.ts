import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IncomesComponent } from './pages/incomes/incomes.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'incomes',
        component: IncomesComponent
      },
      {
        path: 'expenses',
        component: ExpensesComponent
      },
    ]
  }
]

@NgModule({
  declarations: [],
    imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
