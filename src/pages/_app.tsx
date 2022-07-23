import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../layouts/Layout';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </RecoilRoot>
    );
}

export default MyApp;
