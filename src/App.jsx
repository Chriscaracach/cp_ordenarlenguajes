import { DndProvider } from "react-dnd";
import "rsuite/dist/rsuite.min.css";
import "./App.css";
import DragDropContainer from "./components/DragDropContainer";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Grid, Stack } from "rsuite";

function App() {
  return (
    <Grid fluid>
      <DndProvider backend={HTML5Backend}>
        <Stack direction="column" alignItems="stretch">
          <Stack.Item alignSelf="center">
            <h1>Ordená los lenguajes de más antiguo a más nuevo</h1>
          </Stack.Item>
          <DragDropContainer />
        </Stack>
      </DndProvider>
    </Grid>
  );
}

export default App;
