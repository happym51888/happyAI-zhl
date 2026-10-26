export type Card = {
	id: string;
	label: string;
	kind: 'hero' | 'photo' | 'link' | 'list' | 'note' | 'quote' | 'timeline' | 'stats' | 'rows' | 'terminal' | 'project';
	x: number;
	y: number;
	w: number;
	tone?: 'blue' | 'yellow' | 'pink' | 'green' | 'violet' | 'plain';
	eyebrow?: string;
	heading?: string;
	body?: string;
	items?: string[];
	steps?: { time: string; title: string; note: string }[];
	stats?: { value: string; unit?: string; label: string }[];
	rows?: { tag: string; title: string; note: string }[];
	tags?: string[];
	href?: string;
	cta?: string;
	quote?: string;
	source?: string;
	cover?: string;
	image?: string;
	imageAlt?: string;
	role?: string;
	status?: string;
	number?: string;
};

export type Scene = {
	id: 'home' | 'works' | 'system';
	width: number;
	height: number;
	cards: Card[];
	links: [string, string][];
};

export const homeScene: Scene = {
	id: 'home',
	width: 1560,
	height: 880,
	cards: [
		{
			id: 'home-hero',
			label: 'Happy',
			kind: 'hero',
			x: 80,
			y: 80,
			w: 380,
			tone: 'yellow',
			eyebrow: 'HAPPY / 青岛',
			heading: 'Happy',
			body: '做了 12 年通信软件，这两年专注大模型应用落地：让 AI 查得准、做得稳，做成的经验能留下来。',
			tags: ['RAG', 'AI Agent', '核心网', '带团队'],
		},
		{
			id: 'home-stats',
			label: '三个数字',
			kind: 'stats',
			x: 560,
			y: 60,
			w: 420,
			tone: 'blue',
			eyebrow: 'IN NUMBERS',
			stats: [
				{ value: '12', unit: '年', label: '软件研发，C/C++ 写了 10 年' },
				{ value: '≈60', unit: '人', label: '在用我带队做的 AI 工作助手' },
				{ value: '15 天 → 2 小时', label: '一键安装升级，把现场部署缩短' },
			],
		},
		{
			id: 'home-flagship',
			label: '代表作 · RegisterKB',
			kind: 'project',
			x: 1080,
			y: 90,
			w: 400,
			tone: 'pink',
			number: '代表作',
			status: '约 60 人在用',
			heading: 'RegisterKB · 团队 AI 工作助手',
			body: '5000 多篇文档做成能引用出处的知识库，Agent 生成步骤、人审批后执行，成功经验沉淀成 Skill。',
			image: '/images/registerkb/cover.webp',
			imageAlt: '漫画：工程师把问题交给 RegisterKB',
			cta: '看案例',
			href: '/projects/registerkb/',
		},
		{
			id: 'home-now',
			label: '最近在忙',
			kind: 'list',
			x: 120,
			y: 540,
			w: 360,
			tone: 'green',
			eyebrow: 'NOW / 2026',
			heading: '最近在忙',
			items: ['做：把 AI 助手用到更多场景', '学：Agent 评测和多智能体协作', '写：公众号「HappyAI报」'],
		},
		{
			id: 'home-motto',
			label: '做事的方式',
			kind: 'quote',
			x: 580,
			y: 590,
			w: 360,
			tone: 'blue',
			quote: '从业务问题出发，做能落地、能验证的东西。',
			source: '— 我做事的方式',
		},
		{
			id: 'home-outro',
			label: '联系我',
			kind: 'terminal',
			x: 1060,
			y: 560,
			w: 420,
			tone: 'plain',
		},
	],
	links: [
		['home-hero', 'home-stats'],
		['home-stats', 'home-flagship'],
		['home-hero', 'home-now'],
		['home-motto', 'home-outro'],
	],
};

