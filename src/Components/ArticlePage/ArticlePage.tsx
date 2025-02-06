import { useParams } from 'react-router-dom';

import ArticleType from '../../types/articleType';
import { useEffect } from 'react';
import { useArticlesStore } from '../../stores/useArticlesStore';
import useLocale from '../../hooks/useLocale';

export default function ArticlePage() {
  const { articles } = useArticlesStore();
  const { id } = useParams<{ id: string }>(); // Extracting `id` from URL params
  const { dynamicLocale } = useLocale();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  //find specific article based on the id tha passed to url
  const article: ArticleType | null =
    articles.find((article) => article?.id === id) ?? null;

  if (!article) return;

  // Manually converting Firestore Timestamp to JavaScript Date\
  const timestamp = article.createdAt;
  const date = new Date(
    timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
  );

  // Format the date
  const formattedDateTime = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);

  //keep track of the locale
  const locale = dynamicLocale(article);

  return (
    <section className='container mx-auto pt-[13vh] min-h-screen'>
      <article>
        <div className='flex flex-col items-start w-full pt-[2dvw] pb-[2dvw]'>
          <h1 className='min-w-[50%] lg:max-w-[80%] text-3xl lg:text-6xl border-2 border-t-0 border-l-0 border-r-0 border-b-black'>
            {article?.[locale]?.title}
          </h1>
          <h5 className='text-xl'>{formattedDateTime}</h5>
        </div>
      </article>
      <img
        src={article?.imageUrl}
        alt={`${article?.[locale]?.title} image`}
        className='object-cover xl:max-w-[70dvw] max-w-full max-h-[70vh] pb-[2dvw]'
      />
      <article className='lg:max-w-[80%] pb-[30vh]'>
        {article?.[locale]?.fullDescription
          ?.split(/\r?\n/)
          ?.map((paragraph, key) => {
            if (paragraph === '') {
              return <br />;
            }
            const formattedParagraph = paragraph
              .replace(/\[b\](.*?)\[\/b\]/g, '<strong>$1</strong>') // Bold to strong
              .replace(/\[i\](.*?)\[\/i\]/g, '<em>$1</em>') // Italic to em
              .replace(/\[u\](.*?)\[\/u\]/g, '<u>$1</u>'); // Underline to u

            return (
              <p
                className='first-letter:uppercase text-[1.3rem]'
                dangerouslySetInnerHTML={{ __html: formattedParagraph }}
                key={key}
              />
            );
          })}
      </article>
    </section>
  );
}
