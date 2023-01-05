import React from "react";
import { useParams} from "react-router-dom";
import appartList from "../apparts";

export default function Tags(props) {
    const tag = props.tag
    const id = props.id
    return(
            <ul className="tags">
                {tag.map(tag => (
                    <li key={id} className='tag'>{tag}</li>
                ))}
            </ul>
    )
}