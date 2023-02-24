/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from 'zod'

import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc'

export const questionRouter = createTRPCRouter({
	hello: publicProcedure.query(() => {
		return {
			greeting: `Hello!`
		}
	}),

	getAllQuestions: protectedProcedure.query(({ ctx }) => {
		return ctx.prisma.question.findMany({
			select: {
				id: true,
				createdAt: true,
				updatedAt: true,
				question: true,
				answers: {
					select: {
						id: true,
						text: true,
						correct: true,
						questionId: true
					}
				}
			}
		})
	}),

	addQuestion: protectedProcedure
		.input(
			z.object({
				question: z.string(),
				answers: z
					.object({
						text: z.string(),
						correct: z.boolean()
					})
					.array()
			})
		)
		.mutation(async ({ ctx, input }) => {
			const question = await ctx.prisma.question.create({
				data: {
					question: input.question,
					answers: {
						create: input.answers
					}
				}
			})

			return { ...question, answers: input.answers }
		})
})
