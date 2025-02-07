import "./App.css";
import FormComponent from "./Components/FormComponent/FormComponent";
import TableComponent from "./Components/TableComponent/TableComponent";
import Header from "./Components/Header/header";

function App() {
  return (
    <div className="main-container">
      <Header />
      <FormComponent></FormComponent>
      <TableComponent></TableComponent>
    </div>
  );
}

export default App;
