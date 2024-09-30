import axios from 'axios';


axios.defaults.baseURL = import.meta.env.VITE_SERVER_DOMAIN;


// get members and project details


export async function getMember({ email }) {
    try {
        const { data } = await axios.get(`https://nllbackend.onrender.com/api/member/${email}`);
        return { data };
    } catch (error) {
        return { error: "Email doesn't exists" }
    }
}

export async function getAllmembers() {
    try {
        const { data } = await axios.get(`https://nllbackend.onrender.com/api/getallmembers`);

        return { data };
    } catch (error) {
        return { error: "Can't fetched data" }
    }
}
export async function getAllachievements() {
    try {
        const { data } = await axios.get(`https://nllbackend.onrender.com/api/getallachievements`);

        return { data };
    } catch (error) {
        return { error: "Can't fetched data" }
    }
}
export async function getAllactivities() {
    try {
        const { data } = await axios.get(`https://nllbackend.onrender.com/api/getallactivities`);

        return { data };
    } catch (error) {
        return { error: "Can't fetched data" }
    }
}
export async function getAllevents() {
    try {
        const { data } = await axios.get(`https://nllbackend.onrender.com/api/getallevents`);

        return { data };
    } catch (error) {
        return { error: "Can't fetched data" }
    }
}

export async function getAllprojects() {
    try {
        const { data } = await axios.get(`https://nllbackend.onrender.com/api/getallprojects`);

        return { data };
    } catch (error) {
        return { error: "Can't fetched data" }
    }
}

export async function getProject({ projname }) {
    try {
        const { data } = await axios.get(`https://nllbackend.onrender.com/api/project/${projname}`);
        return { data };
    } catch (error) {
        return { error: "Project doesn't exists" }
    }
}


// adding members and project

export async function createMember(credentials) {
    try {
        const { data: { msg }, status } = await axios.post('https://nllbackend.onrender.com/api/createmember', credentials);

        return Promise.resolve(msg, status)
    } catch (error) {
        return Promise.reject({ error })
    }
}