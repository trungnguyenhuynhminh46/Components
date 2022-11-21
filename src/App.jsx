// Components
import MyDatetimePicker from "./components/MyDatetimePicker";
import MyDateRangePicker from "./components/MyDateRangePicker";
import MyAdvancedDateRangePicker from "./components/MyAdvancedDateRangePicker";

function App() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div>
        <h1>React Date Select</h1>
        <MyDatetimePicker />
      </div>
      {/* ------------------- */}
      <div>
        <h1>React Date Range Select</h1>
        <MyDateRangePicker />
      </div>
      {/* ------------------- */}
      <div>
        <h1>Advanced React Date Range Select</h1>
        <MyAdvancedDateRangePicker />
      </div>
    </div>
  );
}

export default App;
