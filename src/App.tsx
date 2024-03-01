import { useFeed, useEvent } from "./hooks";
import { useAuthContext } from "./AuthContext";
import { ServerSubscriptionProvider } from "./context";
import { useEffect, useState } from "react";

import "./App.css";

const serverUrl = import.meta.env.VITE_SERVER_URL;

function App() {
  const { isLoggedIn } = useAuthContext();

  const [feedString, setFeedString] = useState("");

  return (
    <div>
      {isLoggedIn && (
        <>
          <input value={feedString} onChange={(event) => setFeedString(event.target.value)} placeholder="Feed string" />
          <hr />
          <ServerSubscriptionProvider serverUrl={serverUrl}>
            <LoggedInView feedString={feedString} />
          </ServerSubscriptionProvider>
        </>
      )}
      {!isLoggedIn && <div>Login form should be added here</div>}
    </div>
  );
}

function LoggedInView({ feedString }: { feedString: string }) {
  const [feedError, setFeedError] = useState<string | null>(null);
  useEffect(() => {
    setFeedError(null);
  }, [feedString]);
  useEvent<{ error: string }>("invalid-feed-string", (event) => setFeedError(event.error));

  const { data } = useFeed(feedString);

  return (
    <div className="wrapper">
      {feedError && <div className="feed-error">{feedError}</div>}
      {!data && <div className="feed-warning">No feed data</div>}
      <pre className="feed-info">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
