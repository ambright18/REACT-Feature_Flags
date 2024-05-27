import "./App.css";
import FeatureFlagGlobalState from "./components/Feature_Flag/Context";
import FeatureFlags from "./components/Feature_Flag/Index";
function App() {
  return (
    <>
    <FeatureFlagGlobalState>
      <FeatureFlags />
    </FeatureFlagGlobalState>
    </>
  );
}

export default App;
