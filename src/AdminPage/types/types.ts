import { Timestamp } from "firebase/firestore";

export type lastDocType = {
  id: string;
  date: Timestamp;
} | null;
