import axios from 'axios';


axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;


// get members and project details


export  async function getMember({email}){
    try {
        const {data} =   await axios.get(`/api/member/${email}`);
        return {data};
    } catch (error) {
        return {error:"Email doesn't exists"}
    }
}

export  async function getAllmembers(){
    try {
        const {data} = await axios.get(`/api/getallmembers`);

        return {data};
    } catch (error) {
        return {error:"Can't fetched data"}
    }
}

export  async function getProject({projname}){
    try {
        const {data} =   await axios.get(`/api/project/${projname}`);
        return {data};
    } catch (error) {
        return {error:"Project doesn't exists"}
    }
}


// adding members and project

export async function createMember(credentials){
    try {
        const { data : { msg }, status } = await axios.post('/api/createmember', credentials);

        return Promise.resolve(msg , status)
    } catch (error) {
        return Promise.reject({ error })
    }
}

export async function createProject(credentials){
    try {
        const { data : { msg }, status } = await axios.post('/api/createproject', credentials);

        return Promise.resolve(msg , status)
    } catch (error) {
        return Promise.reject({ error })
    }
}