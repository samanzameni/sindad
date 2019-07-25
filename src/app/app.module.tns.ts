import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module.tns';
import { AppComponent } from './app.component';
import { DomainAndSSLComponent } from './domain-and-ssl/domain-and-ssl.component';
import { WebHostingComponent } from './web-hosting/web-hosting.component';
import { VirtualServerAndCloudComponent } from './virtual-server-and-cloud/virtual-server-and-cloud.component';
import { PrivateServerComponent } from './private-server/private-server.component';
import { DataCenterServicesComponent } from './data-center-services/data-center-services.component';
import { OrganizationalSolutionsComponent } from './organizational-solutions/organizational-solutions.component';
import { DomaincheckerComponent } from './domain-and-ssl/domainchecker/domainchecker.component';
import { NavComponent } from './nav/nav.component';



// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    DomainAndSSLComponent,
    WebHostingComponent,
    VirtualServerAndCloudComponent,
    PrivateServerComponent,
    DataCenterServicesComponent,
    OrganizationalSolutionsComponent,
    DomaincheckerComponent,
    NavComponent,

  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
