import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from './data.service';

declare function invokeCSharpAction(data: string): void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form = new FormGroup({
    company: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(
    private dataSerivce: DataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dataSerivce.data$.subscribe((data) => {
      this.form.setValue(data);
      this.cdr.detectChanges();
    });
  }

  onClick() {
    console.log('submitted', this.form.getRawValue());
    if (invokeCSharpAction)
      invokeCSharpAction(JSON.stringify(this.form.getRawValue()));
  }
}