export const worksScene: Scene = {
	id: 'works',
	width: 1600,
	height: 880,
	cards: [
		{
			id: 'works-01',
			label: 'RegisterKB',
			kind: 'project',
			number: 'dim_01 · 代表作',
			status: '约 60 人在用',
			x: 80,
			y: 90,
			w: 330,
			tone: 'pink',
			heading: 'RegisterKB · 团队 AI 工作助手',
			body: '5000 多篇内部文档做成能引用出处的知识库；Agent 生成步骤，人审批后执行，成功经验沉淀成 Skill。',
			role: '团队负责人：架构、核心代码、验收',
			image: '/images/registerkb/cover.webp',
			imageAlt: '漫画：工程师把问题交给 RegisterKB',
			tags: ['RAG', 'LangGraph', 'Human-in-the-loop'],
			cta: '查看案例',
			href: '/projects/registerkb/',
		},
		{
			id: 'works-02',
			label: 'AI 辅助研发流程',
			kind: 'project',
			number: 'dim_02',
			status: '约 100 人在用',
			x: 450,
			y: 60,
			w: 330,
			tone: 'violet',
			heading: 'AI 辅助研发全流程',
			body: '几个分工不同的智能体接力，把需求、设计、编码、测试串成一条链，关键评审由人把关。',
			role: '全程参与：智能体规则、工程实现、验证',
			cover: 'AGENTS',
			tags: ['多智能体', 'BMAD', 'Prompt 工程'],
		},
		{
			id: 'works-03',
			label: '一键安装升级',
			kind: 'project',
			number: 'dim_03',
			status: '15 天 → 2 小时',
			x: 820,
			y: 100,
			w: 330,
			tone: 'yellow',
			heading: '一键安装升级 + GitOps',
			body: '一条命令完成检查、升级、接入网管和健康检查，失败能断点续跑、一键回退；配置进 Git，自动部署和回滚。',
			role: '项目总负责人',
			cover: 'GitOps',
			tags: ['Python', 'GitOps', '云原生'],
		},
		{
			id: 'works-04',
			label: 'HappyAI 知识库',
			kind: 'project',
			number: 'dim_04',
			status: '持续更新',
			x: 1190,
			y: 70,
			w: 330,
			tone: 'green',
			heading: 'HappyAI 知识库 · 公众号',
			body: '学大模型、Agent 和知识库的笔记，整理成网站和公众号「HappyAI报」。这个网站也是和 AI 一起做的。',
			role: '一个人 + AI',
			cover: 'NOTES',
			tags: ['写作', 'Astro', '学习笔记'],
			cta: '打开知识库',
			href: '/notes/',
		},
		{
			id: 'works-earlier',
			label: '更早的核心网项目',
			kind: 'list',
			x: 590,
			y: 590,
			w: 420,
			tone: 'blue',
			eyebrow: 'EARLIER',
			heading: '更早的核心网项目',
			items: [
				'4G/5G 负载均衡与过载控制 · 模块负责人',
				'5G 设备间身份认证 · 162 个用例，105 个自动化',
				'云原生健康检查与故障诊断 · 一条命令收集日志',
			],
		},
	],
	links: [
		['works-01', 'works-02'],
		['works-02', 'works-03'],
		['works-03', 'works-04'],
		['works-03', 'works-earlier'],
	],
};

