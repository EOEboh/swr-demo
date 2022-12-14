import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import axios from "axios";
import useSWR from 'swr';


export default function Home() {
  const address = `https://api.github.com/users/EOEboh`;

  const fetcher = async (url) => await axios.get(url)
  const { data, error } = useSWR(address, fetcher);

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;
  console.log('success message', data);
  console.log('error message', error);

  
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>Profile Picture:</div>
        <aside style={{ margin: '0.3rem', padding: '1rem'}}>
           
          <img 
            src={`${data?.data?.avatar_url}`}
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </aside>
        <article>
          <div> <b> My GitHub Bio:</b> {data?.data?.bio}</div>
          <div><b>Number of followers:</b> {data?.data?.followers}</div>
          <div><b>Number of public repos:</b> {data?.data?.public_repos}</div>
          <div><b>twitter username:</b> {data?.data?.twitter_username}</div>
          <div> <b>location:</b> {data?.data?.location}</div>
        </article>
      </main>
      
    </div>
  )
}
