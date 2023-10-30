import { AppProps } from 'next/app';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Fonts from '@/theme/Fonts';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fonts>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </Fonts>
  );
}

export default MyApp;
