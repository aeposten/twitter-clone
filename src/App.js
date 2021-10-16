import { React, useState } from "react";
import Tweet from "./components/Tweet";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
    //State
  const [name, setName] = useState("Amy");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  let tweet;
  return (
    <div>
      <h1>It's a twitter clone!</h1>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList
        name={name}
        setName={setName}
        tweet={tweet}
        tweets={tweets}
        setTweets={setTweets}
      />
    </div>
  );
}

export default App;
