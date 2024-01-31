import Header from "./Header";
import Body from "./Body";
import { Dfg } from "./interfaces";

const Card = (props: Dfg) => {
  return (
    <div>
      <Header
        profileImg={props.object.profileImg}
        username={props.object.username}
      />
      <Body comment={props.object.comment} />
    </div>
  );
};

export default Card;
