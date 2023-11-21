import React from "react";

function Herosection() {
	return (
		<section id="" className="bg-white dark:bg-gray-900 scroll-mt-40">
			<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
				<div className="mr-auto place-self-center lg:col-span-7">
					<h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Salut, Je suis Dasteen Front End Developpeur</h1>
					<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Je realise les interfaces graphique web et mobile. Ecrivez moi en dessous et nous pourrons travailler ensemble</p>
					<form action="#">
						<div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
							<div className="relative w-full">
								<label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
								<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
									<svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
								</div>
								<input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border z-0 border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Entrer votre email" type="email" id="email" required="" />
							</div>
							<div>
								<button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-purple-500 border-purple-600 sm:rounded-none sm:rounded-r-lg hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Envoyez</button>
							</div>
						</div>
					</form>
				</div>

				<div className=" lg:mt-0 lg:col-span-5 lg:flex">
					<img src="https://firebasestorage.googleapis.com/v0/b/seidev.appspot.com/o/Mr%20Norman_FrontNextJs%2Fimage.png?alt=media&token=f4650cc2-da8a-4e4c-8644-50df1705e02f" alt="mock" />
				</div>
			</div>
		</section>
	);
}

export default Herosection;
