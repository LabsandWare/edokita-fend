import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { FooterModule } from './shared/footer/footer.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { PatientRoutes } from './app-routing';
import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';
// import { ProfileComponent } from './layouts/pages/Profile/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientLayoutComponent,
   
   
  
    
   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(PatientRoutes),
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
export class PatientSharedModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}