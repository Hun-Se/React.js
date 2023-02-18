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

// 빌드 중 작용
export async function getStaticProps() {
  return {
    props: {},
  };
}

export default HomePage;
