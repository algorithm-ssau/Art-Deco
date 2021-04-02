import React, {useEffect} from 'react'
import M from 'materialize-css'

import img from "../static/img/parallax4.jpg"
import img2 from "../static/img/parallax3.jpg"

export const PlasterPage = () => {
	useEffect(() => {
			let element = document.querySelectorAll(".parallax")
			M.Parallax.init(element)
	},[])
	return(
		
	<>
		<div className="container">
			<h1>Штукатурка</h1>
		</div>
		<div className="parallax-container" width="100%">
			<div className="parallax"><img src={img}/></div>
		</div>
		<div className="section white">
			<div className="row container">
				<h2 className="header">Parallax</h2>
				<p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
			</div>
		</div>
		<div className="parallax-container" width="100%">
			<div className="parallax"><img src= {img2} /></div>
		</div>
		<div className="section white">
			<div className="row container">
				<h2 className="header">Parallax2</h2>
				<p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
			</div>
		</div>
	</>
	)
}