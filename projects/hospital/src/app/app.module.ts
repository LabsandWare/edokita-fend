import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { FooterModule } from './shared/footer/footer.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { HospitalRoutes } from './app-routing';
import { HospitalLayoutComponent } from './layouts/hospital-layout/hospital-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(HospitalRoutes),
    FormsModule,
    FooterModule,
    FixedPluginModule,
    NavbarModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const providers = []

@NgModule({
  providers: providers
})
export class HospitalSharedModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}