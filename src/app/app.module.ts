import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { OfOperatorComponent } from './components/of-operator/of-operator.component';
import { FromOperatorComponent } from './components/from-operator/from-operator.component';
import { FromEventOperatorComponent } from './components/from-event-operator/from-event-operator.component';
import { AsyncAwaitComponent } from './components/async-await/async-await.component';
import { IntervalTimerComponent } from './components/interval-timer/interval-timer.component';
import { CustomObservablesComponent } from './components/custom-observables/custom-observables.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ReplaySubjectComponent } from './components/replay-subject/replay-subject.component';
import { ConcatMergeComponent } from './components/concat-merge/concat-merge.component';
import { MergeMapComponent } from './components/merge-map/merge-map.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    OfOperatorComponent,
    FromOperatorComponent,
    FromEventOperatorComponent,
    AsyncAwaitComponent,
    IntervalTimerComponent,
    CustomObservablesComponent,
    SubjectComponent,
    ReplaySubjectComponent,
    ConcatMergeComponent,
    MergeMapComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FormsModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
