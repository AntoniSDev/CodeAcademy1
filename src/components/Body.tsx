import { CommentProps } from "./interfaces";

const Body = (props: CommentProps) => {
  return (
    <div>
      <p>{props.comment}</p>
    </div>
  );
};

export default Body;
