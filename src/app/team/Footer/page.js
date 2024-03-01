import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.foot}>
      <div className={styles.inerbox}>
        <div className={styles.footB}>
          <div className={styles.heading}>
            <span className="styles.he" style={{ color: "#FFFFFF" }}>
              Fair and democratic reward distribution to prevent monopolies.
            </span>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <Image
                  src="/images/Ellipse 135.png"
                  width={43.27}
                  height={43.27}
                ></Image>
                <Image src="/linkedin.svg" width={25.71} height={25.71} />
              </div>
              <div className={styles.icon}></div>
              <div className={styles.icon}></div>
              <div className={styles.icon}></div>
              <div className={styles.icon}></div>
              <div className={styles.icon}></div>
            </div>
          </div>
          <div className={styles.footF}></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
