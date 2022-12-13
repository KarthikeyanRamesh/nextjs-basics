import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Eiusmod anim consequat aute sit id excepteur deserunt. Quis ut elit quis nostrud sunt laborum sit. Fugiat sunt ea nisi magna ea ex ex qui enim duis eiusmod amet officia. Irure laboris laborum veniam proident deserunt exercitation occaecat ipsum qui ipsum nisi esse magna. Amet commodo cillum eiusmod occaecat est pariatur duis est Lorem.</p>
        <p className={styles.text}>Velit cillum do exercitation et enim reprehenderit ipsum qui. Proident commodo dolore et deserunt minim enim in eiusmod laborum dolor labore nulla est. Nisi sit tempor elit aliqua aute dolore consectetur deserunt elit do mollit aliquip. Qui nostrud proident exercitation occaecat.</p>
        <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
      </div>
    </>
  )
}
