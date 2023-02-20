import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <metha
          name="description"
          content="Browse a huge list of highly active React meetups!"
        ></metha>
      </Head>
      <MeetupList meetups={props.meetup} />;
    </>
  );
};

// 데이터를 요청할때마다 데이터를패치한다.
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// 빌드 중 작용 데이터가 자주 바뀌지 않을때 유용하다.
// getStaticPros는 revalidate에 설정한 시간이 지날때마다 페이지라를 만든다.
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://epahs57:jj95929592@meetup.tfm8rqb.mongodb.net/meetup?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetup");

  const meetup = await meetupsCollection.find().toArray();

  return {
    props: {
      meetup: meetup.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
