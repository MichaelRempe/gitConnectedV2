import React from "react";
import { Link } from "react-router-dom";

function PostedTable(props){
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            { props.columns.map(column => (
              <th key={column.id}>{column.label}</th>
            ))}
          </tr>       
        </thead>
        <tbody>
          { props.data.map(row => (
            <tr key={row.id}>
              <td>
                <Link to={`/profile/emp/${row.id}`}>
                  {row.name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default PostedTable;