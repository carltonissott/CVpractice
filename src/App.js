import Education from "./Components/Education/Education";
import GeneralInformation from "./Components/General/GeneralInformation";
import Work from "./Components/WorkExp/Work";

function App() {
  return (
    <div id="app">
      <div id="container">
        <GeneralInformation />
        <Education/>
        <Work />
      </div>
    </div>
  );
}

export default App;
