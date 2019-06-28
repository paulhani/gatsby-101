import React from "react"

export default (props) => (
    <button className="btn btn-secondary" onClick={props.handleClick}>{ props.text }</button>
)