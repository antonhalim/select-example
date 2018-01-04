import React from 'react'
import Link from 'gatsby-link'
import _ from 'lodash'
import Select from 'react-select'
import $ from 'jquery'
window.jQuery = $

import ReactSelect from '../components/react-select'

require('chosen-js')
require('chosen-js/chosen.min.css')

class Template extends React.Component {
	componentDidMount() {
		jQuery(this.chosenSelect).chosen()
	}

	render() {
		const { location, children } = this.props
		let header

	return (
		<div>
			<div style={{display: "flex", justifyContents: 'center', alignItems: 'center', margin: "0.5em"}}>
				<h4 style={{margin: "0 1em"}}>CHOSEN JS</h4>
				<select className="chosen" ref={(sel) => { this.chosenSelect = sel }}>
					{_.range(10000, 200000, 50).map((el) => {
						return (<option key={el}>{el}</option>)
					})}
				</select>
			</div>
			<div style={{display: "flex", justifyContents: 'center', alignItems: 'center', margin: "0.5em"}}>
				<h4 style={{margin: "0 1em"}}>REACT SELECT</h4>

				<ReactSelect />

			</div>

		</div>
		)
	}
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
