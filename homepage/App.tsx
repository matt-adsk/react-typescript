import { Component } from "react";
import ThemeContext from "@weave-design/theme-context";
import WeaveDarkBlueTheme from "@weave-design/theme-data/build/esm/darkBlueMediumDensityTheme";
import MainScreen from "./components/screen/mainscreen";
import "./styles/index.scss";

class App extends Component<any> {
  render() {
    return (
      <ThemeContext.Provider value={WeaveDarkBlueTheme}>
        <div
          className="app"
          style={{
            margin: "0px",
            padding: "0px",
          }}
        >
          <MainScreen />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
