import Link from "next/link";

﻿import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Proposal.module.css'
import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Schedule() {
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

                <br/>
                <br/>

                <div className={styles.footerSocials}>
                    <div className={styles.footerItem}>
                        <Link href="/proposal">
                            <a>
                                Proposal
                            </a>
                        </Link>
                    </div>
                    <div className={styles.footerItem}>
                        <Link href="/proposal/schedule">
                            <a>
                                Schedule
                            </a>
                        </Link>
                    </div>
                    <div className={styles.footerItem}>
                        <Link href="/proposal/applications">
                            <a>
                                Applications
                            </a>
                        </Link>
                    </div>
                </div>
                
                <p className={styles.schedule}>
                    Timeline <br/>

                    This is mostly for animation, background artists and devs will be working closely with their mods. There will be mid way check-ins for anyone that would like to get feedback early or to move onto the next stage. All deadlines are on Saturday 11:59pm PST so that mods can review the work the next day. Review may take up to a week. <br/>
                    <br/>
                    APRIL 2022 <br/>
                    April 4 Applications are open <br/>
                    April 25 applications close <br/>
                    <br/>
                    MAY 2022 <br/>
                    May 2-6 Application Results Released <br/>
                    May 21 Character Pitches hand in (2 weeks) <br/>
                    Jun 4 Character Packs done (2 weeks) <br/>
                    <br/>
                    JUNE 2022 <br/>
                    June 18 mid way check in (For early birds who want to continue their work and get approved for the next stage) <br/>
                    July 2 Deadline Character Animation: General Animation - Poses <br/>
                    <br/>
                    JULY 2022 <br/>
                    July 16 (mid way check in) <br/>
                    July 30 Deadline Character Animation: General Animation - Roughs <br/>
                    <br/>
                    AUGUST 2022 <br/>
                    August 13 (mid way check in) <br/>
                    August 27 Deadline Character Animation: General Animation - Clean <br/>
                    <br/>
                    SEPTEMBER 2022 <br/>
                    Sept 24 Character Animation: General Animation - Cushion <br/>
                    Sept 17 mid way check in <br/>
                    Oct 1 Deadline Character Animation: Unique Animation - Poses <br/>
                    <br/>
                    OCTOBER 2022 <br/>
                    Oct 15 Mid way check in <br/>
                    Oct 29 Deadline Character Animation: Unique Animation - Roughs <br/>
                    <br/>
                    NOVEMBER 2022 <br/>
                    Nov 12 mid way check in <br/>
                    Nov 26 Deadline Character Animation: Unique Animation - Clean <br/>
                    <br/>
                    DECEMBER 2022 <br/>
                    Nov 26 - Dec 17 comp additions (If the artist wants to) <br/>
                    Dec 17 Character Animation: Unique Animation - Cushion <br/>
                    Nov 27 Start End Game Gallery Art Roughs <br/>
                    <br/>
                    JANUARY 2023 <br/>
                    Jan 13 mid way check in (if needed or wanted) <br/>
                    Jan 27 Deadline End Game Gallery Art DONE <br/>
                    <br/>
                    FEBRUARY 2023 <br/>
                    Feb 24 End Game Gallery Art Cushion<br/>
                    <br/>
                    MARCH 2023<br/>
                    Dev Wrap up<br/>
                    Release<br/>

                </p>

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
