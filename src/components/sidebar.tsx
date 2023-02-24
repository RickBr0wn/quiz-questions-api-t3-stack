import { Box, Flex, Spacer, useColorMode } from '@chakra-ui/react'
import { signOut } from 'next-auth/react'
import type { FC } from 'react'
import {
	TbDashboard,
	TbBrandGithub,
	TbHome,
	TbLogout,
	TbPencil,
	TbTable,
	TbZoomQuestion
} from 'react-icons/tb'
import useWindowDimensions from '~/hooks/useWindowDimensions'
import log from './log'
import Paper from './paper'
import SidebarLink from './sidebar-link'

const Sidebar: FC = (): JSX.Element => {
	const { breakpoint } = useWindowDimensions()

	return (
		<Paper
			flexDir={{ sm: 'row', lg: 'column' }}
			w={{ sm: 'full', lg: 'fit-content' }}
			h={{ sm: '20px', lg: 'full' }}
			align={{ sm: 'center', lg: 'flex-start' }}
		>
			<Flex>
				<SidebarLink header title='Quiz Api' icon={<TbZoomQuestion size={28} />} />
			</Flex>

			{(breakpoint === 'xs' || breakpoint === 'sm' || breakpoint === 'md') && <Spacer />}

			<Flex flexDir={{ sm: 'row', lg: 'column' }} h={{ sm: 'fit-content', lg: 'full' }} gap={4}>
				<Spacer />
				<SidebarLink breakpoint={breakpoint} link='/' title='home' icon={<TbHome size={24} />} />
				<SidebarLink
					breakpoint={breakpoint}
					link='/dashboard'
					title='dashboard'
					icon={<TbDashboard size={24} />}
				/>
				<SidebarLink
					breakpoint={breakpoint}
					link='/publish'
					title='publish'
					icon={<TbPencil size={24} />}
				/>
				<SidebarLink
					breakpoint={breakpoint}
					link='/overview'
					title='overview'
					icon={<TbTable size={24} />}
				/>

				<Spacer />

				<SidebarLink
					breakpoint={breakpoint}
					link='/'
					title='github'
					icon={<TbBrandGithub size={24} />}
					ml={{ sm: 5, md: 10, lg: 0 }}
				/>

				<Spacer />

				<SidebarLink
					breakpoint={breakpoint}
					onClick={() => void signOut({ callbackUrl: `${window.location.origin}` })}
					title='log out'
					icon={<TbLogout size={24} />}
					ml={{ sm: 5, md: 10, lg: 0 }}
				/>
			</Flex>
		</Paper>
	)
}

export default Sidebar

// Path: src/components/sidebar.tsx
// Created at: 20:37:21 - 22/02/2023
// Language: Typescript
// Framework: React/Next.js
