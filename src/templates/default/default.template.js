import FooterContainer from "../../container/footer/footer.container"
import React, { Component } from "react";
import TopbarContainer from "../../container/topbar/topbar.container";

export default class DefaultTemplate extends Component{
    render(){
        return (<div>
            <TopbarContainer></TopbarContainer>
            <div>{this.props.children}</div>
            <FooterContainer></FooterContainer>
        </div>

        )
    }
}