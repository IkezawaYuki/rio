import React, { useContext } from "react";
import Event from "./Event";
import AppContext from "../contexts/AppContext";


const EventIndex = ({state, dispatch}) => {
  const value = useContext(AppContext);
  return (
    <>
      <div>{value}</div>
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
          { state.map((e, i) => (<Event key={i} event={e} dispatch={dispatch} />))}
        </tbody>
      </table>
    </>
  )
}

export default EventIndex;