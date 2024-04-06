interface BasicObject {}

interface SysType {
  type: string;
}
interface Content {
  data: BasicObject;
  content: BasicObject[];
  nodeType: string;
}

interface Sys {
  space: BasicObject;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: BasicObject;
  revision: number;
  locale: string;
}

interface ImageDetails {
  size: number;
  image: BasicObject;
}

interface File {
  url: string;
  details: ImageDetails;
  fileName: string;
  contentType: string;
}

interface FeaturedImageFields {
  title: string;
  file: File;
}

interface FeaturedImage {
  metadata: Metadata;
  sys: Sys;
  fields: FeaturedImageFields;
}

interface AuthorMetadata {
  tags: string[];
}

interface AuthorSys {
  space: BasicObject;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: BasicObject;
  revision: number;
  contentType: BasicObject;
  locale: string;
}

interface Metadata {
  tags: string[];
}

interface AvatarFields {
  title: string;
  description: string;
  file: File;
}

interface Avatar {
  metadata: Metadata;
  sys: Sys;
  fields: AvatarFields;
}

interface AuthorFields {
  internalName: string;
  name: string;
  avatar: Avatar;
}

interface Author {
  metadata: AuthorMetadata;
  sys: AuthorSys;
  fields: AuthorFields;
}

interface Fields {
  internalName: string;
  seoFields: BasicObject;
  slug: string;
  author: Author;
  publishedDate: string;
  title: string;
  shortDescription: string;
  featuredImage: FeaturedImage;
  content: Content;
  relatedBlogPosts: BasicObject[];
}

interface Metadata {
  tags: string[];
}
interface Item {
  metadata: Metadata;
  sys: BasicObject;
  fields: Fields;
}

interface Entry extends BasicObject {}

interface Asset extends BasicObject {}

interface Includes {
  Entry: Entry[];
  Asset: Asset[];
}

export interface GetEntriesType {
  sys: SysType;
  total: number;
  skip: number;
  limit: number;
  items: Item[];
  includes: Includes;
}
