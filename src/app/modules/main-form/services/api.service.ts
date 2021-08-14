import { Inject, Injectable } from '@angular/core';
import { ENV_TOKEN } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFilters, IPictures } from 'src/app/shared/model/shared-intefaces';

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
  

  getFilters(): Observable<IFilters> {
    return this._http.get<IFilters>(`${this._environments.apiUrl}/api/pictures/pictures-filters`);
  }

  getPicturesList(authorId?: string, storageId?: string): Observable<{puctures: IPictures[]}> {
    let params = new HttpParams();
    if (authorId) {
      params = params.set('author', authorId);
    }
    if (storageId) {
      params = params.set('storage', storageId);
    }
    return this._http.get<{puctures: IPictures[]}>(`${this._environments.apiUrl}/api/pictures/pictures-list`, { params });
  }

  downloadPicturesFile(fileName: string, authorId?: string, storageId?: string) {
    let params = new HttpParams().set('fileName', fileName);
    if (authorId) {
      params = params.set('author', authorId);
    }
    if (storageId) {
      params = params.set('storage', storageId);
    }
    return this._http.get(`${this._environments.apiUrl}/api/pictures/filtred-pictures-file`, { responseType: 'blob', params });
  }
}
