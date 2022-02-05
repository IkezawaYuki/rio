import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';

import { Nav } from "./components/Nav";
import { Row } from './components/Row';
import { Banner } from './components/Banner';
import { requests } from "./requests.js";

const App = (props: Props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  useEffect(() => {
    console.log("useEffect is invoked");
  }, [name])

  return (
    <>
      <div className='container-fluid'>
        <h4>イベント作成フォーム</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="formEventTitle" className="form-label">タイトル</label>
            <input type="text" className="form-control" id="formEventTitle" />
          </div>
          <div className="mb-3">
            <label htmlFor="formEventBody" className="form-label">ボディー</label>
            <textarea className="form-control" id="formEventBody" />
          </div>
          <button className="btn btn-primary">イベントを作成する</button>
          <button className="btn btn-danger">全てのイベントを削除する</button>
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
