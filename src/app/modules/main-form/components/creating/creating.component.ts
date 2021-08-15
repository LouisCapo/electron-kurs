import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAuthor, IStorage } from 'src/app/shared/model/shared-intefaces';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-creating',
  templateUrl: './creating.component.html',
  styleUrls: ['./creating.component.scss']
})
export class CreatingComponent implements OnInit {

  @Input() authorsList: IAuthor[];
  @Input() storagesList: IStorage[];
  @Output() onDataUpdate = new EventEmitter();

  public selectedPictureName: string;
  public selectedAuthor: IAuthor;
  public selectedStorage: IStorage;
  public selectedDate: Date;
  public selectedPicturePhoto: string;
  public onSuccessfulCreation = false;
  public selectedAuthorName: string;
  public selectedAuthorLastName: string;
  public selectedStorageName: string;

  get isSavePictureButtonActive() {
    return this.selectedAuthor && this.selectedPictureName && this.selectedStorage && this.selectedDate && this.selectedPicturePhoto
  }

  get isSaveAuthorButtonActive() {
    return this.selectedAuthorName && this.selectedAuthorLastName;
  }

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
  }

  createNewPicture(): void {
    if (this.isSavePictureButtonActive) {
      this._apiService.createNewPicture(this.selectedPictureName, this.selectedAuthor.id, this.selectedStorage.id, this.selectedDate, this.selectedPicturePhoto).subscribe(res => {
        if (res.ok) {
          this.onSuccessfulCreation = true;
          this.onDataUpdate.emit();
        }
      })
    }
  }

  createNewAuthor(): void {
    if (this.isSaveAuthorButtonActive) {
      this._apiService.createNewAuthor(this.selectedAuthorName, this.selectedAuthorLastName).subscribe(res => {
        if (res.ok) {
          this.onSuccessfulCreation = true;
          this.onDataUpdate.emit();
        }
      })
    }
  }

  createNewStoragePlace(): void {
    if (this.selectedStorageName) {
      this._apiService.createNewStorage(this.selectedStorageName).subscribe(res => {
        if (res.ok) {
          this.onSuccessfulCreation = true;
          this.onDataUpdate.emit();
        }
      })
    }
  }

}
