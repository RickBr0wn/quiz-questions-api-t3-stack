import { Button, Flex, Icon, IconButton, Spacer } from '@chakra-ui/react'
import { type FC } from 'react'
import DarkModeToggle from './dark-mode-toggle'
import ScreenSizeIndicator from './screen-size-indicator'
import SignInButton from './sign-in-button'

const Navbar: FC = (): JSX.Element => {
	return (
		<Flex as='nav' role='navigation' width='100%' alignItems='center' padding={4} gap={2}>
			<ScreenSizeIndicator />
			<Spacer />
			<SignInButton />
			<DarkModeToggle />
		</Flex>
	)
}

export default Navbar

// Path: src/components/navbar.tsx
// Created at: 18:54:52 - 22/02/2023
// Language: Typescript
// Framework: React/Next.js
