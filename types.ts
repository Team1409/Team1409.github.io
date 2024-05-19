interface Request {
  id: number;
}

export type BaseItem = {
  id?: number;
};

export type CRUDService<
  TItem extends BaseItem,
  AddRequest = unknown,
  UpdateRequest = unknown
> = {
  getAll: () => Promise<TItem[]>;
  get: (arg: Request) => Promise<TItem>;
  add: (arg: AddRequest) => Promise<number>;
  update: (arg: UpdateRequest) => Promise<void>;
  remove: (arg: Request) => Promise<void>;
};
