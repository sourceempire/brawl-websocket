import { useFeed, useEvent } from "./hooks";
import { useAuthContext } from "./AuthContext";
import { ServerSubscriptionProvider } from "./context";
import { useEffect, useRef, useState } from "react";

import "./App.css";

const serverUrl = import.meta.env.VITE_SERVER_URL;

function App() {
  const { isLoggedIn } = useAuthContext();

  return (
    <div>
      {isLoggedIn && (
        <>
          <ServerSubscriptionProvider serverUrl={serverUrl}>
            <LoggedInView />
          </ServerSubscriptionProvider>
        </>
      )}
      {!isLoggedIn && <div>Login form should be added here</div>}
    </div>
  );
}

function LoggedInView() {
  const formRef = useRef<HTMLFormElement>(null);
  const [feedString, setFeedString] = useState("");
  const [queryParamCount, setQueryParamCount] = useState(0);
  const [feedError, setFeedError] = useState<string | null>(null);
  const [queryParams, setQueryParams] = useState<Record<string, string>>({});

  function handleFeedStringChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFeedError(null);
    setFeedString(event.target.value);
  }

  function handleQueryParamChange(event: React.FormEvent<HTMLFormElement>) {
    setFeedError(null);
    const inputs = Array.from(event.currentTarget.elements) as HTMLInputElement[];
    updateQueryParamsFromInputs(inputs);
  }

  function updateQueryParamsFromInputs(inputs: HTMLInputElement[]) {
    const queryParams: Record<string, string> = {};
    for (let i = 0; i < inputs.length / 2; i++) {
      if (inputs[i * 2].value) {
        queryParams[inputs[i * 2].value] = inputs[i * 2 + 1].value;
      }
    }

    setQueryParams(queryParams);
  }

  function handleInvalidFeed({ error }: { error: string }) {
    setFeedError(error);
  }

  function addQueryParam() {
    setQueryParamCount((count) => count + 1);
  }

  function decrementQueryParamCount() {
    setQueryParamCount((count) => {
      if (count < 0) return 0;
      return count - 1;
    });
  }

  useEffect(() => {
    const inputs = formRef.current?.elements
    if (!inputs) return;
    updateQueryParamsFromInputs(Array.from(inputs) as HTMLInputElement[]);
  }, [queryParamCount])

  useEvent<{ error: string }>("invalid-feed-string", handleInvalidFeed);

  const { data } = useFeed(feedString, { queryParams });

  return (
    <div className="wrapper">
      <input value={feedString} onChange={handleFeedStringChange} placeholder="Feed string" />

      <hr />

      <div className="query-params">
        <div className="header-and-count">
          <label>Query parameters</label>
          <button className="count-button" onClick={addQueryParam}>
            +
          </button>
          <button className="count-button" onClick={decrementQueryParamCount}>
            -
          </button>
        </div>
        <form name={`query-params`} onChange={handleQueryParamChange} ref={formRef}>
          {Array.from({ length: queryParamCount }).map((_, index) => {
            return (
              <div className="query-param">
                <input className="key" />
                <input className="value" />
              </div>
            );
          })}
        </form>
      </div>

      <hr />

      {feedError && <div className="feed-error">{feedError}</div>}
      {!data && <div className="feed-warning">No feed data</div>}
      <pre className="feed-info">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
