import axios from "axios";


export const handleGetDocuments = async (token: string) => {
    const response = await axios.get("http://localhost:3001/documents", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((res) => res.data);
    return response;
}

        