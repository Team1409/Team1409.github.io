export type BaseItem = {
  id?: number;
};

export type CRUDService<TItem extends BaseItem> = {
  getAll: () => { data: Ref<TItem[] | undefined> };
//   get: (arg: number) => Promise<TItem>;
  add: (arg: TItem) => Promise<number>;
  update: (arg: { id: number; data: TItem }) => Promise<void>;
  remove: (arg: number) => Promise<void>;
};
