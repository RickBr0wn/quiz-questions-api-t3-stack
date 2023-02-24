import { Center, Heading, Text } from '@chakra-ui/react'
import type { FC } from 'react'
import Paper from './paper'

type Props = {
	title: string
	amount: number
}

const DashboardCard: FC<Props> = ({ title, amount }): JSX.Element => {
	return (
		<Paper flex={1} align='center' justify='center'>
			<Center flexDir='column'>
				<Text fontSize='sm' fontWeight='bold' textAlign='center'>
					{title}
				</Text>
				<Heading color='brand.accent' fontWeight='black'>
					{amount}
				</Heading>
			</Center>
		</Paper>
	)
}

export default DashboardCard

// Path: src/components/dashboard-card.tsx
// Created at: 23:40:28 - 23/02/2023
// Language: Typescript
// Framework: React/Next.js
