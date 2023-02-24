import type { FC } from 'react'
import ProtectedLayout from '~/components/protected-layout'

type Props = object

const Publish: FC<Props> = (): JSX.Element => {
	return (
		<ProtectedLayout>
			<h1>Publish</h1>
		</ProtectedLayout>
	)
}

export default Publish

// Path: src/pages/publish.tsx
// Created at: 02:01:14 - 24/02/2023
// Language: Typescript
// Framework: React/Next.js
