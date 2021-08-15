export interface IPictures {
  creationDate: Date;
  pictureId: string,
  pictureName: string,
  storagePlace: string,
  picturesAuthor: IAuthor,
  pictureUrl: string,
}

export interface IAuthor {
  id: string,
  firstName: string,
  lasName: string,
}

export interface IFilters {
  authors: IAuthor[],
  storagePlaces: IStorage[],
}

export interface IStorage {
  name: string,
  id: string,
}

export enum TabEnum {
  SEARCH = 0,
  FILTERS = 1,
  CREATING = 2,
}
