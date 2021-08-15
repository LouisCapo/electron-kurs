import { Component, Input, OnInit } from '@angular/core';
import { IStorage } from 'src/app/shared/model/shared-intefaces';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  @Input() storagesList: IStorage[];

  public selectedStorage: IStorage;
  public chartsData;

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
  }

  onStorageSelected() {
    if (this.selectedStorage) {
      this.chartsData = null;
      this._apiService.getPicturesCountByAuthor(this.selectedStorage.id).subscribe(res => {
        console.log(res)
        this.chartsData = res.authors.map(item => {
          return {
            name: item.author.lastName,
            value: item.pictureCount,
          }
        });
      });
    }
  }

}
