import React from 'react';
const button = (pagenum,getPageNumber) => {
    return (<button key={pagenum} class="btn btn-primary" onClick={() => { getPageNumber(pagenum) }}>{pagenum}</button>);
}
const pagination = (props) => {
    let { limit, size,getPageNumber } = props
    let totalpages = Math.ceil(size / limit);
    const buttons = []
    for (var pagenum = 1; pagenum <= totalpages; pagenum++) {
        buttons[pagenum] = button(pagenum,getPageNumber)
    }
    return (
        buttons
    )
}
export default pagination;