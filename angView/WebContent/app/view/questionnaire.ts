import {Component, Input, Inject} from 'angular2/core';
import {Questionnaire, QuestionSet} from  'app/model/question';
import {Panel} from 'app/component/widget/panel';
import {OrderBy} from "app/pipe/orderBy";
import {QuestionSetForm} from 'app/view/question-set';
import {ServiceGateway} from "app/service/gateway";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'questionnaire',
    template: `
    <form action="#">
    <panel>
        <panel-title>
            <div class="row">
                <div class="btn-group col-md-1">
                  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
                  </button>
                   
                  <ul class="dropdown-menu">
                    <li><a href="#" (click)="onClick()">Add new question set</a></li>
                    <li><a href="#" (click)="saveChanges()">Save this questionnaire</a></li>
                  </ul>                   
                </div>
                <div class="col-md-11"><h4>{{content.topic}}</h4></div>

            </div>
        </panel-title>        
        <panel-content *ngFor="#section of content.sections">
            <question-set [ref]="section"></question-set>            
        </panel-content>
        <!--
        <panel-content>
            <br>
                <button class="mdl-button" (click)="onClick()">Add new question set</button>
                <button class="mdl-button" (click)="saveChanges()">Save this questionnaire</button>
            <br>
        </panel-content>
        -->
    </panel>
    </form>

    `,
    directives: [Panel, QuestionSetForm]

})
export class QuestionnaireForm {
    @Input() content: Questionnaire;
    public isReadOnly: boolean;
    public isNew: boolean;

    onClick() {
        this.content.sections.push(new QuestionSet());
    }
    saveChanges( @Inject(ServiceGateway) private service: ServiceGateway) {
        console.log(this.content);
    }
}



