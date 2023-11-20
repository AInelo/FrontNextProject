import Head from "next/head";
import Footer from "../components/Footer";
import Herosection from "../components/Herosection";
import FirstContent from "../components/firstContent"
import Nav from "../components/Nav"

export default function Home() {
	return (
		<div className="flex flex-col">
			<Head>
				<title>Portfolio Darteen</title>
				<link rel="icon" href="/pro.ico" />
			</Head>


			
			<Nav/>
			<FirstContent/> 
			<Herosection/>
			<Footer/>
		</div>
	);
}
