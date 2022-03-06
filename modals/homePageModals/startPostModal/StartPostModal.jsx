import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import styles from "../../../styles/modals/homePageModals/startPostModal.module.css";
import { useSelector } from "react-redux";

const StartPostModal = ({ isOpen, closeModal }) => {
  const [file, setfile] = useState("");
  const user = useSelector((state) => state.user);
  return (
    <Modal
      isOpen={isOpen}
      className={styles.startPostModal}
      onRequestClose={closeModal}
    >
      <div className={styles.startPostModal__headingContainer}>
        <p>Create a Post</p>
        <div className={styles.startPostModal__xbutton}>
          <AiOutlineClose onClick={closeModal} />
        </div>
      </div>
      <div className={styles.startPostModal__user_container}>
        <img
          src={`images/${user.profilePhoto}`}
          className={styles.startPostModal__user_container_image}
          alt="user"
        />
        <div className={styles.startPostModal__user_container_details}>
          <h4>{user.name}</h4>
        </div>
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="4"
        placeholder="What do you want to talk about?"
        maxLength={3000}
      ></textarea>
      {file ? (
        <div className={styles.startPostModal__img}>
          <Image src={file} layout="fill" alt="" />
        </div>
      ) : (
        <div className={styles.startPostModal__selectImage}>
          <label htmlFor="files" className="btn">
            Select images to share
          </label>
          <input
            id="files"
            style={{ display: "none" }}
            type="file"
            accept="image/png, image/jpeg"
            onChange={(event) =>
              setfile(URL.createObjectURL(event.target.files[0]))
            }
          />
        </div>
      )}

      <div className={styles.startPostModal__buttonsContainer}>
        <button
          className={[styles.startPostModal__button, styles.active].join(" ")}
          onClick={function () {
            setfile("");
            closeModal();
          }}
        >
          Cancel
        </button>
        <button
          onClick={function () {
            if (file) {
              setfile("");
              closeModal();
            }
          }}
          className={
            file
              ? [styles.startPostModal__button, styles.active].join(" ")
              : [styles.startPostModal__button, styles.deactive].join(" ")
          }
        >
          Done
        </button>
      </div>
    </Modal>
  );
};

export default StartPostModal;
