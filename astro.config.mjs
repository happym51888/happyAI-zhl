// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'HappyAI · ZHL',
			description: 'Happy 的 AI 学习笔记、知识地图与实践记录',
			favicon: '/favicon.svg',
			customCss: ['./src/custom.css'],
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/happym51888/happyAI-zhl',
				},
			],
			sidebar: [
				{
					label: '开始学习',
					items: [
						{ label: '学习路线', slug: 'learning-path' },
						{ label: 'AI 全景概览', slug: 'ai-basics' },
					],
				},
				{
					label: '核心知识',
					items: [
						{ label: 'LLM 基础', slug: 'llm' },
						{ label: 'RAG 与知识检索', slug: 'rag' },
						{ label: 'AI Agent', slug: 'agent' },
					],
				},
				{
					label: '框架与工程',
					items: [
						{ label: 'LangChain 与 LangGraph', slug: 'frameworks' },
						{ label: '评估、追踪与安全', slug: 'production' },
					],
				},
				{
					label: '实践与资源',
					items: [
						{ label: 'AI Agent 全景图', slug: 'projects/ai-agent-whole-picture' },
						{ label: '推荐课程', slug: 'resources/training' },
					],
				},
			],
		}),
	],
});
