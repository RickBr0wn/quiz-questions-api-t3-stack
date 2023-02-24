import { Heading } from '@chakra-ui/react'
import { type FC } from 'react'

const ScreenSizeIndicator: FC = (): JSX.Element => {
	return (
		<>
			<Heading
				position={'absolute'}
				visibility={{
					sm: 'visible',
					base: 'hidden',
					md: 'hidden',
					lg: 'hidden',
					xl: 'hidden',
					'2xl': 'hidden'
				}}
			>
				SM
			</Heading>
			<Heading
				position={'absolute'}
				visibility={{
					sm: 'hidden',
					base: 'visible',
					md: 'hidden',
					lg: 'hidden',
					xl: 'hidden',
					'2xl': 'hidden'
				}}
			>
				BASE
			</Heading>
			<Heading
				position={'absolute'}
				visibility={{
					sm: 'hidden',
					base: 'hidden',
					md: 'visible',
					lg: 'hidden',
					xl: 'hidden',
					'2xl': 'hidden'
				}}
			>
				MD
			</Heading>
			<Heading
				position={'absolute'}
				visibility={{
					sm: 'hidden',
					base: 'hidden',
					md: 'hidden',
					lg: 'visible',
					xl: 'hidden',
					'2xl': 'hidden'
				}}
			>
				LG
			</Heading>
			<Heading
				position={'absolute'}
				visibility={{
					sm: 'hidden',
					base: 'hidden',
					md: 'hidden',
					lg: 'hidden',
					xl: 'visible',
					'2xl': 'hidden'
				}}
			>
				XL
			</Heading>
			<Heading
				position={'absolute'}
				visibility={{
					sm: 'hidden',
					base: 'hidden',
					md: 'hidden',
					lg: 'hidden',
					xl: 'hidden',
					'2xl': 'visible'
				}}
			>
				2XL
			</Heading>
		</>
	)
}

export default ScreenSizeIndicator

// Path: src/components/screen-size-indicator.tsx
// Created at: 19:53:49 - 22/02/2023
// Language: Typescript
// Framework: React/Next.jsimport { Heading } from '@chakra-ui/react'
