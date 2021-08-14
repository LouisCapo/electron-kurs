import { Component, Input, OnInit } from '@angular/core';
import { IPictures } from 'src/app/shared/model/shared-intefaces';

@Component({
  selector: 'app-picture-table',
  templateUrl: './picture-table.component.html',
  styleUrls: ['./picture-table.component.scss']
})
export class PictureTableComponent implements OnInit {

  @Input() picturesList: IPictures[];

  public showDialog = false;
  public selectedPicture: IPictures;

  constructor() { }

  ngOnInit() {
  }

  openPicture(selectedPicture: IPictures): void {
    this.showDialog = true;
    this.selectedPicture = selectedPicture;
  }

}
