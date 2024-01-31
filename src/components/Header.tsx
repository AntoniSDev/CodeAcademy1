import { CommentProps } from "./interfaces";

const Header = (props: CommentProps) => {
  return (
    <div>
      <img src={props.profileImg} alt="Profile" />
      <h1>{props.username}</h1>
    </div>
  );
};

export default Header;
