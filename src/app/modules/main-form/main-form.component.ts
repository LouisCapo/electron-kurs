import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAuthor, IPictures, IStorage, TabEnum } from 'src/app/shared/model/shared-intefaces';
import { HelperService } from 'src/app/shared/service/helper.service';
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
  public authorsList: IAuthor[];
  public selectedAuthor: IAuthor;
  public storagesList: IStorage[];
  public selectedStorage: IStorage;
  public picturesList: IPictures[];

  constructor(private _router: Router, 
              private _apiService: ApiService,
              private _cdRef: ChangeDetectorRef,
              private _helperService: HelperService
              ) { }

  ngOnInit() {
    this._router.navigate(['/main']);
  }

  onPictureNameSubmit(event: {originalEvent: InputEvent, query: string}): void {
    this._apiService.getPictures(event.query).subscribe(res => {
      this.picturesSuggestions = res.pictures;
    })
  }

  onPictureSelected(event: IPictures): void {
    this._apiService.getPictureById(event.pictureId).subscribe(res => {
      this.pictureData = res.picture;
      this._cdRef.detectChanges();
    })
  }

  onTabChange(event: {originalEvent: PointerEvent, index: number}): void {
    this.authorsList = null;
    this.storagesList = null;
    this.picturesList = null;
    this.selectedAuthor = null;
    this.selectedStorage = null;
    if (event.index === TabEnum.FILTERS) {
      this._apiService.getFilters().subscribe(res => {
        this.authorsList = res.authors;
        this.storagesList = res.storagePlaces;
      })
    }
  }

  onFilterSelect(): void {
    if(!this._helperService.isNullOrUndefined(this.selectedAuthor) || !this._helperService.isNullOrUndefined(this.selectedStorage)) {
      this._apiService.getPicturesList(this.selectedAuthor?.id, this.selectedStorage?.id).subscribe(res => {
        this.picturesList = res.puctures;
      })
    }
  }

  clearFilters(): void {
    this.picturesList = null;
    this.selectedAuthor = null;
    this.selectedStorage = null;
  }

}
