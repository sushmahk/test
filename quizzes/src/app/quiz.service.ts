import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizzes: Quiz[]  = [

    {
       question:' Which of the following is true about ng-init directive?',
       answer: [
         { option:' ng-init directive initializes an AngularJS Application data.', correct: false},
         { option:'ng-init directive is used to put values to the variables to be used in the application.', correct:false },
         { option:'none ', correct: false},
         { option:'both of d above', correct: true }
       ]
    },

    {
      question:' Which of the following directive is used to initialize an angular app?',
      answer: [
        { option:' ng-model', correct: false},
        { option:'ng-app', correct:true },
        { option:'ng-controller', correct: false},
        { option:'both of d above', correct: false}
      ]
   },
   {
    question:'  AngularJS expressions are written using?',
    answer: [
      { option:' double braces like {{ expression}}.', correct: true},
      { option:'single braces like {expression}', correct:false },
      { option:'small bracket like (expression) ', correct: false},
      { option:'both of d above', correct: false }
    ]
 },
 {
  question:' Angular initializes based upon which of the following scenario?',
  answer: [
    { option:' DOMContentLoaded event happens', correct: false},
    { option:'document.readyState is set to complete', correct:false },
    { option:'none ', correct: false},
    { option:'both of d above', correct: true }
  ]
},
{
  question:' AngularJS is a library?',
  answer: [
    { option: 'true', correct: false},
    { option:'false ', correct:true },
  ]
},
{
  question:' AngularJS is a Framework?',
  answer: [
    { option: 'true', correct: true},
    { option:'false ', correct:false },
  ]
},
{
  question:'ng-app directive defines and links an AngularJS application to HTML?',
  answer: [
    { option: 'true', correct: true},
    { option:'false ', correct:false },
  ]
},
{
  question:' AngularJS supports two-way data binding?',
  answer: [
    { option: 'true', correct: true},
    { option:'false ', correct:false },
  ]
},
{
  question:' AngularJS is an MVC based framework?',
  answer: [
    { option: 'true', correct: true},
    { option:'false ', correct:false },
  ]
},

{
  question:' In AngularJS   bootstraps itself during config phase.?',
  answer: [
    { option: 'true', correct: true},
    { option:'false ', correct:false },
  ]
}

  ]

  constructor() { }
    getQuizzes(){
       return this.quizzes;
    }
}
  
