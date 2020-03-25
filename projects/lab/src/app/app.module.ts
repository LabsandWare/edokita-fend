import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { FooterModule } from './shared/footer/footer.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { LabRoutes } from './app-routing';
import { LabLayoutComponent } from './layouts/lab-layout/lab-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LabLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(LabRoutes),
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
export class LabSharedModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}