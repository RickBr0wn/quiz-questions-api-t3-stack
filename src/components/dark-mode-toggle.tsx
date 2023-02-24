import { type FC } from 'react'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

type Props = object

const DarkModeToggle: FC<Props> = (): JSX.Element => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<IconButton
			icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
			onClick={toggleColorMode}
			variant='ghost'
			aria-label={'Theme toggle switch'}
			role={'switch'}
		/>
	)
}

export default DarkModeToggle

// Path: src/components/dark-mode-toggle.tsx
// Created at: 18:56:17 - 22/02/2023
// Language: Typescript
// Framework: React/Next.js
