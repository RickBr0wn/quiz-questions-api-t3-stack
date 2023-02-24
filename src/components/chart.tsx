import type { FC } from 'react'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	// Legend,
	LineElement,
	PointElement,
	Title,
	Tooltip
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Flex, Text } from '@chakra-ui/react'

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip
	// Legend
)

const data = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
	datasets: [
		{
			data: [10, 40, 20, 30, 70, 40, 60, 30]
		}
	]
}

const options = {
	// plugins: {
	//   legend: {
	//     display: false,
	//   },
	// },
	type: 'line',
	data,
	elements: {
		line: {
			tension: 0,
			borderWidth: 6,
			borderColor: 'hsl(73,100%,69%)',
			backgroundColor: 'hsl(73,100%,69%)'
		},
		point: {
			radius: 10,
			hitRadius: 0
		}
	}
	// scales: {
	//   xAxis: {
	//     display: false,
	//   },
	//   yAxis: {
	//     display: false,
	//   },
	// },
}

type Props = object

const Chart: FC<Props> = (): JSX.Element => {
	return (
		<Flex flexDir='column' w='full'>
			<Text fontWeight='bold'>Publishing Frequency</Text>
			<Line data={data} options={options} className='mt-6' />
		</Flex>
	)
}

export default Chart

// Path: src/components/chart.tsx
// Created at: 23:29:25 - 23/02/2023
// Language: Typescript
// Framework: React/Next.js
