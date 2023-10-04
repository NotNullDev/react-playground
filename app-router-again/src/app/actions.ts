'use server'

import {sql} from "@/lib/db";
import {revalidatePath} from "next/cache";

export async function createAction(formData: FormData) {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  const id = formData.get("id") as string;

  if (id) {
    const result = await sql`UPDATE notes SET title = ${title}, body = ${body} WHERE id = ${id}`
    console.log(`successfully updated note with id ${id}: `)
    console.log(result);
  } else {
    const result = await sql`INSERT INTO notes (title, body) VALUES (${title}, ${body})`
    console.log(`successfully inserted note: `)
    console.log(result);
  }
  revalidatePath("/")
}

export async function deleteAction(formData: FormData) {
  const id = formData.get("id") as string;

  const result = await sql`DELETE FROM notes WHERE id = ${id}`

  console.log(`successfully deleted note with id ${id}: `)
  console.log(result);
  revalidatePath("/")
}
