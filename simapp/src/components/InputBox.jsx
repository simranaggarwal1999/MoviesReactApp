import React, { Component } from 'react';
const InputBox = (props) => {
    const {mytext, mychange}=props;
    return ( 
            <form>
            <label htmlFor=""></label>
            <span class="d-block p-2 bg-dark text-white">
                <input type="text" className="form-control" value={mytext} placeholder="Search..." onChange={mychange}></input>
            </span>
            </form >
            );
}
export default InputBox;