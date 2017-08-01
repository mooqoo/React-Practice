import React from 'react'

import '../css/article.css'

class Article extends React.Component {
	render() {
		return (
			<div className="article">
				<div className="title"> Title </div>
        <div className="context">
          this is a static text context now... <br />
          change is to prop later... <br />
          ... <br />
          ... <br />
          ... <br />
        </div>
			</div>
		)
	}
}

export default Article
