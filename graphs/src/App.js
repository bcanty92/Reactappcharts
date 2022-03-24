import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import "./App.css";
import Donut from "./Components/Donut";
import Bar  from "./Components/bar";

const data = [
  { Name: "Alex", age: 26, gender: "Male" },
  { Name: "Carly", age: 30, gender: "Female" },
  { Name: "John", age: 19, gender: "Male"},
]
  
function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Most Music listened to : </h1>
        
        <div className="section">
          
          <Donut/>
        </div>
        <table className= "center">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.Name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          )
        })}
      </table>
<div className="section"></div>
<Bar />
      </div>
    </div>
  );
}

export default App;