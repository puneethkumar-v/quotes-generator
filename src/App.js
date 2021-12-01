import axios from "axios";
import { useEffect, useState } from "react";
import Content from "./components/Content";
import Nav from "./components/Nav";

function App() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const fetchQuotes = () => {
    // RAPID API CONFIG : https://rapidapi.com/martin.svoboda/api/quotes15/

    const options = {
      method: "GET",
      url: "https://quotes15.p.rapidapi.com/quotes/random/",
      params: { language_code: "en" },
      headers: {
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then(function ({ data }) {
        setContent(data.content);
        setAuthor(data.originator.name);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="App lg:w-4/5 mx-auto px-4 min-h-screen flex justify-center align-center flex-col">
      <Nav fetchQuotes={fetchQuotes} />
      <Content content={content} author={author} />
    </div>
  );
}

export default App;
