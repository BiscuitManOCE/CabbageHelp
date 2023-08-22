import React, { useState } from "react"

export default function Searchbar({ callback }) {
    //State to save the current value input by the user
    const [search, setSearch] = useState("")

    //Function that calls "callback" if the key pressed is "Enter"
    function handleKeyPress(e) {
        if (e.key === "Enter") {
            callback(search)
        }
    }

    //Returning a simple input element for a search bar
    //When the user changes the input (aka types something) it triggers onChange and will set the search state to equal the new input
    //When the user presses ANY key on their keyboard while clicked into the search bar, it triggers onKeyDown
    //But remember, handleKeyPress wont do anything unless the key pressed is Enter
    return (
        <input type="text" placeholder="Search..." onKeyDown={(e) => handleKeyPress(e)} onChange={(e) => setSearch(e.target.value)} />
    )
}