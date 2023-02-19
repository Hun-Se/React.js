// our-domain.com/new-meet-up
import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first MeetUp",
    image:
      "https://cdn.pixabay.com/photo/2023/02/11/13/43/building-7782841_640.jpg",
    address: "Some address 5, 12345 Some City",
    descripton: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A second MeetUp",
    image:
      "https://cdn.pixabay.com/photo/2022/11/10/20/44/switzerland-7583676_1280.jpg",
    address: "Some address 1, 12345 Some City",
    descripton: "This is a second meetup!",
  },
  {
    id: "m3",
    title: "A third MeetUp",
    image:
      "https://cdn.pixabay.com/photo/2023/02/09/16/36/bridge-7779222_640.jpg",
    address: "Some address 1, 12345 Some City",
    descripton: "This is a third meetup!",
  },
  {
    id: "m4",
    title: "A four MeetUp",
    image:
      "https://cdn.pixabay.com/photo/2022/06/20/17/17/mountain-7274247__480.jpg",
    address: "Some address 5, 12345 Some City",
    descripton: "This is a four meetup!",
  },
];

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return <MeetupList meetups={loadedMeetups} />;
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
  return {
    props: { meetup: DUMMY_MEETUPS },
    revalidate: 10,
  };
}

export default HomePage;
