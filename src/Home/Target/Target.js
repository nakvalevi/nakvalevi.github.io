import React from 'react'
import Heading from '../../components/Heading/Heading'
import TargetCard from './TargetCard'
import './target.scss'

const Target = () => {
	return (
		<div className="target section">
			<Heading
				heading="ჩვენი მიზანია"
				image="images/target.svg"
			/>
			<div className="section-content">
				<TargetCard
					image="images/book.svg"
					text="ქართული ლიტერატურის შესწავლა და გააზრება გაგიადვილოთ"
				/>
				<TargetCard
					image="images/eye.svg"
					text="კონკრეტულ საკითხზე სხვადასხვა ხედვა მოგაწოდოთ"
				/>
				<TargetCard
					image="images/cloud.svg"
					text="ნაშრომები შევინახოთ და გავავრცელოთ"
				/>
				<TargetCard
					image="images/favicon.svg"
					text="წარუშლელი ნაკვალევი დავტოვოთ"
				/>
			</div>
		</div>
	)
}

export default Target