import React from "react"

const Medicine = ({list,edit,onDelete,id}) => {
    return(
        <>
            {
                Array.isArray(list) && list.map((value,index)=>(
                    <tr>
                        <td >
                            <input type="checkbox" checked={value._id === id} onClick={()=>{onDelete(value._id)}}/>
                        </td>
                        <td>
                            <button className="badge-info" onClick={()=>{edit(value._id)}}>Edit</button>
                        </td>
                        <td>{value.name}</td>
                        <td>{value.type}</td>
                        <td>{value.quantity}</td>
                        <td>{value.note}</td>

                    </tr>
                ))}
        </>
    )
};

export default Medicine

