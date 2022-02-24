import '../styles/globals.css'
import NProgress from 'nprogress';
import "../node_modules/nprogress/nprogress.css";
import Router from 'next/router';

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
