
import { Link, useLoaderData } from "react-router-dom";
import noteServices from "../services/noteServices";

export const loader = async () => {
  const notes = await noteServices.getNotes();
  return notes;
}

const Users = () => {

  const notes = useLoaderData();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <Link to={`/notes/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Users;