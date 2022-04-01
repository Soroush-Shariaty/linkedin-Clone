import Navbar from "../containers/navbarContainers/navbar/Navbar";
import BodyContainer from "../containers/bodyContainer/BodyContainer";
import { Sortby } from "../components/indexPageComponents/index";
import {
  Profile,
  Recent,
  StartPost,
  AddToFeed,
} from "../containers/indexPageContainers/index";
import DreamJob from "../containers/indexPageContainers/dreamJob/DreamJob";
import { activeClass } from "../utils/activeClassEnum";
import { data } from "../utils/data";
import PostsContainer from "../containers/indexPageContainers/postsContainer/PostsContainer";
import { useRouter } from "next/router";
import { useEffect } from "react";

const HomePage = ({ postDataList, addTofeedUsers }) => {
  // const user = useSelector((state) => state.user);
  // const router = useRouter();
  // useEffect(() => {
  //   if ((user.email = "")) {
  //     router.push("/home");
  //   }
  // }, []);
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
          return {
            replyOfReplyOwner,
            text: replyOfReply.text,
            commentId: replyOfReply.commentId,
            time: replyOfReply.time,
          };
        });
        return {
          replyOwner,
          repliesOfReply,
          text: reply.text,
          time: reply.time,
          commentId: reply.commentId,
        };
      });
      return {
        replies,
        CommentOwner,
        text: comment.text,
        time: comment.time,
        commentId: comment.commentId,
      };
    });
    postDataList.push({
      key: post.postId,
      description: post.description,
      time: post.time,
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
