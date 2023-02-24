import { Flex, type FlexProps, useColorMode } from '@chakra-ui/react'
import type { FC, ReactNode } from 'react'

type Props = FlexProps & {
	children: ReactNode
}

const Paper: FC<Props> = ({ align, children, w, h, flex, flexDir, justify }): JSX.Element => {
	const { colorMode } = useColorMode()

	return (
		<Flex
			flexDir={flexDir ? flexDir : 'column'}
			bg={colorMode === 'light' ? 'brand.paper.light' : 'brand.paper.dark'}
			flex={flex ? flex : ''}
			align={align ? align : ''}
			justify={justify ? justify : ''}
			w={w ? w : 'fit-content'}
			h={h ? h : '100%'}
			p={6}
			borderRadius='lg'
		>
			{children}
		</Flex>
	)
}

export default Paper

// Path: src/components/paper.tsx
// Created at: 21:59:13 - 22/02/2023
// Language: Typescript
// Framework: React/Next.js
