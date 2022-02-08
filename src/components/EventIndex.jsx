import React from "react";
import Event from "./Event";

const EventIndex = ({state, dispatch}) => {
  console.log({state});
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
          { state.map((e, i) => (<Event key={i} event={e} dispatch={dispatch} />))}
        </tbody>
      </table>
    </>
  )
}

export default EventIndex;