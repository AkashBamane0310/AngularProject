import { Component, OnInit } from '@angular/core';
import { FormsModule,FormControl,FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  url="http://localhost:4200/"

  constructor() { }

  ngOnInit(): void {
  }

}
