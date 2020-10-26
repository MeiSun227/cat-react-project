import React from 'react'


const Cat = (props) => {
    return (
        <>
            <img src={props.cat.url} alt="cat" />
        </>
    )
}
export default Cat