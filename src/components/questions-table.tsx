/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Avatar,
	Flex,
	Text
} from '@chakra-ui/react'
import type { Answer, Question } from '@prisma/client'
import { useSession } from 'next-auth/react'
import type { FC } from 'react'

import log from './log'

type Props = { questions: Question[] }

const QuestionsTable: FC<Props> = ({ questions }): JSX.Element => {
	const { data: sessionData } = useSession()

	return (
		<TableContainer>
			<Table variant='simple'>
				<TableCaption fontWeight='bold'>Most Recent Published Questions</TableCaption>
				<Thead>
					<Tr>
						<Th>Publisher</Th>
						<Th>ID</Th>
						<Th>Question</Th>
						<Th>Answers</Th>
					</Tr>
				</Thead>
				<Tbody>
					{questions.map(question => (
						<Tr key={question.id}>
							<Td>
								<Avatar
									size='xs'
									src={sessionData?.user.image || ''}
									name={sessionData?.user.name || ''}
								/>
							</Td>
							<Td>{question.id.substring(0, 16) + '...'}</Td>
							<Td>{question.question}</Td>
							<Td>
								<Flex>
									{question.answers.map((answer: Answer) => (
										<Text
											color={answer.correct ? 'brand.accent' : ''}
											fontWeight={answer.correct ? 'black' : 'normal'}
											key={answer.id}
											ml={2}
										>
											{answer.text}
										</Text>
									))}
								</Flex>
							</Td>
						</Tr>
					))}
				</Tbody>
				<Tfoot>
					<Tr>
						<Th>Publisher</Th>
						<Th>ID</Th>
						<Th>Question</Th>
						<Th>Answers</Th>
					</Tr>
				</Tfoot>
			</Table>
		</TableContainer>
	)
}

export default QuestionsTable

// Path: src/components/questions-table.tsx
// Created at: 00:10:34 - 24/02/2023
// Language: Typescript
// Framework: React/Next.js
