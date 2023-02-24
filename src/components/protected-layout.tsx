import { Center, Flex } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import type { ReactNode, FC } from 'react'
import ScreenSizeIndicator from './screen-size-indicator'
import Sidebar from './sidebar'

type Props = {
	children: ReactNode
}

const ProtectedLayout: FC<Props> = ({ children }): JSX.Element => {
	return (
		<Flex flexDir={{ sm: 'column', lg: 'row' }} p={4} h='100vh' gap={4}>
			<ScreenSizeIndicator />
			<Sidebar />
			{children}
		</Flex>
	)
}

export default ProtectedLayout

// Path: src/components/protected-layout.tsx
// Created at: 20:35:02 - 22/02/2023
// Language: Typescript
// Framework: React/Next.js
