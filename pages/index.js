import Navbar from "./../containers/navbarContainers/navbar/Navbar";
import BodyContainer from "./../containers/bodyContainer/BodyContainer";
import { Sortby } from "../components/homePageComponents/index";
import {
  Profile,
  Recent,
  StartPost,
  Post,
  AddToFeed,
} from "../containers/homePageContainers/index";
import DreamJob from "../containers/homePageContainers/dreamJob/DreamJob";
import { activeClass } from "./../utils/activeClassEnum";
import { data } from "../utils/data";
import PostsContainer from "../containers/homePageContainers/postsContainer/PostsContainer";

const HomePage = ({ postDataList, addTofeedUsers }) => {
  return (
    <div>
      <Navbar active={activeClass.home} />
      <BodyContainer>
        <div>
          <Profile />
          <Recent />
        </div>
        <div>
          <StartPost />
          <Sortby />
          <PostsContainer postDataList={postDataList} />
        </div>
        <div>
          <AddToFeed users={addTofeedUsers} />
          <DreamJob />
        </div>
      </BodyContainer>
    </div>
  );
};

export default HomePage;

export const getStaticProps = () => {
  const { posts, users } = data;
  let postDataList = [];
  posts.map((post) => {
    let postOwner = users.find((person) => person.ID === post.postOwnerID);
    let newComments = post.Comments.map((comment) => {
      let CommentOwner = users.find(
        (person) => person.ID === comment.commentOwnerID
      );
      let replies = comment.replies.map((reply) => {
        let replyOwner = users.find(
          (person) => person.ID === reply.commentOwnerID
        );
        let repliesOfReply = reply.replies.map((replyOfReply) => {
          let replyOfReplyOwner = users.find(
            (person) => person.ID === replyOfReply.commentOwnerID
          );
          return { replyOfReplyOwner, text: replyOfReply.text };
        });
        return { replyOwner, repliesOfReply, text: reply.text };
      });
      return { replies, CommentOwner, text: comment.text };
    });
    postDataList.push({
      key: post.postId,
      description: post.description,
      likeCount: post.likeCount,
      postOwner: postOwner.name,
      postOwnerDescription: postOwner.description,
      postPhoto: post.postPhoto,
      ownerPhoto: postOwner.profilePhoto,
      comments: newComments,
    });
  });
  return {
    props: {
      postDataList,
      addTofeedUsers: users.slice(3, 6),
    },
  };
};
