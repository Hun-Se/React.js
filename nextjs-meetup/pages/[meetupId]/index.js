import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

import MeetupDtail from "../../components/meetups/MeetupDtail";

function MeetupDtails(props) {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description}></meta>
      </Head>
      <MeetupDtail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      ></MeetupDtail>
    </>
  );
}

// 동적페이지를 위한
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://epahs57:jj95929592@meetup.tfm8rqb.mongodb.net/meetup?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetup");

  const meetup = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: false,
    paths: meetup.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

// 빌드사이드에서 돌아가는 함수이기 때문에 내부의 함수는 터미널을 통해 확인 할 수 있다.
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://epahs57:jj95929592@meetup.tfm8rqb.mongodb.net/meetup?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetup");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDtails;
