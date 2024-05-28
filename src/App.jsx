import { useEffect, useState } from "react";

// Renamed 'bin' to 'Bin'
const Bin = ({ sendData }) => {
  const [loggedInUser, setLoggedInUser] = useState('jhon doe');

  useEffect(() => {
    // Update the loggedInUser and then send the data to the parent
    const newLoggedInUser = 'new user';
    setLoggedInUser(newLoggedInUser);
    sendData(newLoggedInUser);
  }, [sendData]);

  return (
    <div>
      <h1>Data from Bin to App</h1>
      <p>Data in Bin: {loggedInUser}</p>
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState('');

  const receivedData = (loggedInUser) => {
    setUser(loggedInUser);
  };

  return (
    <div>
      <Bin sendData={receivedData} />
      <p>Data in App: {user}</p>
    </div>
  );
};

export default App;
