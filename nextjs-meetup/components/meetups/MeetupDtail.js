import classes from "./MeetupDtail.module.css";

function MeetupDtail(props) {
  return (
    <>
      <section className={classes.dtail}>
        <img src={props.image} alt={props.title}></img>
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </section>
    </>
  );
}

export default MeetupDtail;
