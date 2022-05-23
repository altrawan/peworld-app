import '../styles/globals.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';
import secondaryLayout from '../layouts/secondaryLayout';
import mainLayout from '../layouts/mainLayout';

const layouts = {
  mainLayout,
  secondaryLayout,
};

const noLayout = ({ children }) => {
  return <>{children}</>;
};

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || noLayout;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
