import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatMenuModule, MatIconModule} from '@angular/material';
import { NavComponent } from './nav/nav.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { DomainAndSSLComponent } from './domain-and-ssl/domain-and-ssl.component';
import { WebHostingComponent } from './web-hosting/web-hosting.component';
import { VirtualServerAndCloudComponent } from './virtual-server-and-cloud/virtual-server-and-cloud.component';
import { PrivateServerComponent } from './private-server/private-server.component';
import { DataCenterServicesComponent } from './data-center-services/data-center-services.component';
import { OrganizationalSolutionsComponent } from './organizational-solutions/organizational-solutions.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { DomaincheckerComponent } from './domain-and-ssl/domainchecker/domainchecker.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { HttpClientModule }    from '@angular/common/http';









@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DomainAndSSLComponent,
    WebHostingComponent,
    VirtualServerAndCloudComponent,
    PrivateServerComponent,
    DataCenterServicesComponent,
    OrganizationalSolutionsComponent,
    DomaincheckerComponent,


  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    MatListModule,
    BrowserAnimationsModule,
    MatButtonModule,
     MatCheckboxModule,
     MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      {
        path: "domain-and-ssl",
        component:DomainAndSSLComponent,
        children:[
          {
            path: "domainchecker",
            component:DomaincheckerComponent,
          }
        ],
      },
      {
        path: "web-hosting",
        component:WebHostingComponent,
      },
      {
        path: "virtual-server-and-cloud",
        component:VirtualServerAndCloudComponent,
      },
      {
        path: "private-server",
        component:PrivateServerComponent,
      },
      {
        path: "data-center-services",
        component:DataCenterServicesComponent,
      },
      {
        path: "organizational-solutions",
        component:OrganizationalSolutionsComponent,
      },


    ])
   ],

   exports: [
     MatMenuModule,
   ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
