import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Toaster } from "react-hot-toast";

import "./firebase";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter basename="/InnerHarmony">
      <Provider store={store}>
        <App />
        <Toaster
          position="bottom-right"
          reverseOrder={true}
          toastOptions={{
            success: {
              style: {
                background: "rgba(84, 190, 150, 0.5)",
              },
            },
            error: {
              style: {
                background: "rgba(138, 138, 137, 0.5)",
              },
            },
          }}
        />
        <GlobalStyles />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
);
