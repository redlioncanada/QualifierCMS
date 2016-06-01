"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
let SingleAnswerEdit = class SingleAnswerEdit {
    ngAfterViewInit() {
        Materialize.updateTextFields();
        $('select').material_select();
    }
    ngOnChanges(changes) {
        if (changes.question.currentValue !== changes.question.previousValue && changes.question.currentValue) {
            let index = Object.keys(changes.question.currentValue)[0];
            this.titleText = index;
            this.data = changes.question.currentValue[index];
            this.questionText = this.data.text[0].question;
            this.subquestionText = this.data.text[0].sub_question;
            this.explanationTitleText = 'explanation_title' in this.data.text[0] ? this.data.text[0].explanation_title : '';
            this.explanationText = 'explanation' in this.data.text[0] ? this.data.text[0].explanation : '';
        }
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], SingleAnswerEdit.prototype, "question", void 0);
SingleAnswerEdit = __decorate([
    core_1.Component({
        selector: 'question-single-answer-edit',
        template: `
     <div class="container">
    <div class="row">
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">{{titleText}} - Single Answer Edit</a>
    </div>
  </nav>
  </div>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <textarea id="question" class="materialize-textarea">{{questionText}}</textarea>
          <label for="question">Question</label>
        </div>
        <div class="input-field col s6">
          <textarea id="subQuestion" class="materialize-textarea">{{subquestionText}}</textarea>
          <label for="subQuestion">Sub-Question</label>
        </div>
      </div>
      <div class="row" *ngIf="explanationTitleText || explanationText">
        <div class="input-field col s6" *ngIf="explanationTitleText">
          <textarea id="explain_title" type="text" class="materialize-textarea">{{explanationTitleText}}</textarea>
          <label for="explain_title">Why are you asking title</label>
        </div>
        <div class="input-field col s6" *ngIf="explanationText">
          <textarea id="explain_ans" class="materialize-textarea">{{explanationText}}</textarea>
          <label for="explain_ans">Why are you asking explanation</label>
        </div>
      </div>
      <div class="row">
            <div class="input-field col s12">
    <select>
      <option value="" disabled selected>Choose your category</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label>What question category does this question score against?</label>
  </div>
      </div>
      <a class="waves-effect waves-light btn-large" type="submit" name="action"><i class="material-icons left">save</i>commit changes</a>
      <a class="waves-effect waves-light btn-large"><i class="material-icons left">reply</i>revert changes</a>
    </form>
  </div>
  </div>
    `,
        directives: []
    }), 
    __metadata('design:paramtypes', [])
], SingleAnswerEdit);
exports.SingleAnswerEdit = SingleAnswerEdit;
