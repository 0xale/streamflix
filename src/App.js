import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import { WagmiConfig, createClient,  } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



import Stream from "./components/Stream/Stream";
import Video from "./components/Video/Video";
import { goerli, polygonMumbai } from "wagmi/chains";

const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
// const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

const alchemyId = "9QMrOi1t8Ake6oca7adryiKx9HMW9Qmb";

const chains = [goerli, polygonMumbai]

const client = createClient(
  getDefaultClient({
    appName: "streamflix",
    alchemyId,
    chains,
  })
);


function App() {
  const chains =[goerli,polygonMumbai]
  return (
    <>
      <WagmiConfig client={client}>
        <ConnectKitProvider theme="midnight">
          <Suspense fallback={null}>
            <Router>
              <Header />

              <GlobalStyle />
              {/* Hi There! */}
              <ScrollToTop />
              <Routes>
                <Route exect path="/" element={<Home />} />
                <Route path="/stream" element={<Stream />} />
                <Route path="/video" element={<Video />} />
              </Routes>
            </Router>
          </Suspense>
        </ConnectKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
