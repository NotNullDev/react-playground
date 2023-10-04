'use client'

import {appStoreActions} from "@/app/store";

export function CreateButton() {
  return <button className="btn btn-primary btn-sm" onClick={appStoreActions.clearNote}>Create</button>
}
