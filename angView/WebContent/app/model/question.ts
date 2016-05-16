import {List} from '../infra/collection';

export class Question {
    public serial: number;
    public content: string;
    public marks: number;
    constructor(s: number, text: string, m: number) {
        this.content = text;
        this.serial = s;
        this.marks = m;
    }
}

export class QuestionSet {
    public list: Question[];
    public overallMarks: number;
    constructor() {
        this.list = [];
    }
}

export class Questionnaire {
    public sections: QuestionSet[];
    public topic: string;
    public id:number;

    constructor() {
        this.sections = [];
    }
}