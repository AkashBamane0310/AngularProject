import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

url="http://localhost:4200/login"
  constructor(private activatedroute:ActivatedRoute ,private router: Router) { }

  ngOnInit(): void {
  }

register(){
  alert("You have successfully registered with our website")
}

}


