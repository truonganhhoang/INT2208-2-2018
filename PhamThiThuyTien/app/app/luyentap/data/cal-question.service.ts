import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import { CalQuestion } from 'app/luyentap/cal-question';
import { CALQUESTIONS } from './cal-question-data';
@Injectable()
export class CalQuestionService {
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) { }
    getCalQuestions(): Promise<CalQuestion[]> {
    return Promise.resolve(CALQUESTIONS);
  }
}