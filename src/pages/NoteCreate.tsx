import React from "react";
import { CreateNoteForm } from "../components/forms/CreateNoteForm";
import { OldNoteCreate } from "../legacy/OldNoteCreateForm";

export const NoteCreate = () => {
  return (
    <div>
      <h1>Create a new StandNote</h1>
      <CreateNoteForm />
      {/* <OldNoteCreate /> */}
    </div>
  );
};
