import React from "react";

export default function Tags(props) {
    const tag = props.tag
    return(
            <ul className="tags">
                {tag.map((tag,name) => (
                    <li key={name} className='tag'>{tag}</li>
                ))}
            </ul>
    )
}