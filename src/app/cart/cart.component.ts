import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';
import { TestService } from "../test.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

public ProductData='';

array:[]=[];

  constructor(private testService: TestService) 
  { }

  ngOnInit() {

    this.testService.on<string>().subscribe(
      data=>{
        this.ProductData=data; 
        this.array.push();
      }
    )
  }

 
   }



