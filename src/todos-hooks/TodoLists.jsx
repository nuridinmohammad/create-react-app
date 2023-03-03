import "./todolist.css";
import FormInput from "./components/FormInput";
import List from "./components/List";
import Footer from "./components/Footer";

const TodoLists = () => {
  return (
    <div className="container">
      <h1>Todolist App</h1>
      <FormInput />
      <List />
      <Footer />
    </div>
  );
};

export default TodoLists;
