/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

export default function useWindowDimensions() {
	const hasWindow = typeof window !== 'undefined'

	function generateChakraBreakPoint(width: number | null) {
		if (!width) return

		if (width <= 480) {
			return 'xs'
		} else if (width > 480 && width <= 768) {
			return 'sm'
		} else if (width > 768 && width <= 992) {
			return 'md'
		} else if (width > 992 && width <= 1280) {
			return 'lg'
		} else if (width > 1280) {
			return 'xl'
		}
	}

	function getWindowDimensions() {
		const width = hasWindow ? window.innerWidth : null
		const height = hasWindow ? window.innerHeight : null
		const breakpoint = generateChakraBreakPoint(width)
		return {
			breakpoint,
			width,
			height
		}
	}

	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

	useEffect(() => {
		if (hasWindow) {
			function handleResize() {
				setWindowDimensions(getWindowDimensions())
			}

			window.addEventListener('resize', handleResize)
			return () => window.removeEventListener('resize', handleResize)
		}
	}, [hasWindow])

	return windowDimensions
}
