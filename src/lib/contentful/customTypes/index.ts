export type CustomEntries<EntrySkeleton> = {
  items: { fields: EntrySkeleton }[];
};

export type CustomEntry<EntrySkeleton> = {
  fields: EntrySkeleton;
};

export type Asset = {
  fields: {
    title: string;
    description: string;
    file: { url: string };
  };
};
