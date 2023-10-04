'use client'

import { createAction } from "@/app/actions";
import { useEffect } from "react";
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { appStore } from "./store";

export default function NewNote() {
 const {pending} = useFormStatus();
 const id = appStore((store: any) => store.note.id)
 const title = appStore((store: any) => store.note.title)
 const body = appStore((store: any) => store.note.body)

  useEffect(() => {
    console.log(`pending: ${pending}`)
  }, [pending]);

  return (
    <form action={createAction} className="flex flex-col gap-2 max-w-[400px] mx-auto">
      <input onChange={(e) => {
        appStore.setState((store: any) => {
          store.note.title = e.currentTarget.value
        })
      }} value={title} type="text" name="title" placeholder="title" className="input input-bordered" />
      <input onChange={(e) => {
        appStore.setState((store: any) => {
           store.note.body = e.currentTarget.value
        })
      }} value={body} type="text" name="body" placeholder="body" className="input input-bordered" />
      <button name="id" value={id ?? ""} className="btn btn-secondary">{id ? 'update' : 'create'}</button>
    </form>
  )
}
