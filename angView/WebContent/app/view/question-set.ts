import {Component, Input, Output, EventEmitter, Inject} from 'angular2/core';
import {Control, FormBuilder, ControlGroup} from 'angular2/common';
import {NG_VALIDATORS,FORM_PROVIDERS, FormBuilder, Validators} from 'angular2/common';
import {QuestionSet, Question} from 'app/model/question';
import {Panel} from 'app/component/widget/panel';
import {OrderBy} from "app/pipe/orderBy";
@Component({
    selector: 'question-set',
    template: `
        
            <table class="table"> 
                <tr>
                    <th class="">Sr No</th>
                    <th class="">Question</th>
                    <th class="">Marks</th>
                    <th class="">Overall: {{ref.overallMarks}}</th>
                </tr>
                <tr *ngFor="#question of ref.list | orderBy:'serial'">
                    
                    <td class="">
                        <div class="input-group">
                        <input class="form-control"  type="text" [(ngModel)]="question.serial" pattern="-?[0-9]*(\.[0-9]+)?" />
                        </div>
                    </td>
                    <td class="">
                        <div class="input-group">
                        <input class="form-control"  type="text" [(ngModel)]="question.content" />
                        </div>
                    </td>
                    <td class="">
                        <div class="input-group">
                        <input class="form-control"  type="text" [(ngModel)]="question.marks" pattern="-?[0-9]*(\.[5])?"/>
                        </div>
                    </td>
                    
                </tr>
            </table>
    <form [ngFormModel]="form">
            <table class="table">         
                <tr >
                    <td><div class="input-group">
                        <input class="form-control" ngControl="serial"  type="text" [(ngModel)] = "newQuestion.serial" pattern="-?[0-9]*(\.[0-9]+)?" placeholder="Enter a number"/>                        
                        </div>
                    </td>
                    <td><div class="input-group">
                        <input class="form-control" ngControl="content" type="text" [(ngModel)]="newQuestion.content" />
                        </div>
                    </td>
                    <td><div class="input-group">
                        <input class="form-control" ngControl="marks" type="text" [(ngModel)]="newQuestion.marks" pattern="-?[0-9]*(\.[5])?" placeholder="Enter a number and/or half, eg 3 or 3.5"/>
                        </div>
                    </td>
                    <td>
                        <button type="submit" class="btn btn-default" (click)="addQuestion()" [disabled]="!form.valid">Add</button>
                    </td>
                </tr>
            </table>
    </form>
`,
    pipes: [OrderBy]
})

export class QuestionSetForm {
    @Input() ref: QuestionSet;
    public form : ControlGroup;
    public newQuestion: Question = new Question();
    constructor(private fb: FormBuilder) {}


    ngOnInit() {
        this.form = this.fb.group({
             'serial': new Control(this.newQuestion.serial, Validators.required),
             'marks': new Control(this.newQuestion.serial, Validators.required),
             'content': new Control(this.newQuestion.content, Validators.required)
        });
    }
    addQuestion() {
        if (this.newQuestion.serial && this.form.valid) {
            //since ngModel is used, it is auto-bound
            this.ref.list.push(this.newQuestion); 
            //If we use the ngControl way, then we must read values from the form
            /*
            var q : Question = new Question(); 
            q.serial = this.form.control.serial.value;
            q.content = this.form.control.content.value;
            q.marks = this.form.control.marks.value; 
            this.ref.list.push(q); 
            */
            //end ngControl style   
            this.newQuestion = new Question();
        } else {
        }
    }

}