import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//// PrimeNG Module
import { MenuModule } from 'primeng/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TabMenuModule } from 'primeng/tabmenu';

import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { AppTopBarComponent } from './app.topbar.component';
import { AppBreadcrumbComponent } from './app.breadcrumb.component';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { AppFooterComponent } from './app.footer.component';

import { BreadcrumbService } from './services/breadcrumb.service';
import { MenuService } from './services/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    AppTopBarComponent,
    AppBreadcrumbComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //// PrimeNG
    MenuModule,
    BreadcrumbModule,
    TabMenuModule
  ],
  providers: [
    BreadcrumbService,
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
