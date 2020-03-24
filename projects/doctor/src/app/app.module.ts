import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders} from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { FooterModule } from './shared/footer/footer.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';

@NgModule({
  declarations: [
    AppComponent,  
    DoctorLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
export class DoctorSharedModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}