import Post from "../post/Post";
const PostsContainer = ({ postDataList }) => {
  return (
    <div>
      {postDataList.map((item) => (
        <Post
          key={item.postId}
          description={item.description}
          likeCount={item.likeCount}
          postOwner={item.postOwner}
          postOwnerDescription={item.postOwnerDescription}
          postPhoto={item.postPhoto}
          ownerPhoto={item.ownerPhoto}
          comments={item.comments}
        />
      ))}
    </div>
  );
};

export default PostsContainer;
