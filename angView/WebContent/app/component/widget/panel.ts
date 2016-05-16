import {Component} from 'angular2/core';
@Component({
  selector: 'panel',
  styles: [
    `.panel {
      width: auto;
      display: inline-block;
    #  border: 1px solid black;
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
    <div class="panel panel-primary">
      <div class="panel-heading">
        <ng-content select="panel-title"></ng-content>
      </div>
      <div class="panel-body">
        <ng-content select="panel-content"></ng-content>
      </div>
    </div>`
})
export class Panel { }