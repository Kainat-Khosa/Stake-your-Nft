import Image from "next/image"
import { useRouter } from "next/router"
import styles from "../styles/Home.module.css"

const Home = () => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}> Custom Staking Contract</h1>
      <div className={styles.nftBoxGrid}>
        
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/stake")}
        >
          {/* Staking an NFT */}
          <Image src="/token.png" alt="token" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Stake Your NFTs</h2>
          <p className={styles.selectBoxDescription}>
            Use the custom staking contract deployed via <b>thirdweb Deploy</b>{" "}
            to stake your NFTs, and earn tokens from the <b>Token</b> contract.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home