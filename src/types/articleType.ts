import { Timestamp } from "firebase/firestore";

export type ArticleType = {
  id: string;
  el?: {
    title: string;
    shortDescription: string;
    fullDescription: { html: string; plainText: string };
  };
  en: {
    title: string;
    shortDescription: string;
    fullDescription: { html: string; plainText: string };
  };
  aTag?: string;
  imageUrl: string;
  createdAt: Timestamp;
};

export default ArticleType;
