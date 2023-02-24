import { ChevronDownIcon } from '@chakra-ui/icons'
import {
	Avatar,
	Button,
	Icon,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text
} from '@chakra-ui/react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { type FC } from 'react'
import { TbUser } from 'react-icons/tb'

type Props = object

const SignInButton: FC<Props> = (): JSX.Element => {
	const { data: sessionData } = useSession()

	if (sessionData) {
		return (
			<Menu>
				<MenuButton>
					<Avatar size='sm' src={sessionData.user.image || ''} name={sessionData.user.name || ''} />
				</MenuButton>
				<MenuList>
					<Link href='admin'>
						<MenuItem>Dashboard</MenuItem>
					</Link>
					<MenuItem onClick={() => void signOut({ callbackUrl: `${window.location.origin}` })}>
						Sign Out
					</MenuItem>
				</MenuList>
			</Menu>
		)
	}
	return (
		<Button
			variant='ghost'
			aria-label={'sign in button'}
			onClick={() =>
				void signIn(undefined, {
					callbackUrl: '/admin'
				})
			}
		>
			<Text>{sessionData ? 'SIGN OUT' : 'SIGN IN'}</Text>
		</Button>
	)
}

export default SignInButton

// Path: src/components/sign-in-button.tsx
// Created at: 19:13:03 - 22/02/2023
// Language: Typescript
// Framework: React/Next.js
