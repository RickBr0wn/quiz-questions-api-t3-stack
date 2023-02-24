import { Container, Heading, Text } from '@chakra-ui/react'
import { type FC } from 'react'

type Props = object

const Hero: FC<Props> = (): JSX.Element => {
	return (
		<Container textAlign='center'>
			<Heading as='h1' fontSize='6xl' fontWeight='black' mt='30vh'>
				Quiz Questions API
			</Heading>
			<Text as='h2'>A REST-ful API that delivers quality quiz questions</Text>
		</Container>
	)
}

export default Hero

// Path: src/components/hero.tsx
// Created at: 19:05:58 - 22/02/2023
// Language: Typescript
// Framework: React/Next.js
