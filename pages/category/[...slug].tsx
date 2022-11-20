import { useRouter } from 'next/router';
import React from 'react'

type PageProps = {
    // params: {
    //     categoriesId: string;
    // };
}

export default function Categories({ }: PageProps) {
    const router = useRouter();
    console.log(router.query);
    return (
        <React.Fragment>
        </React.Fragment>
    )
}