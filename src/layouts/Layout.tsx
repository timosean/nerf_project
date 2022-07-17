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

            <div className="px-[6vw] md:px-[3vw]">{children}</div>
        </div>
    );
}

export default Layout;
