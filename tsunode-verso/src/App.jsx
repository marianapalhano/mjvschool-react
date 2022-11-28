import GlobalStyle from "./styles/GlobalStyle";
import { Dashboard } from "./pages/Dashboard";
import { Register } from "./pages/Register";

function App() {
  return (
    <div>
      <GlobalStyle />

      <Dashboard />
      {/* <Register /> */}
    </div>
  )
}

export default App
