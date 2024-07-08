import { Component, numberAttribute } from '@angular/core';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  clear() {
    this.mainValue = '0';
    this.prevValue = '0';
    this.operator = ' ';

  }
  equal() {
    if(this.operator == '+'){
      this.mainValue = (Number(this.prevValue)+Number(this.mainValue)).toString();
    }
    else if(this.operator == '-'){
      this.mainValue = (Number(this.prevValue)-Number(this.mainValue)).toString();
    } 
    else if(this.operator == 'x'){
      this.mainValue = (Number(this.prevValue)*Number(this.mainValue)).toString();
    }
    else if(this.operator == '/'){
      this.mainValue = (Number(this.prevValue)/Number(this.mainValue)).toString();
    }
  }
  operate(o: string) {
    this.operator = o;
    this.prevValue = Number(this.mainValue).toString();
    this.mainValue = '0';

  }
  digit(d: string) {
    this.mainValue = Number(this.mainValue + d).toString();
  }

  prevValue: string = '0'
  mainValue: string = '0'
  operator: string = ' '

}
