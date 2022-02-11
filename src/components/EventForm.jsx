import React, {useState, useContext} from "react";
import { CREATE_EVENT, DELETE_ALL_EVENTS } from "../actions";
import AppContext from "../contexts/AppContext";


const EventForm = () => {
  const {state, dispatch} = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const addEvent = e => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    })
    setTitle("");
    setBody("");
  }

  const handleClickDeleteAllButton = e => {
    e.preventDefault();
    if (!confirm("本当に全てのイベントを削除してもいいですか")){
      return;
    }
    dispatch({
      type: DELETE_ALL_EVENTS
    })
  }

  const unCreatable = title === "" || body === "";

  return (
    <>
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
        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={handleClickDeleteAllButton} disabled={state.events.length === 0}>全てのイベントを削除する</button>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default EventForm;