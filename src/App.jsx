import "./App.css";
import "./style.css";
import { Aufgabe1, Aufgabe2 } from "./static/ExText";

function App() {
  return (
    <div className="App">
      <div className="App-header ">React Lektion 2 - Übungen </div>
      <div className="ExerciseContainer">
        <Aufgabe1 />
        <div className="WrapperHorizontal">
          <button onClick={() => alert("Klick!")} style={{
            height: 30,
            width: 100,
            borderBlockWidth: 1,
            borderBlockColor: "blue",
            borderBlockStyle: "dashed",
            color: "#81ab4b",
            fontWeight: 700,
            fontFamily: "Arial",
            fontSize: 20,
            backgroundColor: "red",
        }}>Klick mich</button>
          <button id="button" onClick={() => alert("Klick!")}>Klick mich</button>
        </div>
      </div>
      <div className="ExerciseContainer">
        <Aufgabe2 />
        <div className="WrapperHorizontal">
          <div id="Elternelement">
            <div className="figlio" style={{
              backgroundColor: "red"
            }}></div>
            <div className="figlio" style={{
              backgroundColor: "blue"
            }}></div>
            <div className="figlio" style={{
              backgroundColor: "green"
            }}><span>Span</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
