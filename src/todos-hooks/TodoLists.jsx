import "./todolist.css";
import FormInput from "./components/FormInput";
import List from "./components/List";
import Footer from "./components/Footer";
import DataProvider from "./DataProvider";

const TodoLists = () => {
  return (
    <div className="container">
      <h1>Todolist App</h1>
      <DataProvider>
        <FormInput />
        <List />
        <Footer />
      </DataProvider>
    </div>
  );
};

export default TodoLists;
