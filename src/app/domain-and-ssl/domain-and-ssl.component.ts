import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-domain-and-ssl',
  templateUrl: './domain-and-ssl.component.html',
  styleUrls: ['./domain-and-ssl.component.css']
})
export class DomainAndSSLComponent implements OnInit {

  constructor(public router:Router) {

  }

  ngOnInit() {
  }

}
