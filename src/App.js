import {fetchUser} from "./redux/reducers"
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux"

function App() {
  let dispatch  = useDispatch();
  let state = useSelector((state) => {
    return state.data;
  })
 console.log(state);
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(fetchUser());
        }}
      >
        Click me
      </button>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">email</th>
              <th scope="col">address</th>
              <th scope="col">City Zipcode</th>
              <th scope="col">website</th>
              <th scope="col">Company Name</th>
            </tr>
          </thead>
          <tbody>
            {state.map((el) => {
              return (
                <>
                  <tr>
                    <th scope="row">{el.id}</th>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>{el.address["city"]}</td>
                    <td>{el.address["zipcode"]}</td>
                    <td>{el.website}</td>
                    <td>{el.company["name"]}</td>
                  </tr>
                  ;
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
