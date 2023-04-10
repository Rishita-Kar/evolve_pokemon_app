import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useOwnedNFTs,
  Web3Button,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { contract } = useContract(
    "0xB8DF0088AB47714f1A094C407004aa78EeA8a83e"
  );
  const address = useAddress();

  const { data: nfts } = useOwnedNFTs(contract, address);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="http://thirdweb.com/">thirdweb</a>!
        </h1>
        <br />
        <div className={styles.connect}>
          <ConnectWallet />
        </div>
        <br />
        {/* Code to work when a proper wallet is connected  */}
        {/* {nfts?.map((nft) => (
          <div className="nft-data" key={nft.metadata.id.toString()}>
            <ThirdwebNftMedia metadata={nft.metadata} />
            {nft.metadata.name}
          </div>
        ))}
        <br />
        <Web3Button
          contractAddress={"0xB8DF0088AB47714f1A094C407004aa78EeA8a83e"}
          action={(contract) => contract.erc1155.claim(0, 1)}
        >
          Claim a Mew!
        </Web3Button>
        <br />
        <Web3Button
          contractAddress={"0xB8DF0088AB47714f1A094C407004aa78EeA8a83e"}
          action={(contract) => contract.call("evolve")}
        >
          Evolve into Mewtwo!
        </Web3Button> */}

        <div className={styles.grid}>
          <a href="https://portal.thirdweb.com/" className={styles.card}>
            <h2>Portal &rarr;</h2>
            <p>
              Guides, references and resources that will help you build with
              thirdweb.
            </p>
          </a>

          <a href="https://thirdweb.com/dashboard" className={styles.card}>
            <h2>Dashboard &rarr;</h2>
            <p>
              Deploy, configure and manage your smart contracts from the
              dashboard.
            </p>
          </a>

          <a
            href="https://portal.thirdweb.com/templates"
            className={styles.card}
          >
            <h2>Templates &rarr;</h2>
            <p>
              Discover and clone template projects showcasing thirdweb features.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
