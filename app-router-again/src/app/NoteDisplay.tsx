'use client'

import {deleteAction} from "@/app/actions";
import {appStore} from "@/app/store";

export type NoteDisplayProps = {
  note: any
}

export default function NoteDisplay({note}: NoteDisplayProps) {

  function handleClick() {
    appStore.setState((store: any) => {
      store.note.id = note.id
      store.note.title = note.title
      store.note.body = note.body
    })
  }

  return (<div key={note.id} className="p-2 bg-base-100 rounded-md flex justify-between items-center w-full">
    <button className="flex-1 flex flex-col p-2" onClick={handleClick}>
      <h2 className="text-2xl">{note.title}</h2>
      <p>{note.body}</p>
    </button>
    <form action={deleteAction}>
      <button className="btn btn-error" name="id" value={note.id}>Delete</button>
    </form>
  </div>)
}
