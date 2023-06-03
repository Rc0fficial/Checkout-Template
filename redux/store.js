import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'; // Import your root reducer

const store = createStore(rootReducer);

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
