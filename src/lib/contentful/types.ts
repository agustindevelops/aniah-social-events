import { BLOCKS } from "@contentful/rich-text-types/dist/types/blocks";
import {
  Node,
  TopLevelBlock,
} from "@contentful/rich-text-types/dist/types/types";

interface BasicObject {}

interface SysType {
  type: string;
}
export interface Document extends Node {
  nodeType: BLOCKS.DOCUMENT;
  content: TopLevelBlock[];
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

interface Media {
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

export interface AuthorType {
  metadata: AuthorMetadata;
  sys: AuthorSys;
  fields: AuthorFields;
}

interface Fields {
  internalName: string;
  seoFields: BasicObject;
  slug: string;
  author: AuthorType;
  publishedDate: string;
  title: string;
  shortDescription: string;
  featuredImage: Media;
  featuredVideo: Media;
  content: Document;
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
