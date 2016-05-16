import {Questionnaire} from 'app/model/question';
import {QuestionnaireForm} from 'app/view/questionnaire';
import {Inject} from 'angular2/core';
import {Http} from 'angular2/http';
import {Component} from 'angular2/core';
import {OrderBy} from "app/pipe/orderBy"
import {ServiceGateway} from "app/service/gateway";
import {Observable} from "rxjs/Observable";

@Component({
    selector: "question-paper",
    template: `
<!--
            <button class="mdl-button" *ngIf="!isNewTopic" (click)="onClick()">
                Create new questionnaire
            </button>
            <div *ngIf="isNewTopic">
                    <label class="mdl-textfield__label" for="topicText">New topic</label>
                    <input class="mdl-textfield__input" id="topicText" #newTopic type="text"/>
                <br>
                    <button class="mdl-button" (click)="addNew(newTopic)">Done</button>
                    <button class="mdl-button" (click)="cancel()">Cancel</button>
            </div>
-->
        <div class="container-fluid">
            <ul class="nav nav-tabs">
                
                <li *ngFor="#qe of questionnaires"><a href="#" (click)="showTopic(qe.id)">{{qe.topic}}</a></li>
                <li ><a href="#" (click)="showTopic(0)">Create New</a></li>
            </ul>
            <div [class.hidden]="0!=activeId">
                <panel>
                    <panel-title>
                        <label class="" for="topicText">New topic</label>
                        <input class="" id="topicText" #newTopic type="text"/>
                    </panel-title>
                    <panel-content>
                        <button class="button" (click)="addNew(newTopic)">Done</button>
                        <button class="button" (click)="cancel()">Cancel</button>
                    </panel-content>
                </panel>
            </div>
            <div *ngFor="#qe of questionnaires" [class.hidden]="qe.id!=activeId">
                <questionnaire [content]="qe"></questionnaire>
            </div>
        </div>
    `,
    pipes: [OrderBy],
    providers: [ServiceGateway],
    directives: [QuestionnaireForm]

})

export class QuestionPaper {
    public questionnaires: Questionnaire[] = [];
    public isNewTopic: boolean = false;
    public activeId: number;
    constructor( @Inject(ServiceGateway) private service: ServiceGateway) {
        let qlist: Array<Questionnaire> = [];
        var qs;
        var observable: Observable;

        observable = this.service.fetchQuestionnaireList();
        if (observable) {
            observable.subscribe(res => {
                if (this.isArray(res)) {
                    qlist = res;
                } else if (this.isArray(res.questionnaire)) {
                    qlist = res.questionnaire;
                } else {
                    qlist.push(res.questionnaire);
                }
                this.questionnaires = qlist;
            });
        } else {
            this.questionnaires.push(new Questionnaire());
            this.questionnaires[0].topic = "No questionnaire found";
            //        this.questionnaire.topic = "Personal details"; 
            //        var qSet: QuestionSet = new QuestionSet(); 
            //        qSet.list.push(new Question(2, "What is your name", 10)); 
            //        qSet.list.push(new Question(1, "What is your place of birth", 10)); 
            //        qSet.overallMarks = 20; 
            //        this.questionnaire.sections.push(qSet);            
        }
    }

    onClick() {
        this.isNewTopic = true;
    }
    showTopic(currentId: number) {
        this.activeId = currentId;
    }
    addNew(topicName) {
        if (topicName.value) {
            var q: Questionnaire = new Questionnaire();
            q.sections = [];

            q.topic = topicName.value;
            var d: Date = new Date();
            q.id = d.getDate() + d.getTime() + d.getMilliseconds();
            this.questionnaires.push(q);
            this.isNewTopic = false;
            this.activeId = -1;
            q = new Questionnaire();
            topicName.value = null;
        }
    }

    cancel() {
        this.isNewTopic = false;
        this.activeId = -1;
        q = new Questionnaire();


    }

    private isArray(what) {
        return Object.prototype.toString.call(what) === '[object Array]';
    }
}
