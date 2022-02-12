import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import OperationLog from "./OperationLog";


const OperationLogs = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <h4>操作ログ一覧</h4>
      <table className='table tabel-hover'>
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          { state.operationLogs.map((ope, i) => (<OperationLog key={i} operationLog={ope} />))}
        </tbody>
      </table>
    </>
  );
}

export default OperationLogs;