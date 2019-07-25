import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import {DomainAndSSLComponent} from "./domain-and-ssl/domain-and-ssl.component";
import {DomaincheckerComponent} from "./domain-and-ssl/domainchecker/domainchecker.component";
import {WebHostingComponent} from "./web-hosting/web-hosting.component";
import {VirtualServerAndCloudComponent} from "./virtual-server-and-cloud/virtual-server-and-cloud.component";
import {PrivateServerComponent} from "./private-server/private-server.component";
import {DataCenterServicesComponent} from "./data-center-services/data-center-services.component";
import {OrganizationalSolutionsComponent} from "./organizational-solutions/organizational-solutions.component";



export const routes: Routes = [
  {
      path: '',
      redirectTo: '/auto-generated',
      pathMatch: 'full',
  },

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

];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
