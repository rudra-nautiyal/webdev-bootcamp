import { useState } from "react";
import { PostComponent } from "./post";

function App() {
  const [posts, setPosts] = useState([]);

  const postComponent = posts.map((post) => (
    <PostComponent
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      image={post.image}
      description={post.description}
    ></PostComponent>
  ));

  function addPost() {
    setPosts([
      ...posts,
      {
        name: "rudra",
        subtitle: "250 followers",
        time: "2m ago",
        image:
          "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg",
        description:
          "Understanding react.",
      },
    ]);
  }

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>{postComponent}</div>
      </div>
    </div>
  );
}
export default App;
