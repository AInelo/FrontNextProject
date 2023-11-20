import Head from "next/head";
import Footer from "../components/Footer";
import Herosection from "../components/Herosection";
import FirstContent from "../components/firstContent"
import Nav from "../components/Nav";
import Newsletter from "../components/Newsletter";
import Secondsection from "../components/Secondsection";

export default function Home() {
	return (
		<div className="flex flex-col">
			<Head>
				<title>Portfolio Darteen</title>
				<link rel="icon" href="/pro.ico" />
			</Head>



			<Nav className="fixed" />
			{/* <Herosection/> */}
			<Secondsection />
			<FirstContent />
			<Newsletter />
			<Footer />
		</div>
	);
}
