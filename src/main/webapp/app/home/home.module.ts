import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterPocSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [JhipsterPocSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class JhipsterPocHomeModule {}
