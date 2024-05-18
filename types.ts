import type { O } from "ts-toolbelt";

interface Request {
  id: number;
}

export type BaseItem = {
  id?: number;
};

export type CRUDService<TItem extends BaseItem, AddRequest, UpdateRequest> = {
  getAll: () => Promise<TItem[]>;
  get: (arg: Request) => Promise<TItem>;
  add: (arg: AddRequest) => Promise<number>;
  update: (arg: UpdateRequest) => Promise<void>;
  _delete: (arg: Request) => Promise<void>;
};
