import './CurveSeparator.css'

const CurveSeparator = ({ direction }) => {
	if (!direction || direction === "bottom")
		return (
			<div className="custom-shape-divider-bottom-1696740906">
				{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" />
				</svg>
			</div>
		)
	return (
		<div className="custom-shape-divider-top-1696759488">
			{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
			<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
				<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" />
			</svg>
		</div>
	)
}

export default CurveSeparator
