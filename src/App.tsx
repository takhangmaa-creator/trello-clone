import { AddNewItem } from "./AddNewItem";
import "./App.css";
import { useAppState } from "./AppStateContext";
import { Column } from "./Column";
import { CustomDragLayer } from "./CustomDragLayer";
import { AppContainer, ColumnContainer } from "./style";

const App = () => {
  const { state, dispatch } = useAppState();
  return (
    <AppContainer>
      <CustomDragLayer />
      {state.lists.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} index={i}></Column>
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
      ></AddNewItem>
    </AppContainer>
  );
};

export default App;
