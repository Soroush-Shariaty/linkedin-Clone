import Link from "next/link";
import styles from "../../../styles/userPageStyles/footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <img
          className={styles.footer__img}
          src="/images/linkedin_withText.png"
          alt=""
        />
      </div>
      <div className={styles.footer__links}>
        <Link href="#">
          <a>About</a>
        </Link>
        <Link href="#">
          <a>Accessibility</a>
        </Link>
        <Link href="#">
          <a>Talent Solutions</a>
        </Link>
        <Link href="#">
          <a>Community Guidelines</a>
        </Link>
        <Link href="#">
          <a>Careers</a>
        </Link>
        <Link href="#">
          <a>Marketing Solutions</a>
        </Link>
        <Link href="#">
          <a>Privacy & Terms</a>
        </Link>
        <Link href="#">
          <a>Ad Choices</a>
        </Link>
        <Link href="#">
          <a>Advertising</a>
        </Link>
        <Link href="#">
          <a>Sales Solutions</a>
        </Link>
        <Link href="#">
          <a>Mobile</a>
        </Link>
        <Link href="#">
          <a>Small Business</a>
        </Link>
        <Link href="#">
          <a>Safety Center</a>
        </Link>
      </div>
      <p>Linkedin-Clone Corporation 2022</p>
    </div>
  );
};

export default Footer;
