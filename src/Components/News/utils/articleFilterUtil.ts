import { Dispatch, SetStateAction } from "react";
import filterType from "../../../types/filterType";

export const articleFilterUtil = (
  articleFilter: filterType,
  setArticleFilter: Dispatch<SetStateAction<filterType>>,
  filter: "Article" | "Experience"
) => {
  const aftermathChecker = !articleFilter.includes(filter)
    ? [...articleFilter, filter]
    : articleFilter.filter((art) => !art.includes(filter));

  if (aftermathChecker.length == 0) return;

  if (!articleFilter.includes(filter)) {
    setArticleFilter([...articleFilter, filter]);
  } else {
    setArticleFilter(articleFilter.filter((art) => !art.includes(filter)));
  }
};
