import styles from "../utilities/utilities.module.css";
import Image from "next/image";

const Utility = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainContent}>
        <div className={styles.icon}>
          <Image alt="icon" width={65} height={65} src="/close-circle.svg" />
        </div>
        <div className={styles.hero}>
          <Image
            style={{ margin: "0px 280px" }}
            src="/images/consensus-mechanism, 1.png"
            width={794}
            height={418}
          />
          <div className={styles.body}>
            <div className={styles.box1}>
              <p className={styles.utility}>Utility of Blockchain</p>
              <p className={styles.utilityContent} color="#333333">
                Jumbochain is steadfast in its dedication to driving society
                towards sustainable living, guided by our deeply rooted Vision
                and Mission. We are meticulously crafting Jumbochain to address
                and solve real-world industry challenges. Several practical use
                cases have already been pinpointed, promising not just to
                revolutionize industry operations with seamless, time-efficient
                solutions but also to deliver substantial benefits directly to
                consumers.
              </p>
            </div>
            <div className={styles.box2}>
              <Image
                src="/images/coin.png"
                width={458}
                height={331.6}
                style={{ margin: "0% 30%" }}
              />
              <div className={styles.box21}>
                <div className={styles.boxHeading}>
                  <span className={styles.heading}>
                    Counterfeit Management & Downstream Supply Chain Monitoring
                  </span>
                  <span className={styles.p}>
                    <span>
                      Counterfeiting and illicit products pose significant
                      challenges across various industries, leading to serious
                      issues such as revenue and tax losses, endangerment of
                      lives, and damaging the credibility of brands.
                    </span>
                    <br></br>
                    <span>
                      {" "}
                      USD 4.5 Trillion - Total counterfeit products sold
                      globally every year.{" "}
                    </span>
                    <br></br>
                    <span>
                      Our blockchain solution combats counterfeiting with
                      secure, transparent product authentication across
                      industries. Its immutable nature ensures traceability from
                      origin to end, guaranteeing authenticity and minimizing
                      market risks. The decentralized ledger enhances trust in
                      product verification, effectively safeguarding against
                      counterfeit goods. This solution empowers end-users to
                      verify authenticity effortlessly through a simple mobile
                      camera scan.
                    </span>
                  </span>
                </div>
                <div className={styles.boxContent}>
                  <span className={styles.content2} color="#333333">
                    The benefits of the solution are as listed below:
                  </span>
                  <div className={styles.grid}>
                    <div className={styles.gridIt}>
                      <Image
                        src="/check-circle.svg"
                        width={20}
                        height={20}
                        style={{ marginRight: "10px" }}
                      />
                      <span>
                        Safeguarding the brand value with reduced tampering
                      </span>
                    </div>
                    <div className={styles.gridIt}>
                      <Image
                        src="/check-circle.svg"
                        width={20}
                        height={20}
                        style={{ marginRight: "10px" }}
                      />
                      <span>Revenue increase</span>
                    </div>
                    <div className={styles.gridIt}>
                      <Image
                        src="/check-circle.svg"
                        width={20}
                        height={20}
                        style={{ marginRight: "10px" }}
                      />
                      <span>Geo location tracking</span>
                    </div>
                    <div className={styles.gridIt}>
                      <Image
                        src="/check-circle.svg"
                        width={20}
                        height={20}
                        style={{ marginRight: "10px" }}
                      />
                      <span>Higher compliance</span>
                    </div>
                    <div className={styles.gridIt}>
                      <Image
                        src="/check-circle.svg"
                        width={20}
                        height={20}
                        style={{ marginRight: "10px" }}
                      />
                      <span>Data analytics</span>
                    </div>
                    <div className={styles.gridIt}>
                      <Image
                        src="/check-circle.svg"
                        width={20}
                        height={20}
                        style={{ marginRight: "10px" }}
                      />
                      <span>Reduction in carbon footprint</span>
                    </div>
                    <div className={styles.gridIt}>
                      <Image
                        src="/check-circle.svg"
                        width={20}
                        height={20}
                        style={{ marginRight: "10px" }}
                      />
                      <span>Easy integration with ERP</span>
                    </div>
                    <div className={styles.gridIt}>
                      <Image
                        src="/check-circle.svg"
                        width={20}
                        height={20}
                        style={{ marginRight: "10px" }}
                      />
                      <span>End to end supply chain monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.box3}>
              <span className={styles.footH}>Unified lending platform</span>
              <span className={styles.footC}>
                A blockchain-driven lending platform designed to provide users
                with a consolidated view of loan options from participating
                banks, allowing for an optimized selection based on individual
                fit. Moreover, this platform facilitates the use of
                blockchain-enabled smart contracts for all agreements between
                lenders and borrowers, significantly minimizing paperwork.
              </span>
            </div>
            <div className={styles.box4}>
              <Image
                src="/images/Rectangle.png"
                width={284}
                height={212}
                style={{ margin: "0% 38%" }}
              />
              <span className={styles.footH}>
                Innovating NFTs: Elevating Digital Ownership with Jumbo
                Blockchain
              </span>
              <span className={styles.footC}>
                {" "}
                Jumbo Blockchain is revolutionizing the blockchain realm by
                integrating non-fungible tokens (NFTs) in an unprecedented way:
                transforming patents into NFTs. This innovative strategy turns
                intellectual property into tangible, tradable assets on the
                blockchain, allowing for direct investment in patented
                technology via whole or fractional NFTs. It's a significant leap
                from traditional NFT use cases, offering a novel asset
                management and investment model that ties the digital to the
                real-world value of patents.
              </span>{" "}
              <span className={styles.footC}>
                These patent-based NFTs are central to Jumbo Blockchain's
                economic framework, influencing transaction fees and rewards.
                Their value reflects the company's financial well-being, meaning
                as Jumbo Blockchain grows, so does the value of the NFTs to
                investors. This approach not only makes patent investment
                accessible but also ensures Jumbo Blockchain's goals are aligned
                with those of its investors. By melding blockchain utility with
                the real value of patents, Jumbo Blockchain is redefining the
                monetization and management of intellectual property in the
                digital era.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utility;
