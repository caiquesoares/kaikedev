import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.less']
})
export class ContatoComponent implements OnInit {
  public social: any[];
  constructor() { }

  ngOnInit() {
    this.social = environment.social.filter(x => x.ativo === true);
  }
}
