import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Config, DomaincheckerService, InputDomainName} from "./domainchecker.service";
import {BehaviorSubject} from "rxjs";


@Component({
  selector: 'app-domainchecker',
  templateUrl: './domainchecker.component.html',
  styleUrls: ['./domainchecker.component.css']

})
export class DomaincheckerComponent implements OnInit {
  public domainform:FormGroup ;
  public selectedTab: BehaviorSubject<number>;


  constructor(private domainCheckerService: DomaincheckerService) {
    this.selectedTab = new BehaviorSubject<number>(0);
    this.domainform = new FormGroup({
      'name' : new FormControl('', [Validators.required])
    });

    this.selectedTab.asObservable().subscribe(val=>{
      console.log(val);
      if (1 === val){
        this.showInput()
      }});


  }

  config: Config;
  showConfig() {
    this.domainCheckerService.getConfig()
      .subscribe((data: Config) => {console.log(data);this.config = { ...data }});
  }

  // status : boolean;

  inputdomainname: InputDomainName;

  showInput(){

    this.inputdomainname.inputname= "saman";
    this.domainCheckerService.addinput(this.inputdomainname)
      .subscribe(res => {
        return this.inputdomainname.status = res.InputDomainName.status;
      });
  }

  ngOnInit() {
  }

}
