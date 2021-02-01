import React from "react";

class MenuItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        <li>{this.props.name}</li>
    }
}