export const systemScene: Scene = {
	id: 'system',
	width: 1440,
	height: 1000,
	cards: [
		{
			id: 'sys-photo',
			label: '形象',
			kind: 'photo',
			x: 80,
			y: 80,
			w: 270,
			tone: 'blue',
		},
		{
			id: 'sys-abilities',
			label: '能力地图',
			kind: 'rows',
			x: 430,
			y: 50,
			w: 420,
			tone: 'yellow',
			eyebrow: 'CAPABILITY MAP',
			heading: '我能做什么',
			rows: [
				{ tag: 'AI', title: '大模型应用', note: 'RAG 混合检索、LangGraph Agent、人工审批节点、评测集' },
				{ tag: 'ENG', title: '工程交付', note: 'C/C++ 10 年 + Python，从方案设计到上线、升级回滚' },
				{ tag: 'LEAD', title: '带团队', note: '多个 4G/5G 和 AI 项目负责人，部门技术招聘负责人' },
				{ tag: 'TEL', title: '通信领域', note: '核心网用户数据、身份认证、负载均衡，3G 到 5G' },
			],
		},
		{
			id: 'sys-timeline',
			label: '一路走来',
			kind: 'timeline',
			x: 930,
			y: 70,
			w: 400,
			tone: 'blue',
			eyebrow: 'MY JOURNEY',
			heading: '一路走来',
			steps: [
				{ time: '2014', title: '毕业入行', note: '通信工程本科，做 3G/4G 核心网软件' },
				{ time: '2016', title: '进入通信设备大厂', note: '核心网用户数据和身份认证系统' },
				{ time: '之后', title: '成为负责人', note: '负载均衡模块；一键安装升级项目' },
				{ time: '2024', title: '转向大模型应用', note: 'RAG、Agent，开始写 HappyAI 笔记' },
				{ time: '2026', title: 'AI 助手推广', note: '部门内约 60 人在用' },
			],
		},
		{
			id: 'sys-motto',
			label: '一句话',
			kind: 'quote',
			x: 80,
			y: 470,
			w: 290,
			tone: 'blue',
			quote: '1 person + AI = 1 team',
			source: '— 这两年最实在的一句话',
		},
		{
			id: 'sys-howiwork',
			label: '我怎么做事',
			kind: 'rows',
			x: 440,
			y: 540,
			w: 420,
			tone: 'green',
			eyebrow: 'HOW I WORK',
			heading: '我怎么做事',
			rows: [
				{ tag: '01', title: '从业务问题出发', note: '先弄清楚谁在疼、疼在哪，再拆成能落地、能验证的方案。' },
				{ tag: '02', title: 'AI 要能审批、能回退', note: '让 AI 动手可以，但要有允许名单、人工确认和执行日志。' },
				{ tag: '03', title: '学完就写出来', note: '写了就发。能讲清楚，才算真学会。' },
			],
		},
		{
			id: 'sys-outside',
			label: '工作之外',
			kind: 'rows',
			x: 930,
			y: 550,
			w: 400,
			tone: 'pink',
			eyebrow: 'BEYOND WORK',
			heading: '工作之外',
			rows: [
				{ tag: '张罗', title: '爱组织事', note: '首届青岛黑客马拉松总负责人；员工文化团队负责人多年' },
				{ tag: '志愿', title: '最佳志愿者', note: '公司总裁颁的奖' },
				{ tag: '开源', title: '开源竞赛', note: '太乙全国开源竞赛，全国前 1%' },
				{ tag: '写作', title: 'HappyAI报', note: '公众号，记录学大模型的过程' },
			],
		},
	],
	links: [
		['sys-photo', 'sys-abilities'],
		['sys-abilities', 'sys-timeline'],
		['sys-photo', 'sys-motto'],
		['sys-abilities', 'sys-howiwork'],
		['sys-timeline', 'sys-outside'],
	],
};

const heightByKind: Record<Card['kind'], number> = {
	hero: 300,
	photo: 320,
	link: 200,
	list: 230,
	note: 150,
	quote: 120,
	timeline: 300,
	stats: 300,
	rows: 320,
	terminal: 250,
	project: 340,
};

export function estimateHeight(card: Card): number {
	if (card.kind === 'project') return 300 + (card.image ? 30 : 0) + (card.tags ? 36 : 0) + (card.role ? 24 : 0) + (card.href ? 30 : 0);
	if (card.kind === 'timeline') return 120 + (card.steps?.length ?? 0) * 60;
	if (card.kind === 'rows') return 120 + (card.rows?.length ?? 0) * 70;
	return heightByKind[card.kind] ?? 200;
}

export const scenes: Scene[] = [homeScene, worksScene, systemScene];

export const sceneTabs = [
	{ id: 'home', index: '01', label: '主页' },
	{ id: 'works', index: '02', label: '作品集' },
	{ id: 'system', index: '03', label: '我的 OS' },
] as const;
