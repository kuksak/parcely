import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';

// icons
import {TablerIconsModule} from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Vertical Layout
import {MaterialModule} from "./material.module";
import {AppRoutingModule} from "./app-routing.module";
import {LayoutComponent} from "./layouts/layout.component";
import {BrandingComponent} from "./layouts/sidebar/branding.component";
import {AppNavItemComponent} from "./layouts/sidebar/nav-item/nav-item.component";
import {SidebarComponent} from "./layouts/sidebar/sidebar.component";

@NgModule({
  declarations: [
    LayoutComponent,
    AppComponent,
    SidebarComponent,
    BrandingComponent,
    AppNavItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent],
})
export class AppModule {
}
