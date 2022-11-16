import { Header, BtnGoTop, SectionFour, SectionOne, SectionThree, SectionTwo } from "../components";
import Head from "next/head";

const Home = () => {
    return (
        <main>
            <Head><title>Scroll Features</title></Head>
            <Header />
            <BtnGoTop />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </main>
    )
}
export default Home;

{
    //* Do simple array of four elements since we have four sections - In Header component
    //* Use Link options from react-scroll such as activeClass to show underline when current section is active
    //* Must put property 'name' in each 'section'. The 'name' must be the same as 'to' option in order to work

    //* BtnGoTop component will show arrow button if scroll vertically a little bit to bottom
    //* The purpose is to go to the top page
}