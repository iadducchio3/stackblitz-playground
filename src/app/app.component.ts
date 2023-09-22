import { Component } from '@angular/core';
import { DropDownFilterSettings } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'my-app',
  template: `
    <div class="example-config">
        <input id="cs" type="checkbox" kendoCheckBox [(ngModel)]="filterSettings.caseSensitive">
        <label for="cs">Case-sensitive</label>
        <hr />
        <div>
            <input id="stw" type="radio" kendoRadioButton name="op" (click)="changeFilterOperator('startsWith')" checked>
            <label for="stw">StartsWith Operator</label>
        </div>
        <div>
            <input id="cnt" type="radio" kendoRadioButton name="op"(click)="changeFilterOperator('contains')">
            <label for="cnt">Contains Operator</label>
        </div>
    </div>

    <kendo-label text="T-shirt size:">
        <kendo-multiselect
            [data]="data"
            [kendoDropDownFilter]="filterSettings"
            textField="text"
            valueField="value"
        >
        </kendo-multiselect>
    </kendo-label>
    `,
  styles: [
    `
            input[type="checkbox"],
            input[type="radio"] {
                margin-right: 10px;
            }
    `,
  ],
})
export class AppComponent {
  public data: Array<{ text: string; value: number }> = [
    { text: 'Small', value: 1 },
    { text: 'Medium', value: 2 },
    { text: 'Large', value: 3 },
    { text: 'Smedium', value: 3 },
  ];

  public filterSettings: DropDownFilterSettings = {
    caseSensitive: false,
    operator: 'startsWith',
  };

  public changeFilterOperator(operator: 'startsWith' | 'contains'): void {
    this.filterSettings.operator = operator;
  }
}
