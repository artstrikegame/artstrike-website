import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Proposal.module.css'
import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Team() {
    return (
        <div className={styles.container}>
            <Head>
                <title>ArtStrike</title>
                <meta name="description" content="Art Strike Game" />
                <link rel="icon" href="/artstrike-favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"/>
            </Head>

            <main className={styles.main}>

                <h1 className={styles.title}>
                    <a href="https://www.artstrikegame.com/">
                        <Image src="/artstrike-mainlogo.png" alt="ArtStrike Logo" width="1430" height="520" layout="intrinsic" objectFit="contain"></Image>
                    </a>
                </h1>

                <div className={styles.footerSocials}>
                    <div className={styles.footerItem}>
                        <a href="/proposal">
                            Project Proposal
                        </a>
                    </div>
                    <div className={styles.footerItem}>
                        <a href="/team">
                            Meet The Team
                        </a>
                    </div>
                    <div className={styles.footerItem}>
                        <a href="/fighters">
                            Fighters
                        </a>
                    </div>
                    <div className={styles.footerItem}>
                        <a href="/stages">
                            Stages
                        </a>
                    </div>
                    <div className={styles.footerItem}>
                        <a href="/faq">
                            FAQ
                        </a>
                    </div>
                </div>
                
                <div>
                    <Image src="/ArtStrikeWebsite_P2_Geno.png" alt="Geno Shu" width="300" height="300" layout="responsive" objectFit="contain"/>
                    <p className={styles.faqQuestion}> Geno Shu</p>
                    <Image src="/ArtStrikeWebsite_P2_Anh.png" alt="" width="300" height="300" layout="responsive" objectFit="contain"/>
                    <p className={styles.faqQuestion}>Anh</p>
                    <Image src="/ArtStrikeWebsite_P2_Boboknife.png" alt="Geno Shu" width="300" height="300" layout="responsive" objectFit="contain"/>
                    <p className={styles.faqQuestion}>Boboknife</p>
                    <Image src="/ArtStrikeWebsite_P1_Snoop.png" alt="Geno Shu" width="300" height="300" layout="responsive" objectFit="contain"/>
                    <p className={styles.faqQuestion}>Snoop</p>
                    <Image src="/ArtStrikeWebsite_P1_Charlene.png" alt="Geno Shu" width="300" height="300" layout="responsive" objectFit="contain"/>
                    <p className={styles.faqQuestion}>Charlene</p>
                    <Image src="/ArtStrikeWebsite_P1_Icebox.png" alt="Geno Shu" width="300" height="300" layout="responsive" objectFit="contain"/>
                    <p className={styles.faqQuestion}>IceBox</p>
                </div>

            </main>

            <footer className={styles.footer}>
                <div className={styles.footerSocials}>
                    <div className={styles.footerItem}>
                        <SocialIcon network="email" bgColor="#fff" style={{ height: 18, width: 18 }}/> <a> ArtStrikeGame@gmail.com </a> </div>
                    <div className={styles.footerItem}>
                        <SocialIcon url="https://www.instagram.com/artstrike_game" network="instagram" bgColor="#fff" style={{ height: 18, width: 18 }}/>
                        <a href="https://www.instagram.com/artstrike_game"> ArtStrike_Game </a>
                    </div>
                    <div className={styles.footerItem}>
                        <SocialIcon url="https://twitter.com/ArtStrike_Game" network="twitter" bgColor="#fff" style={{ height: 18, width: 18 }}/>
                        <a href="https://twitter.com/ArtStrike_Game"> @ArtStrike_Game </a>
                    </div>
                </div>
                <div className={styles.footerFooter}>
                    <div className={styles.footerItem}>© ArtStrike 2022</div>
                </div>

            </footer>
        </div>
    )
}
