import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Data = { firstName: string; lastName: string; company: string };

@Injectable()
export class DataService {
  data$ = new BehaviorSubject({ firstName: '', lastName: '', company: '' });
  update(data: Data) {
    this.data$.next(data);
  }
}
