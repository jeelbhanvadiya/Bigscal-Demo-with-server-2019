import React,{useState,useEffect} from "react"
import Medicine from "./components/Table";
import {MedicineModal,DeleteModal} from "./Modal/index"
import 'bootstrap/dist/css/bootstrap.min.css';
import {create,getUser,getOne,updateDetails,DeleteDetails} from "./actions/index"

const App = () => {
    const [show, setShow] = useState(false);
    const [isUpdate, setUpdate] = useState(false);
    const [isDelete, setDelete] = useState(false);
    const [id, setId] = useState("");
    const [data, setData] = useState({name:"",type:"",quantity:0,note:""});
    const [list, setList] = useState([]);
    const handleClose = () => {
        setShow(false);
        setDelete(false);
        setUpdate(false);
        setId("")
    };
    const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    };
    const setTable =async () =>{
        const res = await getUser();
        if(res && res.res && res.res.data){
            setList(res.res.data)
        }
    }
    useEffect(async ()=>{
        await setTable()
    },[]);

    const submit = async() => {
        const res =  await create(data);
        if(res && res.res && res.res.data){
            alert("sucessfullty")
        }
        setShow(false);
        setData({name:"",type:"",quantity:0,note:""})
        setTable()
    };

    const edit = async(id) => {
        const res = await getOne(id);
        if(res && res.res && res.res.data){
            setData(res.res.data[0]);
            setUpdate(true);
            setShow(true)
        }
    };

    const onDelete = async() => {
        const res = await DeleteDetails(id);
        if(res && res.res && res.res.data){
            setUpdate(false);
            setShow(false);
            setId("");
            setDelete(false)
        }
        setTable()
    };

    const update = async() => {
        const res = await updateDetails(data);
        if(res && res.res && res.res.data){
        alert("updated");
            setUpdate(false);
            setShow(false);
            setData({name:"",type:"",quantity:0,note:""})
        }
        setTable()
    };
    const openModal = async(index) => {
        setId(index);
        setDelete(true)
    };

    return (
        <div className="container">
            <div className="row" style={{marginTop:"62px"}}>
                <div className="col">
                    <h2>Medicine</h2>
                </div>
                <div className="col">
                    <button onClick={()=>{setShow(true)}} className="btn btn-success" >Add</button>
                </div>
            </div>
            <MedicineModal data={data} show={show} handleClose={handleClose} handleChange={handleChange} submit={submit} isUpdate={isUpdate} update={update}/>
            <DeleteModal  show={isDelete} handleClose={handleClose}  submit={onDelete} />
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">Delete</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Note</th>
                </tr>
                </thead>
                <tbody>
                <Medicine list={list} edit={edit} onDelete={openModal} id={id}/>
                </tbody>
            </table>
        </div>
    )
};


export default App












































// import React from "react"
// import Input from "reactstrap/es/Input";
// import {getData,postData} from "../src/action/app"
//
// class App extends React.Component {
//     state = {
//         list: [],
//         index: [],
//         data: {}
//     };
//
//     getList = async ()=>{
//         const res = await getData()
//         if(res && res.data){
//             this.setState({list:res.data})
//         }
//     };
//
//     componentDidMount() {
//             this.getList()
//     }
//
//     onChange = (e) => {
//         this.setState({
//             data: {...this.state.data, [e.target.name]: e.target.value}
//         })
//     };
//
//     submit = async () => {
//         const {data} = this.state;
//         const res = await postData(data);
//         if(res && res.data){
//             this.getList();
//             this.setState({data:{name:"",email:""}})
//         }
//     };
//
//     render() {
//         return (
//
//             <div className="container" align="center" style={{marginTop: "100px"}}>
//                 <h3>Regitartion Form</h3>
//                 <div className="row">
//                     <div className="col-4">
//                         <Input type="text" name="name" value={this.state.data.name} onChange={this.onChange}/>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-4">
//                         email:<Input type="text" name="email" onChange={this.onChange} value={this.state.data.email}/>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-4">
//                         <button onClick={this.submit}>submit</button>
//                     </div>
//                 </div>
//                 <table border="1">
//                     <thead>
//                     <th style={{padding:"10px"}}>Name</th>
//                     <th style={{padding:"10px"}}>Email</th>
//                     <th style={{padding:"10px"}}>Action</th>
//                     </thead>
//                     <Tbody list={this.state.list}/>
//                 </table>
//             </div>
//
//         );
//     }
// }
//
// export default App
//
//
// const Tbody = (props) => {
//     const {list} = props;
//     return(
//        list && list.map((v, i) => (
//         <>
//             <tr align="center">
//                 <td style={{padding:"10px"}}>{v.name}</td>
//                 <td style={{padding:"10px"}}>{v.email}</td>
//                 <button style={{padding:"10px"}}>Edit</button>
//             </tr>
//         </>
//     ))
//     )
// };