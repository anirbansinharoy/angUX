import {bootstrap} from "angular2/platform/browser";
//import {SamplePage} from "./component/page/sample";
//import {App} from "./app";
import {QuestionPaper} from 'app/view/questionpaper';
import {HTTP_BINDINGS,HTTP_PROVIDERS} from 'angular2/http';


bootstrap(QuestionPaper,[HTTP_BINDINGS],[HTTP_PROVIDERS]).catch(console.error);
//bootstrap(SamplePage);
//bootstrap(App);