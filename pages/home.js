import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ToggleDarkMode } from "../components/navbarComponents/index";
import SignupForm from "../containers/homePageContainers/signupForm/SignupForm";
import LoginForm from "./../containers/homePageContainers/loginForm/LoginForm";

import styles from "../styles/homePageStyles/homePage.module.css";

const HomePage = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className={[styles.homePage, "section-padding"].join(" ")}>
      <div>
        <Image
          src={`/images/linkedin_withText.png`}
          width={100}
          height={25}
          alt="linkedin"
        />
        <ToggleDarkMode />
      </div>
      <div className={styles.homePage__container}>
        <div>
          <h1>Welcome to your professional community</h1>
          <div className={styles.homePage__container_buttons}>
            <a
              className={
                showLogin
                  ? [styles.homePage__link, styles.homePage__link_active].join(
                      " "
                    )
                  : styles.homePage__link
              }
              onClick={() => setShowLogin(true)}
            >
              Sign In
            </a>
            <a
              className={
                showLogin
                  ? styles.homePage__link
                  : [styles.homePage__link, styles.homePage__link_active].join(
                      " "
                    )
              }
              onClick={() => setShowLogin(false)}
            >
              Join Now
            </a>
          </div>
          {showLogin ? <LoginForm /> : <SignupForm />}
        </div>
        <div>
          <Image
            src={`/images/loginPagePhoto.png`}
            alt=""
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
