import Card from "./components/Card";
import { comments } from "./components/commentData";

function App() {
  return (
    <div>
      {comments.map((comment, index: number) => (
        <Card key={index} object={comment} />
      ))}
    </div>
  );
}

export default App;
