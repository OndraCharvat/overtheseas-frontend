import axios from "axios";
import { Iprofile } from "../profile/page";

export const handleGetProfile = async () => {
    const response:Iprofile = await axios.get("http://localhost:3001/profile",{
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
    }).then((res) => res.data);
    return response;
}