import {
  Component,
  NgModule,
  ViewChild,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'my-app',
  template: `
  <form [formGroup]="form"
            novalidate>
          <ng-select [items]="listOfItems"
                     bindValue="id"
                     bindLabel="name"
                     [multiple]="true"
                     placeholder="Select City"
                     formControlName="example">

            <ng-template ng-header-tmp>

              <div>
                <button class="btn btn-link"
                     (click)="onSelectAll">Select All
                </button>
              </div>

            </ng-template>

          </ng-select>
  </form>
`,
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  listOfItems = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys' },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' },
  ];

  public onSelectAll() {
    const selected = this.listOfItems.map((item) => item.id);
    this.form.get('example').patchValue(selected);
  }

  public onClearAll() {
    this.form.get('example').patchValue([]);
  }

  public ngOnInit() {
    this.form = this.fb.group({
      example: '',
    });
  }
}
