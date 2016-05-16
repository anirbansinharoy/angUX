import {Component} from 'angular2/core';

@Component({
    selector: '2ColLayout',
    template: `
        <table>
            <tr><td><ng-content select='left'/></td><td><ng-content select='right'/></td></tr>
        </table>
    `
})
export class _2ColumnLayout {
}

@Component({
    selector: '3ColLayout',
    template: `
        <table>
            <tr><td><ng-content select='left'/></td><td><ng-content select='center'/></td><td><ng-content select='right'/></td></tr>
        </table>
    `
})
export class _3ColumnLayout {
}

@Component({
    selector: '2RowLayout',
    template: `
        <table>
            <tr><td><ng-content select='top'/></td></tr>
            <tr><td><ng-content select='middle'/></td></tr>
        </table>
    `
})
export class _2RowLayout {
}