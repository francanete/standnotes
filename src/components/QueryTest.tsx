import { useQuery } from "react-query";
import { INotes } from "../types/notes";

export const QueryTest = () => {
  const { data, isLoading } = useQuery<INotes[]>("notes", async () => {
    const res = await fetch("http://localhost:4000/api/notes");
    return res.json();
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.map((note) => (
        <div key={note.title}>
          <h2>{note.title}</h2>
          <p>{note.description}</p>
        </div>
      ))}
    </div>
  );
};
