import axios from "axios";

interface IPhase {
  id: string;
  title: string;
  description: string;
  tasks: {
    id: string;
    title: string;
  }[];
}

export const handleGetPhase = async (token: string, id?: string) => {
  console.log(id);
  const phase: IPhase = await axios
    .get(`http://localhost:3001/phase/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
  return phase;
};
