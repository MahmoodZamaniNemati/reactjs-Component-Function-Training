import logo from './logo.svg';
import './App.css';

function App() {
  const name = "mahmoud"
  const age = "26"
  const sex = "male"
  return (
  <div className="App">
    <Job salary={13000000} position="Wordpress Developer" company="EnetCalbe" />
    <Job salary={14000000} position="Wordpress Developer" company="KhoshStyle" />
    <Job salary={15000000} position="Wordpress Developer" company="Didnegar" />
  </div>
  )
}
const Job = (props) => {
  return(
    <div>
      <h1>{props.company}</h1>
      <h2>{props.position}</h2>
      <h2>{props.salary}</h2>
    </div>
  )
}
export default App;
