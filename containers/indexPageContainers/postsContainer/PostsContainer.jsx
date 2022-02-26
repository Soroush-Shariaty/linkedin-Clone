import Post from "../post/Post";

const PostsContainer = ({ postDataList }) => {
  return (
    <div>
      {postDataList.map((item) => (
        <Post key={item.postId} postDataItem={item} />
      ))}
    </div>
  );
};

export default PostsContainer;
