import { Center, Flex } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { type FC } from 'react'
import Chart from '~/components/chart'
import DashboardCard from '~/components/dashboard-card'
import Paper from '~/components/paper'
import ProtectedLayout from '~/components/protected-layout'
import QuestionsTable from '~/components/questions-table'
import SignInButton from '~/components/sign-in-button'
import { api } from '~/utils/api'

type Props = object

const Admin: FC<Props> = (): JSX.Element => {
	const { data: sessionData } = useSession()
	const { data: questions } = api.question.getAllQuestions.useQuery()

	if (!sessionData) {
		return (
			<Center h='100vh' flexDir='column' gap={4}>
				You must be signed in to view this page.
				<SignInButton />
			</Center>
		)
	}

	if (!questions) {
		return <div>Loading...</div>
	}

	return (
		<ProtectedLayout>
			<Flex gap={4} flexDir='column' w='full'>
				<Flex flex={1} gap={4} flexDir={{ sm: 'column', lg: 'row' }}>
					<Flex flexDir='column' flex={1} gap={4}>
						<Flex flex={1} gap={4}>
							<DashboardCard title={'Total Questions'} amount={106} />
							<DashboardCard title={'Days Since Last Publish'} amount={3} />
						</Flex>
						<Flex flex={1} gap={4}>
							<DashboardCard title={'Home Page Visitors'} amount={24} />
							<DashboardCard title={'Total Questions Served'} amount={345} />
						</Flex>
					</Flex>
					<Paper flex={1} bg='blue.200' w='full' p={2} justify='center' align='center'>
						<Chart />
					</Paper>
				</Flex>
				<Paper bg='green.100' flex={1} w='full' p={2}>
					<QuestionsTable questions={questions} />
				</Paper>
			</Flex>
		</ProtectedLayout>
	)
}

export default Admin

// Path: src/pages/admin.tsx
// Created at: 19:55:59 - 22/02/2023
// Language: Typescript
// Framework: React/Next.js
