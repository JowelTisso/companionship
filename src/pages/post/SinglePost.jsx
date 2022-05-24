import "./SinglePost.css";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import UserPost from "../../components/userpost/UserPost";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCommentPost,
  loadComments,
  toggleModal,
} from "../../store/commentSlice";
import NewComment from "./component/NewComment";
import Spinner from "../../components/spinner/Spinner";
import Comment from "./component/Comment";
import { Modal } from "@mui/material";

const SinglePost = () => {
  const { postId } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { commentPost, comments, status, isModalOpen, selectedComment } =
    useSelector((state) => state.comment);
  const { allUsers } = useSelector((state) => state.home);

  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(toggleModal());
  };

  useEffect(() => {
    dispatch(loadCommentPost(postId));
    dispatch(loadComments(postId));
  }, []);

  if (status === "loading") {
    return <Spinner loading={true} />;
  }

  return (
    <div className="home-wrapper">
      {commentPost && <UserPost {...commentPost} user={user} />}
      <NewComment />
      {comments?.map((comment) => (
        <Comment
          {...comment}
          key={comment._id}
          user={user}
          postId={postId}
          comment={comment}
          allUsers={allUsers}
        />
      ))}
      <Modal open={isModalOpen} onClose={closeHandler}>
        <main className="modal-content flex-center">
          <NewComment edit={true} selectedComment={selectedComment} />
        </main>
      </Modal>
    </div>
  );
};

export default SinglePost;
