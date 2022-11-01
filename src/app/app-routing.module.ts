import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwaitComponent } from './components/async-await/async-await.component';
import { FromEventOperatorComponent } from './components/from-event-operator/from-event-operator.component';
import { FromOperatorComponent } from './components/from-operator/from-operator.component';
import { IntervalTimerComponent } from './components/interval-timer/interval-timer.component';

import { LandingComponent } from './components/landing/landing.component';
import { OfOperatorComponent } from './components/of-operator/of-operator.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'async-await', component: AsyncAwaitComponent },
  { path: 'timer-interval-operator', component: IntervalTimerComponent },
  { path: 'of-operator', component: OfOperatorComponent },
  { path: 'from-operator', component: FromOperatorComponent },
  { path: 'from-event-operator', component: FromEventOperatorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
