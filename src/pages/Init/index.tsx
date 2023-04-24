import { FC, useEffect } from "react"
// import { getAllNotes } from "../../service/NoteService"
import { openNewWindow } from "../../service/windowService"

const init = async () => {
    // let notes = await getAllNotes()
    openNewWindow({url:"#/note"})
}


export const Init: FC = () => {
    useEffect(() => { init() }, [])
    return <div>init...</div>
}