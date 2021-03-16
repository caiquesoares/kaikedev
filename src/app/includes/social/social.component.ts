import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.less']
})
export class SocialComponent implements OnInit {
  public social: any[];
  constructor() { }

  ngOnInit() {
    this.social = environment.social.filter(x => (x.ativo && x.ativohome));
  }


}
