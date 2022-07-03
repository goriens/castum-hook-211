import "./App.css";
import { UseFetch } from "./Hooks/useFetch";

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { data, loading, error } = UseFetch(url);
  return (
    <div className="App">
      {loading && <h2>Loading...</h2>}
      {error && <h2>Loading...</h2>}
      {data.length > 0 &&
        data.map((e) => (
          <div key={e.id}>
            <h3>{e.title}</h3>
          </div>
        ))}
    </div>
  );
}

export default App;
