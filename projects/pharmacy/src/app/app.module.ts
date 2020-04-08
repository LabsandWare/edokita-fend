import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { FooterModule } from './shared/footer/footer.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';


import { AppComponent } from './app.component';

import { PharmacyRoutes } from './app-routing';
import { PharmacyLayoutComponent } from './layouts/pharmacy-layout/pharmacy-layout.component';
import { RegisterComponent } from './layouts/pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    PharmacyLayoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(PharmacyRoutes),
    FormsModule,
    FooterModule,
    FixedPluginModule,
    NavbarModule,
    SidebarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const providers = []

@NgModule({
  providers: providers
})

export class PharmacySharedModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}