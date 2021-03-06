import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Proposal.module.css'
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Link from "next/link";

export default function FAQ() {
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
                        <Link href="/proposal">
                            <a>
                                Project Proposal
                            </a>
                        </Link>
                    </div>
                    <div className={styles.footerItem}>
                        <Link href="/team">
                            <a>
                                Meet The Team
                            </a>
                        </Link>
                    </div>
                    <div className={styles.footerItem}>
                        <Link href="/fighters">
                            <a>
                                Fighters
                            </a>
                        </Link>
                    </div>
                    <div className={styles.footerItem}>
                        <Link href="/stages">
                            <a>
                                Stages
                            </a>
                        </Link>
                    </div>
                    <div className={styles.footerItem}>
                        <Link href="/faq">
                            <a>
                                FAQ
                            </a>
                        </Link>
                    </div>
                </div>

                <p className={styles.faqQuestion}>
                    Q: What is ArtStrike? <br/>
                    A: Art Strike is a free to play, open source 2D fighting game made by collaborating artists. Each artist contributes their original character or original artwork to create a game where art styles clash with their fists.  Inspired by fighting games like street fighter and super smash bros each character will have unique abilities, strength and weakness pitched by participating artists. Art Strike will include breath-taking stages and collectible lore and artwork. <br/> <br/>
                    Q: How do I apply? <br/>
                    A: Click the Apply button on the top right and fill out the form. <br/> <br/>
                    Q: When do applications close? <br/>
                    A: It closes April 25th, 2022 @ 11:59PM PST. You can also check the schedule for more information. <br/>
                </p>

                <div className={styles.apply}>
                    <Link href="/proposal/applications">
                        <a>
                            APPLY
                        </a>
                    </Link>
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
