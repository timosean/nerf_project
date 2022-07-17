import { useRouter } from 'next/router';

function Place() {
    const router = useRouter();
    const { name } = router.query;

    return <section className="w-full h-[calc(100vh-5vw-2.5rem)]">백그라운드영역</section>;
}

export default Place;
