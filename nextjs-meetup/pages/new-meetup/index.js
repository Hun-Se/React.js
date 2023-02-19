// our-domain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPaged = () => {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

// 동적페이지를 위한
export async function getStaticPath() {
  return {
    fallback: false,
    path: [
      {
        params: {
          meetupId: "m1",
        },
      },
    ],
  };
}

// 빌드사이드에서 돌아가는 함수이기 때문에 내부의 함수는 터미널을 통해 확인 할 수 있다.
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
      },
    },
  };
}

export default NewMeetupPaged;
