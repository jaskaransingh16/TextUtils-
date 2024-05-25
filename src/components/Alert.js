import React from 'react'

export default function Alert(props) {
    return (

        <div className="alert alert-success" role="alert">
          props.alert && {props.alert.msg}
        </div>

    )
}
