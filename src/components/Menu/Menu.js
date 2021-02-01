import React from "react";

class Menu extends React.Component{
    constructor(props){
        super(props);

        this.state.menuItems = [
            {name: "home", active: true},
            {name: "store", active: false},
            {name: "servers", active: false},
            {name: "stats", active: false}
        ];
    }

    render(){
        <div className="menu">
            <LogoMenu></LogoMenu>
            <nav>
                <ul>
                    {this.state.menuItems.map((item, key) => {
                        return <MenuItem name={item.name} active={item.active}></MenuItem>
                    })}
                </ul>
            </nav>
        </div>
    }
}