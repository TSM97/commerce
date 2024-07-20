import News1 from "../../assets/News1.webp";
import News2 from "../../assets/News2.webp";

type articleData = {
  Image?: string;
  Title: string;
  Description: string;
  Date: string;
};

export const articleData: articleData[] = [
  {
    Image: News1,
    Title: "lorem ipsum dolor sit amet, consectetur adip",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adip iaculis in diam nonum.",
    Date: "7/20/2024",
  },
  {
    Image: News2,
    Title: "lorem ipsum dolor sit amet, consectetur adip",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adip iaculis in diam nonum.",
    Date: "7/14/2024",
  },
];
