import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Questionnaire} from 'app/model/question';
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ServiceGateway {
//    private url:string="http://localhost:7080/angUX"; 
    private url:string="http://localhost:8090/";
    constructor(private http: Http) { }
    fetchQuestionnaireList(): Observable<Response> {
        var qlist: Array<Questionnaire> = []
        var observable: Observable<Response> = this.http.get(this.url+"/questionnaires")
            .map(response => {
                return response.json();
            })
        return observable;
    }

    saveQuestionnaire(questionnaire): Observable<Response> {
        
        var observable: Observable<Response> = this.http.put(this.url+"/questionnaires/add",questionnaire)
            .map(response => {
                return response.json();
            })
        return observable;
    }
}