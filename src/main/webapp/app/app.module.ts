import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterPocSharedModule } from 'app/shared/shared.module';
import { JhipsterPocCoreModule } from 'app/core/core.module';
import { JhipsterPocAppRoutingModule } from './app-routing.module';
import { JhipsterPocHomeModule } from './home/home.module';
import { JhipsterPocEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterPocSharedModule,
    JhipsterPocCoreModule,
    JhipsterPocHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterPocEntityModule,
    JhipsterPocAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterPocAppModule {}
