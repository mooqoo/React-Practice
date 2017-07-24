import React from 'react'

import Article from './article'
import '../css/body.css'

class Body extends React.Component {
	render() {
		// let array = [1, 2,3,4,5]
		// let component = array.map((value) => {
		// 	return (
		// 		<li>{value}</li>
		// 	)
		// })
		return (
			<div className="body">
        <Article />
        <Article />
				{/* <ul>
					{component}
				</ul> */}
			</div>
		)
	}
}

export default Body
