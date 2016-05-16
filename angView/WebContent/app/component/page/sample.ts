import {Component} from 'angular2/core';
//import {FORM_DIRECTIVES} from 'angular2/common';
//import {DatePicker} from 'ng2-datepicker';
import {Panel} from '../widget/panel';
import {DatePickerComponent} from '../widget/datepicker';
@Component({
  selector: 'sample-page',
  template: `

    <br/>
    <panel>
      <panel-title>Sample title</panel-title>
      <panel-content>Content</panel-content>
    </panel>
    <panel>
      <panel-title>Sample title</panel-title>
      <panel-content>Content</panel-content>
    </panel>
    <br/>
    <input #dateText type='text' value={{selDate}} (change)="setInputDate($event)"/>
    <date-picker 
                [value]="value"
                [minDate]="minDate" 
                [maxDate]="maxDate"
                [disableDays]="disableDays"
                [toContainPrevMonth]="toContainPrevMonth"
                [toContainNextMonth]="toContainNextMonth"
                (selectedDate)='setDate($event)'></date-picker>
  `,
  directives: [Panel,DatePickerComponent]
})
export class SamplePage { 
    private selDate:string='MM/DD/YYYY';
    private minDate:string='01/01/2016';
    private maxDate:string='12/31/2017';
    private disableDays:Array<number>=[0,6];    //For Sunday and Saturday
    private toContainPrevMonth:boolean = false;
    private toContainNextMonth:boolean = false;
    private value:string='';
    
    setInputDate(event) {
        this.value = event.target.value;
    }
    setDate(date){
        this.selDate = date;
    }
}