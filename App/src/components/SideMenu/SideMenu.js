// See <App> (ie ../app.js) to read documentation on how a React component works
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium'

import SideHeader from './SideHeader'
import SideOption from './SideOption'

class SideMenu extends Component {

	render() {
		return (
			<div id='mainview' style={comStyles(this.props.sideMenuVisible).mainview}>
				<SideHeader />
        <SideOption text='Home' link='/' />
        <SideOption text='Form' link='/form' />
        <SideOption text='About' link='/about' />
			</div>
		)
	}
}

SideMenu.propTypes = {
	sideMenuVisible: React.PropTypes.bool
}

const RadiumHOC = Radium(SideMenu)

function mapStateToProps(state){
  return {
    sideMenuVisible: state.sideMenu.visible
  }
}

export default connect(mapStateToProps)(RadiumHOC)

// ================================

const comStyles = (sideMenuVisible) => {
	let paramsCSS = {
		display: "hidden",
		width: "0px",
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
		color: "rgba(0,0,0,0)"
	}
	if(sideMenuVisible){
		paramsCSS.display = "flex"
		paramsCSS.width = "25%"
		paramsCSS.backgroundColor = "rgba(0,0,0,0.8)",
		paramsCSS.color = "white"
	}
	return {
		mainview: {
			flexDirection: "column",
			height: "100vh",
			position: "absolute",
			zIndex: "99",
			transition: "0.5s",
			...paramsCSS
		}
	}
}
