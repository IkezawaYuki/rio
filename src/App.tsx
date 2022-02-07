import { useEffect, useState, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';

import { Nav } from "./components/Nav";
import { Row } from './components/Row';
import { Banner } from './components/Banner';
import { requests } from "./requests.js";
import Event from "./components/Event";
import reducer from "./reducers";

const App = (props: Props) => {
  // const [state, setState] = useState(props);
  // const { name, price } = state;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [state, dispach] = useReducer(reducer, [])

  // useEffect(() => {
  //   console.log("useEffect is invoked");
  // }, [name])
  const addEvent = e => {
    e.preventDefault();
    console.log({title, body});
    dispach({
      type: "CREATE_EVENT",
      title,
      body
    })
  }

  const handleClickDeleteAllButton = e => {
    e.preventDefault();
    dispach({
      type: "DELETE_ALL_EVENTS"
    })
  }



  console.log({state});

  return (
    <>
      <div className='container-fluid'>
        <h4>イベント作成フォーム</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="formEventTitle" className="form-label">タイトル</label>
            <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control" id="formEventTitle" />
          </div>
          <div className="mb-3">
            <label htmlFor="formEventBody" className="form-label">ボディー</label>
            <textarea value={body} onChange={e => setBody(e.target.value)} className="form-control" id="formEventBody" />
          </div>
          <button className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
          <button className="btn btn-danger" onClick={handleClickDeleteAllButton}>全てのイベントを削除する</button>
          <button className="btn btn-primary">Submit</button>
        </form>

        <h4>イベント一覧</h4>
        <table className='table tabel-hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディー</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { state.map((e, i) => (<Event key={i} event={e} dispach={dispach} />))}
          </tbody>
        </table>
      </div>
    </>
  )
}

type Props = {
  name: string,
  price: number
}

App.defaultProps = {
  name: "サンプル",
  price: 1000
}

export default App
