import { Component, OnInit } from '@angular/core';
import { TestService } from "../test.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

array : any[] = [];
  constructor( private testService: TestService) { }

  ngOnInit() {
  }
  
 send1()
 {  
   this.testService.emit<string>('You Have Selected Infinix Hot 9 Ocean Wave');
   alert('Product is added to your Cart')
  this.array.push('');

 }
 send2()
 {  
   this.testService.emit<string>('You Have Selected Redmi 8 Blue');
   alert('Product is added to your Cart')
  this.array.push('');

 }
 send3()
 {  
   this.testService.emit<string>('You Have Selected Real Me C-12 Silver');
   alert('Product is added to your Cart')
  this.array.push('');

 }
 send4()
 {  
   this.testService.emit<string>('You Have Selected Poco M-2 Pro Green');
   alert('Product is added to your Cart')
  this.array.push('');

 }
 send5()
 {  
   this.testService.emit<string>('You Have Selected Fire Boltt Black');
   alert('Product is added to your Cart')
  this.array.push('');

 }
 send6()
 {  
   this.testService.emit<string>('You Have Selected Boat Rockerzz Red/Black');
   alert('Product is added to your Cart')
  this.array.push('');

 }
 send7()
 {  
   this.testService.emit<string>('You Have Selected JBL Blue');
   alert('Product is added to your Cart')
  this.array.push('');

 }
 send8()
 {  
   this.testService.emit<string>('You Have Selected Skulllcandy Silver/Black');
   alert('Product is added to your Cart')
  this.array.push('');

 }

 
}
