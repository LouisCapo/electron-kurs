import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPictures } from 'src/app/shared/model/shared-intefaces';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  public selectedPicture;
  public picturesSuggestions: IPictures[];

  public pictureData: IPictures;

  constructor(private _router: Router, 
              private _apiService: ApiService,
              private _cdRef: ChangeDetectorRef,
              ) { }

  ngOnInit() {
    this._router.navigate(['/main']);
  }

  onPictureNameSubmit(event: {originalEvent: InputEvent, query: string}): void {
    this._apiService.getPictures(event.query).subscribe(res => {
      this.picturesSuggestions = res.pictures;
    })
  }

  onPictureSelected(event: IPictures) {
    this._apiService.getPictureById(event.pictureId).subscribe(res => {
      this.pictureData = res.picture;
      this._cdRef.detectChanges();
    })
  }

}
