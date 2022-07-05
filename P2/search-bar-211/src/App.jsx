import { useEffect, useState } from "react";
import "./App.css";
import { SearchBar } from "./Components/SearchBar";
import countries from "./Utils/countries";

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query === "") {
      setSuggestions([]);
    } else {
      let newListOfSuggestions = countries
        .filter((item) =>
          item.country.toLowerCase().indexOf(query) !== -1 ? true : false
        )
        .map((item) => item.country);
      setSuggestions(newListOfSuggestions);
    }
    setTimeout(() => setLoading(false), 500);
  }, [query]);

  return (
    <div className="App">
      <h1>Search bar</h1>
      <SearchBar
        loading={loading}
        setLoading={setLoading}
        suggestions={suggestions}
        query={query}
        onChange={(val) => setQuery(val)}
      />
    </div>
  );
}

export default App;
