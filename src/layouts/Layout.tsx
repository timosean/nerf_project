import Head from 'next/head';
import Header from '../components/Header';
import PlaceList from '../components/PlaceList';

type AppLayoutProps = {
    children: React.ReactNode;
};

function Layout({ children }: AppLayoutProps) {
    return (
        <div>
            <Head>
                <title>NERF</title>
            </Head>
            <Header />
            <PlaceList></PlaceList>
            <div>{children}</div>
        </div>
    );
}

export default Layout;
