import React, { Fragment, useState, useEffect, useCallback } from "react";
import "./App.css";
import InputData from "./components/Input/InputData";
import OutputData from "./components/output/OutputData";
import Loading from "./components/UI/Loading";
import useHTTP from "./hooks/use-http";

function App() {
  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState("");

  const [gotData, setData] = useState([]);
  const [isDataAdding, setIsDataAdding] = useState(false);
  const transformTasks = (taskObject) => {
    const allData = [];
    for (const key in taskObject) {
      allData.push(taskObject[key]);
    }
    setData(allData.reverse());
  };

  const config = {
    url: "https://dummydatabasereact-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
    method: "GET",
  };

  const { loading, error, sandRequest } = useHTTP(config, transformTasks);

  /*
  // const connectDataBase = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(
  //       "https://dummydatabasereact-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
  //       { method: "GET" }
  //     );
  //     if (!response.ok) {
  //       throw new Error("Some connection error!");
  //     }

  //     const data = await response.json();
  //     const allData = [];
  //     for (const key in data) {
  //       allData.push(data[key]);
  //     }
  //     setData(allData.reverse());
  //   } catch (error) {
  //     setError(error);
  //   }
  // };
*/

  console.log("rendered");

  useEffect(() => {
    sandRequest();
    setIsDataAdding(false);
  }, [isDataAdding]);

  const setIsDataAddingHandler = useCallback(() => {
    setIsDataAdding(true);
  }, []);

  return (
    <Fragment>
      <InputData onClickEvent={setIsDataAddingHandler} />
      {!loading && gotData.length !== 0 ? (
        <OutputData
          showData={gotData.length}
          data={gotData}
          errorMessage={error}
        />
      ) : (
        <Loading />
      )}
    </Fragment>
  );
}

export default App;
