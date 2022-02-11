import React, { useContext } from "react";
import Event from "./Event";
import AppContext from "../contexts/AppContext";


const EventIndex = () => {
  const {state} = useContext(AppContext);
  return (
    <>
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
          { state.events.map((e, i) => (<Event key={i} event={e} />))}
        </tbody>
      </table>
    </>
  )
}

export default EventIndex;