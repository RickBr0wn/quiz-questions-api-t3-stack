import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import type { FC, ReactElement } from 'react'
import { TbDirectionsOff } from 'react-icons/tb'
import log from './log'

type ResponsiveOptions = {
	sm?: number | string
	md?: number | string
	lg?: number | string
	xl?: number | string
}

type SidebarLinkProps = {
	link?: string
	onClick?: () => void
	title: string
	icon: ReactElement
	header?: boolean
	breakpoint?: string
	ml?: number | ResponsiveOptions
	mt?: number | ResponsiveOptions
}

const SidebarLink: FC<SidebarLinkProps> = ({
	onClick,
	breakpoint,
	link,
	header,
	icon,
	ml,
	title
}) => {
	if (link) {
		return (
			<Link href={link}>
				<Flex _hover={{ color: `brand.accent` }} w='fit-content' ml={ml ? ml : 0}>
					{icon}
					{breakpoint === 'lg' || breakpoint === 'xl' ? (
						<Text ml={2} fontWeight='bold'>
							{title.toUpperCase()}
						</Text>
					) : (
						<Text></Text>
					)}
				</Flex>
			</Link>
		)
	}

	if (onClick) {
		return (
			<Link href={''}>
				<Flex
					onClick={onClick}
					cursor='pointer'
					_hover={{ color: `brand.accent` }}
					ml={ml ? ml : 0}
				>
					{icon}
					{breakpoint === 'lg' || breakpoint === 'xl' ? (
						<Text ml={2} fontWeight='bold'>
							{title.toUpperCase()}
						</Text>
					) : (
						<Text></Text>
					)}
				</Flex>
			</Link>
		)
	}

	if (header) {
		return (
			<Flex color='brand.accent' ml={ml ? ml : 0}>
				{icon}
				<Text ml={2} fontSize='md' fontWeight='black'>
					{title.toUpperCase()}
				</Text>
			</Flex>
		)
	}

	return (
		<Flex color='red.500' alignItems='center'>
			<TbDirectionsOff size={24} />
			<Text ml={2} fontWeight='bold'>
				BROKEN LINK
			</Text>
		</Flex>
	)
}

export default SidebarLink

// Path: src/components/sidebar-link.tsx
// Created at: 22:57:05 - 22/02/2023
// Language: Typescript
// Framework: React/Next.js
