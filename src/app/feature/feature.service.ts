import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class FeatureService {

  constructor(private http: HttpClient) { }

  getMessage () {
    return new Observable(observer => {
      this.http.get(`/api/hello`).subscribe(
        (data: any) => { observer.next(data.message); },
        err => { observer.error(err); }
      );
    });
  }

}
