import React from "react";
import { useParams } from "react-router-dom";
import { useNoteQuery } from "../queries/useNoteQuery";

export const NoteProfile = () => {
  const { noteId } = useParams();
  const { data } = useNoteQuery(noteId!);
  console.log("data", data);

  return (
    <>
      <div>NoteProfile</div>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
      <span>{data?.date.toString()}</span>
      {data?.tasks.map((task) => (
        <div key={task._id}>
          <p>{task?.titleTask}</p>
          <p>{task?.descriptionTask}</p>
        </div>
      ))}
    </>
  );
};
