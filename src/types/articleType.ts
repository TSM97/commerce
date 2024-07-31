import { Timestamp } from "firebase/firestore";

export type ArticleType = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  aTag?: string;
  imageUrl: string;
  createdAt: Timestamp;
};

export default ArticleType;
