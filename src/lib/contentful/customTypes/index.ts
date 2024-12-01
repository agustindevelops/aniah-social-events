export type CustomEntries<EntrySkeleton> = {
  items: { fields: EntrySkeleton }[];
};

export type CustomEntry<EntrySkeleton> = {
  fields: EntrySkeleton;
};

export type Asset = { file: { url: string } };
