
import './App.css';
import {fbProvider} from './configs/authMethod';
import {googlePr} from './configs/authMethod';
import socialAuth from './service/auth';
import todolist from './todolist';

function App() {
  const handle = async (provider) =>{
    const res = await socialAuth(provider);
    console.log(res);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h4>Hostel Allocation</h4>
        <p>Please sign-in:</p>
      <button onClick={()=> handle(fbProvider)}>facebook</button>
      <button onClick={()=> handle(googlePr)}>Google</button>

      </header>
  

    </div>
  );
}
export default App;
