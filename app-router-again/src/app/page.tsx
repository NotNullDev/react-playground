import {sql} from "@/lib/db";
import NewNote from "@/app/NewNote";
import NoteDisplay from "@/app/NoteDisplay";
import {CreateButton} from "@/app/CreateButton";

export default async function Home() {
  const notes = await sql`select *
                          from notes`

  const key = crypto.randomUUID()

  return (
    <main className="p-4 flex gap-2">
      <div className="flex-1 flex mt-24">
        <NewNote key={key}/>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex gap-10 items-center">
          <h2 className="text-4xl mb-6 mt-4">Notes</h2>
          <CreateButton />
        </div>
        {notes.map(note => {
          return (
            <NoteDisplay note={note} key={note.id}/>
          )
        })}
      </div>
    </main>
  )
}
