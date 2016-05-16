import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {FORM_DIRECTIVES} from 'angular2/common';
import {DatePicker} from 'ng2-datepicker';


@Component({
  selector: 'fancy-button',
  template: '<button><ng-content></ng-content></button>'
})
class FancyButton { /* Extra behavior */ }

@Component({
  selector: 'panel',
  styles: [
    `.panel {
      width: auto;
      display: inline-block;
      border: 1px solid black;
    }
    .panel-title {
      border-bottom: 1px solid black;
      background-color: #eee;
    }
    .panel-content,
    .panel-title {
      padding: 5px;
    }`
  ],
  template: `
    <div class="panel">
      <div class="panel-title">
        <ng-content select="panel-title"></ng-content>
      </div>
      <div class="panel-content">
        <ng-content select="panel-content"></ng-content>
      </div>
    </div>`
})
class Panel { }

@Component({
  selector: 'app',
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
    <datepicker view-value="DD.MM.YYYY" model-value="DD.MM.YYYY" init-date="12.5.2017"></datepicker>
    <fancy-button>
      <span>I will <i>be</i> projected</span>
    </fancy-button>
  `,
  directives: [FancyButton, Panel, DatePicker, FORM_DIRECTIVES]
})
export class App { }

bootstrap(App);
