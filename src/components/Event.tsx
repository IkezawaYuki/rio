
const Event = ({event, dispach}) => {
  const id = event.id;
  const handleClickDeleteButton = () => {
    console.log(id);
    dispach({
      type: "DELETE_EVENT",
      id
    })
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button className='btn btn-danger' onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
  )
}

export default Event;
