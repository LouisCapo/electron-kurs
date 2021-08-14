import { Component, Input, OnInit } from '@angular/core';
import { IPictures } from 'src/app/shared/model/shared-intefaces';

@Component({
  selector: 'app-picture-info',
  templateUrl: './picture-info.component.html',
  styleUrls: ['./picture-info.component.scss']
})
export class PictureInfoComponent implements OnInit {

  @Input() pictureData: IPictures;

  constructor() { }

  ngOnInit() {
  }

}
