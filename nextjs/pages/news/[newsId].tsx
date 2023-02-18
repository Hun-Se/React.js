import { useRouter } from "next/router";

// our-domain.com/news/somthing-important

const DtailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  //send a request to the backend API
  // to fetch the news item with newsId

  return <h1>The Dtail Page</h1>;
};

export default DtailPage;
