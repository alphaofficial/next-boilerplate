import Head from 'next/head'

export default function HeadFile(props){

    return(
        <Head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="description" content=""/>
            <meta name="keywords" content=""/>

            <title>{props.title || "Welcome" }</title>
        </Head>
    )
}