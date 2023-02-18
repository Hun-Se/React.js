// our-domain.com/news
import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>;
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJs Is A Great Framework
          </Link>
        </li>
        <li>Somthing </li>
      </ul>
    </>
  );
};

export default NewsPage;
