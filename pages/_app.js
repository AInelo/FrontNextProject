import 'tailwindcss/tailwind.css';
import '../styles/globals.css'; // Importez vos styles globau

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp