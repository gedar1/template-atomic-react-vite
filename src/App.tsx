import "./App.css";

import PageOne from "./pages/PageOne";
import { PageOneProvider } from '@context/';

function App() {
  return(
  <PageOneProvider>
    <PageOne title="Page One" />;
  </PageOneProvider>
  )
}

export default App;
