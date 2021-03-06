import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppConfigService {
  public appConfig;

  constructor(private http: HttpClient) {
  }

  loadAppConfig(): object {
    return this.http.get('/assets/data/appConfig.json')
      .toPromise()
      .then(data => {
        this.appConfig = data;
      });
  }

  getConfig(): object {
    return this.appConfig;
  }
}
