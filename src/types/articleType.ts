import { Timestamp } from "firebase/firestore";

export type ArticleType = {
  id: string;
  el?: {
    title: string;
    shortDescription: string;
    fullDescription: { html: string; plainText: string };
    contactButtonTitle: string;
  };
  en: {
    title: string;
    shortDescription: string;
    fullDescription: { html: string; plainText: string };
    contactButtonTitle: string;
  };
  aTag?: string;
  imageUrl: string;
  createdAt: Timestamp;
};

export default ArticleType;
