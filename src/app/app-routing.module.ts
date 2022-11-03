import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwaitComponent } from './components/async-await/async-await.component';
import { ConcatMapComponent } from './components/concat-map/concat-map.component';
import { ConcatMergeComponent } from './components/concat-merge/concat-merge.component';
import { CustomObservablesComponent } from './components/custom-observables/custom-observables.component';
import { FromEventOperatorComponent } from './components/from-event-operator/from-event-operator.component';
import { FromOperatorComponent } from './components/from-operator/from-operator.component';
import { IntervalTimerComponent } from './components/interval-timer/interval-timer.component';

import { LandingComponent } from './components/landing/landing.component';
import { MergeMapComponent } from './components/merge-map/merge-map.component';
import { OfOperatorComponent } from './components/of-operator/of-operator.component';
import { ReplaySubjectComponent } from './components/replay-subject/replay-subject.component';
import { SubjectComponent } from './components/subject/subject.component';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'async-await', component: AsyncAwaitComponent },
  { path: 'timer-interval-operator', component: IntervalTimerComponent },
  { path: 'of-operator', component: OfOperatorComponent },
  { path: 'from-operator', component: FromOperatorComponent },
  { path: 'from-event-operator', component: FromEventOperatorComponent },
  { path: 'custom-observable', component: CustomObservablesComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'replaysubject', component: ReplaySubjectComponent },
  { path: 'concat-merge', component: ConcatMergeComponent },
  { path: 'merge-map', component: MergeMapComponent },
  { path: 'concat-map', component: ConcatMapComponent },
  { path: 'switch-map', component: SwitchMapComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
