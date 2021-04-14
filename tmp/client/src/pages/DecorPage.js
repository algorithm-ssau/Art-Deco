import React, {useEffect} from 'react'
import M from 'materialize-css'
import {Carousel, Card, Row, Col, Icon, CardTitle} from 'react-materialize'

import img from "../static/img/decor1.jpg"
import img2 from "../static/img/decor2.jpg"

export const DecorPage = () => {
	return (
	<>
		<div>
			<h1>Декор</h1>
		</div>
		<Carousel
			options={{
				fullWidth: true,
				indicators: true
			}}
		>
			<Card
				closeIcon={<Icon>close</Icon>}
				header={<CardTitle image={img} />}
				reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
				horizontal
				revealIcon={<Icon>more_vert</Icon>}
			>
				Это прекрасный декор для вашего дома!
			</Card>
			<Card
				closeIcon={<Icon>close</Icon>}
				header={<CardTitle image={img2} reveal waves="light"/>}
				reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
				horizontal
				revealIcon={<Icon>more_vert</Icon>}
			>
				А этот еще лучше!
			</Card>
		</Carousel>
	</>
	)
}