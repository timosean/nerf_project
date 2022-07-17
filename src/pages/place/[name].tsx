import { useRouter } from 'next/router';

function Place() {
    const router = useRouter();
    const { name } = router.query;

    return <div>Placename : {name}</div>;
}

export default Place;
