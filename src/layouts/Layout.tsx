import Head from 'next/head';
import Header from '../components/Header';

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

            <div>{children}</div>
        </div>
    );
}

export default Layout;
