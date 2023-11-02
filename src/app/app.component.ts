import { Component } from '@angular/core';
import { GroupResult, groupBy } from '@progress/kendo-data-query';
import { storeProducts } from './store-products';

@Component({
  selector: 'my-app',
  template: `
        <div class="example-wrapper">
            <kendo-label text="Select products">
                <kendo-multiselect
                    [data]="groupedData"
                    textField="name"
                    (filterChange)="filterChange($event)"
                    [filterable]="true"
                    [autoClose]="false"
                    valueField="name">
                </kendo-multiselect>
            </kendo-label>
        </div>
    `,
})
export class AppComponent {
  public groupedData: GroupResult[] = groupBy(storeProducts, [
    { field: 'subcategory' },
  ]) as GroupResult[];

  public filterChange(filterText?: string): void {
    this.groupedData = groupBy(
      !!filterText
        ? storeProducts.filter(
            (product) =>
              product.name
                .toLocaleLowerCase()
                .includes(filterText.toLocaleLowerCase()) ||
              product.subcategory.includes(filterText.toLocaleLowerCase())
          )
        : storeProducts,
      [{ field: 'subcategory' }]
    ) as GroupResult[];
  }
}
