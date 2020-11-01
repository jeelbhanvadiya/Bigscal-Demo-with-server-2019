import axios from 'axios'

export const create = async (data)=> {
    try {
        const res = await axios.post('http://localhost:8080/api/bears',data);
        return {res:res}
    } catch (error) {
        console.error(error);
    }
};
export const getUser = async ()=> {
    try {
        const res = await axios.get('http://localhost:8080/api/bears');
        return {res:res}
    } catch (error) {
        console.error(error);
    }
};
export const getOne = async (id)=> {
    try {
        const res = await axios.post(`http://localhost:8080/api/bears/find`,{id:id});
        return {res:res}
    } catch (error) {
        console.error(error);
    }
};
export const updateDetails = async (data)=> {
    try {
        const res = await axios.put(`http://localhost:8080/api/updatedetails/${data._id}`,data);
        return {res:res}
    } catch (error) {
        console.error(error);
    }
};
export const DeleteDetails = async (id)=> {
    try {
        const res = await axios.delete(`http://localhost:8080/api/bears/${id}`);
        return {res:res}
    } catch (error) {
        console.error(error);
    }
};