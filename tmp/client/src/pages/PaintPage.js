import React from 'react'
import {Slider, Slide, Table} from 'react-materialize'
import img from "../static/img/decor1.jpg"
import img2 from "../static/img/decor2.jpg"

export const PaintPage = () => {
	return(
		<>
			<div>
				<h1>Краска</h1>
			</div>
			<Slider
				options={{
					indicators: true
				}}
			>
				<Slide image={<img src={img}/>}>
					<Table>
						<tbody>
							<tr>
								<td>
									<img src={img} />
								</td>
								<td>
									Это прекрасный декор для вашего дома!
								</td>
							</tr>
						</tbody>
					</Table>
				</Slide>
			<Slide image={<img src={img2} />}>
				А этот еще лучше!
			</Slide>
		</Slider>
		</>
	)
}