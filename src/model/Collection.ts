type ImageType = {
  id: string;
  url: string;
};

type NodeType = {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: ImageType;
};

export type CollectionType = {
  cursor: string;
  node: NodeType;
};
