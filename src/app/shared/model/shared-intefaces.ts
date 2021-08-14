export interface IPictures {
  creationDate: Date;
  pictureId: string,
  pictureName: string,
  storagePlace: string,
  picturesAuthor: IAuthor,
  pictureUrl: string,
}

interface IAuthor {
  id: string,
  firstName: string,
  lasName: string,
}
