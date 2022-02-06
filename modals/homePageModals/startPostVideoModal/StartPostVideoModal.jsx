import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import styles from "../../../styles/modals/homePageModals/startPostVideoModal.module.css";

const StartPostVideoModal = ({ isOpen, closeModal }) => {
  const [file, setfile] = useState("");
  return (
    <Modal isOpen={isOpen} className={styles.startPostVideoModal}>
      <div className={styles.startPostVideoModal__headingContainer}>
        <p>Select/Edit your video</p>
        <div className={styles.startPostVideoModal__xbutton}>
          <AiOutlineClose onClick={closeModal} />
        </div>
      </div>
      {file ? (
        <div className={styles.startPostVideoModal__videoContainer}>
          <video
            controls
            className={styles.startPostVideoModal__videoContainer__video}
          >
            <source src={file} type="video/mp4" />
            <source src={file} type="video/webm" />
          </video>
        </div>
      ) : (
        <div className={styles.startPostVideoModal__selectImage}>
          <label htmlFor="files" className="btn">
            Select video to share
          </label>
          <input
            id="files"
            style={{ display: "none" }}
            type="file"
            accept="video/mp4, video/webm"
            onChange={(event) =>
              setfile(URL.createObjectURL(event.target.files[0]))
            }
          />
        </div>
      )}

      <div className={styles.startPostVideoModal__buttonsContainer}>
        <button
          className={[styles.startPostVideoModal__button, styles.active].join(
            " "
          )}
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
              ? [styles.startPostVideoModal__button, styles.active].join(" ")
              : [styles.startPostVideoModal__button, styles.deactive].join(" ")
          }
        >
          Done
        </button>
      </div>
    </Modal>
  );
};

export default StartPostVideoModal;
