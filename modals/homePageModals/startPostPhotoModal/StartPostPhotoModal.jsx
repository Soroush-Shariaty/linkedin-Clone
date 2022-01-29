import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../../../styles/modals/homePageModals/startPostPhotoModal.module.css";
import { useState } from "react";
import Image from "next/image";

const StartPostPhotoModal = ({ isOpen, closeModal }) => {
  const [file, setfile] = useState("");
  return (
    <Modal isOpen={isOpen} className={styles.startPostPhotoModal}>
      <div className={styles.startPostPhotoModal__headingContainer}>
        <p>Edit your photo</p>
        <div className={styles.startPostPhotoModal__xbutton}>
          <AiOutlineClose onClick={closeModal} />
        </div>
      </div>
      {file ? (
        <div className={styles.startPostPhotoModal__img}>
          <Image src={file} layout="fill" alt="" />
        </div>
      ) : (
        <div className={styles.startPostPhotoModal__selectImage}>
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

      <div className={styles.startPostPhotoModal__buttonsContainer}>
        <button
          className={[styles.startPostPhotoModal__button, styles.active].join(
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
              ? [styles.startPostPhotoModal__button, styles.active].join(" ")
              : [styles.startPostPhotoModal__button, styles.deactive].join(" ")
          }
        >
          Done
        </button>
      </div>
    </Modal>
  );
};

export default StartPostPhotoModal;
