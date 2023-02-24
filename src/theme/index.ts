import { extendTheme, StyleFunctionProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const breakpoints = {
	// define custom breakpoints
	xs: '0px',
	sm: '30em',
	md: '48em',
	lg: '62em',
	xl: '80em'
}

/*
light mode color pallette
#fafafa	
#e4e5f1	
#d2d3db	
#9394a5	
#484b6a	
*/

/*
dark mode color pallette
#161722	
#25273c	
#cacde8	
#e4e5f1	
#777a92
*/

const colors = {
	// add custom colors
	// brand.paper.light / brand.paper.dark
	brand: {
		paper: {
			light: '#fafafa',
			dark: '#25273c'
		},
		accent: 'hsl(73,100%,69%)'
	}
}

const config = {
	// adjust the config of the light/dark mode
	initialColorMode: 'dark',
	useSystemColorMode: true
}

const fonts = {
	// add custom fonts
	// body: `Inter,"Segoe UI"...`,
	// heading: `Inter,"Segoe UI"...`
}

const styles = {
	// add global styles
	global: (props: StyleFunctionProps) => ({
		body: {
			// example of changing both the background &
			// foreground color based on the color mode
			bg: mode('#d2d3db', '#161722')(props),
			color: mode('#292B30', '#ffffff')(props)
		},
		h1: {
			// example of changing a particular element's style
			// fontSize: '6xl',
			// color: mode('red.900', 'red.100')(props)
		}
	})
}

const overrides = { breakpoints, colors, config, fonts, styles }

const theme = extendTheme(overrides)

export default theme
