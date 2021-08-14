import { Inject, Injectable } from '@angular/core';
import { ENV_TOKEN } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPictures } from 'src/app/shared/model/shared-intefaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(@Inject(ENV_TOKEN) private _environments,
              private _http: HttpClient) {
  }

  getPictures(value?: string): Observable<{pictures: IPictures[]}> {
    const params = new HttpParams().set('value', value);
    if (value) {
      return this._http.get<{pictures: IPictures[]}>(`${this._environments.apiUrl}/api/pictures/pictures-options`, { params });
    }
    return this._http.get<{pictures: IPictures[]}>(`${this._environments.apiUrl}/api/pictures/pictures-options`);
  }

  getPictureById(id: string): Observable<{picture: IPictures}>{
    const params = new HttpParams().set('id', id);
    return this._http.get<{picture: IPictures}>(`${this._environments.apiUrl}/api/pictures/picture`, { params });
  }
  
}
