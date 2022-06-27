/* eslint-disable no-unused-expressions */
/* eslint-disable global-require */
import 'styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import NextNProgress from 'nextjs-progressbar';
import { wrapper, store, persistor } from 'store/store';
import mainLayout from 'layouts/mainLayout';

const layouts = {
  mainLayout,
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

  useEffect(() => {
    if (typeof document !== 'undefined') {
      require('bootstrap/dist/js/bootstrap');
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <Layout>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NextNProgress color="#5e50a1" />
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </Layout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
