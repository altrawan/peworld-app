import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import NextNProgress from 'nextjs-progressbar';
import { wrapper, store } from '../store/store';
import mainLayout from '../layouts/mainLayout';
import secondaryLayout from '../layouts/secondaryLayout';

const layouts = {
  mainLayout,
  secondaryLayout,
};

const noLayout = ({ children }) => {
  return <>{children}</>;
};

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const Layout = layouts[Component.layout] || noLayout;

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <>
      <ToastContainer />
      <Layout>
        <Provider store={store}>
          <NextNProgress color="#5e50a1" />
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
