import styles from './page.module.css'
import Card from './_components/Card'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import ComingSoon from './_components/comingsoon';


export default function Home() {
    return (
        <main className={styles.contain}>
            {/*  hero section */}
            <section className={styles.fullHeight}>
                <div className={styles.hero}>
                    <h2>Hello, I'm Otabil Amissah</h2>
                    <p>A front end developer and technical writer.</p>
                    <Link href="https://docs.google.com/document/d/1tiZiG4dryO4kZVubo2UqpyEzv3v9zzWqu2L6-iIFW0M/edit?usp=sharing" className={styles.btnCTA}>Download my CV</Link>
                </div>
                <div>
                    <FontAwesomeIcon icon={faAnglesDown} size='3x' bounce />
                </div>
            </section>

            {/* Blog section  */}
            <section >
                <div className={styles.blog}>
                    <h2 className={styles.headings}>Featured Blog Posts</h2>

                    <div className={styles.cards}>
                        {/* <div className={styles.card}>
                            <Link href="" target="_blank">How to Setup Webpack 4 Config to Bundle Static Sites. [FreeCodeCamp]<FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: '15px' }} size='sm' /></Link>
                        </div>
                        <div className={styles.card}>
                            <Link href="" target="_blank">How to Build a Comment System with Hygraph and Next.js. [Bejamas]<FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: '15px' }} size='sm' /></Link>
                        </div> */}
                        <div className={styles.card}>
                            <Link href="https://dev.to/amissah17/how-to-create-a-developer-blog-with-storyblok-and-nextjs-13ad" target="_blank">How to Build a Developer Blog with Storyblok and Nextjs. [devto]<FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: '15px' }} size='sm' /></Link>
                        </div>
                        <div className={styles.card}>
                            <Link href="https://dev.to/amissah17/ultimate-guide-to-mutations-in-javascript-2a80" target="_blank">Ultimate Guide to Mutations in Javascript. [devto]<FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: '15px' }} size='sm' /></Link>
                        </div>
                        <div className={styles.card}>
                            <Link href="https://dev.to/amissah17/how-to-build-a-link-shortening-app-with-react-and-bitly-api-4poe" target="_blank">How to Build a Link-shortening App with React and Bitly API. [devto]<FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: '15px' }} size='sm' /></Link>
                        </div>
                        <div className={styles.card}>
                            <Link href="https://dev.to/amissah17/how-to-build-a-nextjs-blog-with-hygraph-and-deploy-to-vercel-in-2023-1ahd" target="_blank">How to Build a Nextjs blog with Hygraph and Deploy to Vercel in 2023. [devto]<FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: '15px' }} size='sm' /></Link>
                        </div>
                        <div className={styles.card}>
                            <Link href="https://dev.to/amissah17/a-comprehensive-guide-to-javascript-execution-process-56d0" target="_blank">A Comprehensive Guide on How JavaScript is Executed. [devto]<FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: '15px' }} size='sm' /></Link>
                        </div>

                    </div>
                </div>
            </section>
            {/* projects */}
            <section >
                <div className={styles.project}>
                    <h2 className={styles.headings}>Projects</h2>

                    <div className={styles.cards2}>
                        <Card>
                            <div className={styles.cardHead}>
                                <div><h4>Snap Nav Docs</h4> <ComingSoon/></div>
                                
                                <div className={styles.btnGrp}>
                                    <Link href="" target="_blank" rel="noopener noreferrer" >Read <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></Link>
                                </div>
                            </div>
                            <p>This is a sample project I'm working on for my portfolio. It's a brief documentation for react navigation.</p>
                        </Card>
                        <Card>
                            <div className={styles.cardHead}>
                                <h4>Tutorial Style Guide</h4>
                                <div className={styles.btnGrp}>
                                    <Link href="https://docs.google.com/document/d/1JCdwkvNu2LvigV86khXFXsMulOvr2dieiYO0zCbcvvQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer" >Read <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link>
                                </div>
                            </div>
                            <p>This is my style guide for writing and editing articles.
                                It also includes tools I use while making content for developers.
                            </p>
                        </Card>
                        {/* <Card>
                            <div className={styles.cardHead}>
                                <h4>Docs Style Guide</h4>
                                <div className={styles.btnGrp}>
                                    <Link href="" target="_blank" rel="noopener noreferrer">Read <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium facilis esse adipisci
                                dolor, accusantium praesentium provident cumque perferendis dolores enim dolore rem dolorum
                                quae sapiente, earum eveniet. Porro, rerum nulla.</p>

                        </Card> */}
                    </div>
                </div>

            </section>

        </main>
    )
}
