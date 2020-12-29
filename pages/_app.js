import { useState } from 'react';
import '../styles/global.css'


export default function App({ Component, pageProps }) {
  const [globalCount, setGlobalCount] = useState(1);
  return <Component {...pageProps} globalCount={globalCount} setGlobalCount={setGlobalCount} />
}