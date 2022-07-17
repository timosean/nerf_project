import type { NextPage } from 'next';
import Head from 'next/head';
import PlaceList from '../components/PlaceList';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>NERF</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PlaceList></PlaceList>
        </div>
    );
};

export default Home;
