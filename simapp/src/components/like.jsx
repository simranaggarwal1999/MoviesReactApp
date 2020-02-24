import React from 'react';
const Like = (props) => {
    const {liked,myfn}=props;
    let classes;
    if(liked)
    {
        const filled="fa fa-heart";
        classes=filled;
    }
    else{
        const empty = "fa fa-heart-o";
        classes=empty;
    }
    return (<i className={classes} onClick={myfn}></i>  );
}

export default Like;