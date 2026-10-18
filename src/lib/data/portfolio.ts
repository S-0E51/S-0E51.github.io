import type { AssetPath } from '$app/types';

export interface Project {
	slug: string;
	title: string;
	subtitle?: string;
	category: string;
	coverTitle: string;
	description: string;
	period: string;
	technologyGroups: { title: string; items: string[] }[];
	highlights: string[];
	repositoryUrl: string | null;
	status: 'Demo' | 'In progress' | 'Completed' | 'Released';
}

export interface TechnologyGroup {
	id: string;
	title: string;
	items: { name: string }[];
}

export interface CourseworkGroup {
	area: string;
	courses: string[];
}

export interface EducationEntry {
	qualification: string;
	institution: string;
	period: string;
	detail?: string;
	coursework?: CourseworkGroup[];
}

export interface TrainingEntry {
	title: string;
	provider: string;
	date: string;
	description: string;
	sourceUrl: string;
}

export interface WorkExperience {
	role: string;
	employer: string;
	period: string;
	summary: string;
}

// Owner-provided details and public profile facts. Do not infer professional expertise.
const githubProfileUrl = 'https://github.com/S-0E51';

export const profile = {
	name: 'Shan Li Chin',
	initials: 'SLC',
	githubUrl: githubProfileUrl,
	email: 'shanlichin@live.com',
	linkedinUrl: 'https://www.linkedin.com/in/shan-li-chin',
	introduction:
		'A computer science graduate with a minor in cybersecurity, exploring opportunities in full-stack development, data science and analysis, and IT.',
	about: [
		"I'm curious about how technology works and what I can build with it. My background in computer science and cybersecurity gives me a foundation in software development, data, and IT.",
		'I enjoy turning ideas into projects and learning through hands-on experimentation. My work has involved AI agents, automation, natural language processing (NLP), and computer vision, including optical character recognition (OCR).',
		'In my free time, I like tinkering with tools and building small projects that make everyday tasks easier. I also enjoy gaming, drawing, and learning about Japanese culture and language.'
	],
	careerInterests: [
		'Full-stack development',
		'Data science and analysis',
		'Information technology (IT)'
	],
	// A filename under static/, e.g. resume.pdf. Add the actual file before setting this.
	resumePath: null as AssetPath | null
};

// Keep this overview aligned with the project tags, using broad capability labels for models.
// These lists do not imply proficiency ratings.
export const technologyGroups: TechnologyGroup[] = [
	{
		id: 'full-stack',
		title: 'Full-stack development (frontend/backend)',
		items: [
			{ name: 'HTML, CSS & JavaScript' },
			{ name: 'TypeScript & SvelteKit' },
			{ name: 'React & Vue.js' },
			{ name: 'Tailwind CSS' },
			{ name: 'Framer Motion' },
			{ name: 'Python, Flask & FastAPI' },
			{ name: 'Node.js & Express' },
			{ name: 'SQLite & HTTP/JSON APIs' },
			{ name: 'RESTful APIs' }
		]
	},
	{
		id: 'desktop',
		title: 'Desktop development',
		items: [
			{ name: 'Rust' },
			{ name: 'Tauri' },
			{ name: 'Svelte' },
			{ name: 'TypeScript' },
			{ name: 'Python & PyQt6' },
			{ name: 'Screen capture & clipboard integration' },
			{ name: 'diskcache' }
		]
	},
	{
		id: 'ai-workflows',
		title: 'Machine learning & AI workflows',
		items: [
			{ name: 'NLP, tokenization & language parsing' },
			{ name: 'Computer vision & OCR' },
			{ name: 'OpenCV & Pillow' },
			{ name: 'PyTorch & PaddlePaddle' },
			{ name: 'Hugging Face Transformers' },
			{ name: 'ONNX Runtime & llama.cpp' },
			{ name: 'spaCy' },
			{ name: 'Machine translation' },
			{ name: 'Text embeddings & semantic search' },
			{ name: 'Sentence Transformers & ChromaDB' },
			{ name: 'Vision-language models & GGUF' },
			{ name: 'LLM APIs' },
			{ name: 'Ollama & Open WebUI' }
		]
	},
	{
		id: 'data-evaluation',
		title: 'Data & model evaluation',
		items: [
			{ name: 'NumPy' },
			{ name: 'pandas' },
			{ name: 'scikit-learn' },
			{ name: 'Model evaluation & benchmarking' },
			{ name: 'SacreBLEU' }
		]
	},
	{
		id: 'cybersecurity',
		title: 'Cybersecurity tools',
		items: [{ name: 'Splunk' }, { name: 'Burp Suite' }, { name: 'Wireshark' }, { name: 'Nmap' }]
	},
	{
		id: 'systems-tools',
		title: 'Systems & development tools',
		items: [{ name: 'Docker' }, { name: 'Linux' }, { name: 'PowerShell' }, { name: 'Git' }]
	}
];

// Current work comes first, followed by dated projects newest first.
// A null repository URL means no public link yet.
// Keep summaries grounded in owner-provided details and reviewed source.
export const projects: Project[] = [
	{
		slug: 'sakatsu-reader',
		title: 'Sakatsu Reader — A Japanese Study Tool',
		category: 'Desktop app / Japanese study',
		coverTitle: 'Sakatsu\nReader',
		description:
			'A personal Japanese reading and study app that brings together experience from my earlier text-learning and OCR demos. I continue to experiment with and maintain it for my own use.',
		period: 'July 2026 - Present',
		technologyGroups: [
			{ title: 'App stack', items: ['Rust', 'Tauri', 'Svelte', 'TypeScript'] },
			{
				title: 'Machine learning & NLP',
				items: [
					'ONNX Runtime',
					'Computer vision & OCR',
					'Japanese NLP',
					'Tokenization & parsing',
					'Machine translation'
				]
			},
			{
				title: 'Optional inference',
				items: ['Vision-language models', 'llama.cpp', 'GGUF']
			},
			{
				title: 'Evaluation & experiments',
				items: [
					'Python',
					'PyTorch',
					'PaddlePaddle',
					'Hugging Face Transformers',
					'Transformer embeddings',
					'LLM evaluation',
					'NumPy',
					'Translation quality evaluation',
					'SacreBLEU'
				]
			}
		],
		highlights: [
			'Combined screen, clipboard, and image capture with OCR and Japanese text analysis.',
			'Built a Rust core with a Svelte and TypeScript interface for dictionary lookups, furigana, and grammar study.',
			'Integrated local OCR and translation models, with vocabulary export through AnkiConnect.'
		],
		repositoryUrl: null,
		status: 'In progress'
	},
	{
		slug: 'daisho-ocr',
		title: 'Japanese OCR Tool Demo',
		category: 'Desktop app / Japanese OCR',
		coverTitle: 'OCR\nDemo',
		description:
			'A Windows desktop demo for capturing Japanese text from the screen, running OCR, and sending results to the clipboard or a companion reader. This earlier work helped shape Sakatsu Reader.',
		period: 'July 2026',
		technologyGroups: [
			{ title: 'App stack', items: ['Python', 'PyQt6'] },
			{
				title: 'OCR & image processing',
				items: [
					'Computer vision & OCR',
					'OpenCV',
					'Pillow',
					'NumPy',
					'PyTorch',
					'PaddlePaddle',
					'ONNX Runtime'
				]
			},
			{
				title: 'Optional vision analysis',
				items: ['Vision-language models', 'Hugging Face Transformers', 'Ollama']
			},
			{
				title: 'Desktop integration',
				items: ['Screen capture', 'Clipboard integration', 'HTTP/JSON APIs', 'diskcache']
			}
		],
		highlights: [
			'Built a resizable capture overlay with configurable global hotkeys and clipboard output.',
			'Added image preprocessing, switchable OCR engines, and cached recognition results.',
			'Connected OCR output to a customized japReader companion for Japanese reading and study.'
		],
		repositoryUrl: `${githubProfileUrl}/daisho-ocr`,
		status: 'Demo'
	},
	{
		slug: 'jplt',
		title: 'Japanese Text Learning Tool (JPLT) Demo',
		category: 'Web app / Japanese text analysis',
		coverTitle: 'JPLT\nDemo',
		description:
			'A Japanese text learning demo combining image-to-text extraction, language processing, and an interactive learning interface. This earlier work helped lay the foundation for Sakatsu Reader.',
		period: 'June 2025 - August 2025',
		technologyGroups: [
			{
				title: 'App stack',
				items: [
					'Vue.js',
					'JavaScript',
					'Node.js',
					'Express',
					'Python',
					'FastAPI',
					'SQLite',
					'Tailwind CSS'
				]
			},
			{
				title: 'OCR & NLP',
				items: ['Computer vision & OCR', 'Japanese NLP', 'Tokenization & parsing', 'spaCy']
			},
			{
				title: 'Optional ML & search',
				items: [
					'PyTorch',
					'Hugging Face Transformers',
					'Transformer embeddings',
					'Sentence Transformers',
					'ChromaDB',
					'Semantic search',
					'scikit-learn',
					'NumPy',
					'pandas'
				]
			}
		],
		highlights: [
			'Connected a Vue.js frontend, Node.js backend, and FastAPI services for text analysis and OCR.',
			'Combined Japanese tokenization and dictionary data with furigana, definitions, and grammar explanations.'
		],
		repositoryUrl: `${githubProfileUrl}/JPLT`,
		status: 'Demo'
	},
	{
		slug: 'right-to-know',
		title: 'Right-to-Know Demo — An AI auditing tool',
		subtitle: 'Senior Capstone Project',
		category: 'Web app / AI auditing',
		coverTitle: 'Right\nto Know',
		description:
			'A senior capstone project exploring model auditing through a web interface for interacting with large language models.',
		period: 'August 2024 - April 2025',
		technologyGroups: [
			{
				title: 'App stack',
				items: ['React', 'JavaScript', 'Python', 'Flask', 'Tailwind CSS', 'Framer Motion']
			},
			{ title: 'LLM integration', items: ['LLM APIs', 'Ollama', 'Open WebUI'] }
		],
		highlights: [
			'Built a React frontend and Flask API for model prompts, responses, and conversation history.',
			'Connected Ollama inference endpoints with asynchronous requests, loading states, and error handling.'
		],
		repositoryUrl: `${githubProfileUrl}/Right-to-Know-Demo`,
		status: 'Demo'
	}
];

// Website summaries adapted from the owner-provided resume; the source PDF stays outside the site.
export const education: EducationEntry[] = [
	{
		qualification: 'Bachelor of Science in Computer Science',
		institution: 'Florida Atlantic University',
		period: 'August 2021 - August 2025',
		detail: 'Minor in Cybersecurity',
		// Selected completed courses from the owner-provided transcript, not proficiency ratings.
		coursework: [
			{
				area: 'Full-stack development',
				courses: [
					'Full-Stack Web Development',
					'Principles of Software Engineering',
					'Data Structures and Algorithm Analysis'
				]
			},
			{
				area: 'Data science & analysis foundations',
				courses: [
					'Introduction to Database Structures',
					'Stochastic Models for Computer Science',
					'Matrix Theory'
				]
			},
			{
				area: 'IT & security',
				courses: [
					'Computer Operating Systems',
					'Communication Networks',
					'Foundations of Cybersecurity',
					'Applied Cryptography and Security'
				]
			}
		]
	},
	{
		qualification: 'Associate of Arts',
		institution: 'Palm Beach State College',
		period: 'August 2018 - August 2021'
	}
];

export const training: TrainingEntry[] = [
	{
		title: 'Intro to Web Development',
		provider: 'CodePath',
		date: 'December 2024',
		description:
			'Introductory coursework in HTML, CSS, and JavaScript, focused on responsive design and interactive web interfaces.',
		sourceUrl: 'https://www.codepath.org/courses/web-development'
	},
	{
		title: 'Intro to Cybersecurity',
		provider: 'CodePath',
		date: 'May 2024',
		description:
			'Introductory coursework in digital security, common threats, cryptography, and basic defenses for networks and systems.',
		sourceUrl: 'https://www.codepath.org/courses/cybersecurity'
	}
];

export const additionalExperience: WorkExperience[] = [
	{
		role: 'Stockroom Associate',
		employer: 'Hollister',
		period: 'November 2021 - January 2022',
		summary:
			'Organized inventory, processed shipments and online orders, and supported store displays.'
	},
	{
		role: 'Sales Floor Associate',
		employer: 'Bed Bath & Beyond',
		period: 'November 2018 - June 2020',
		summary: 'Assisted customers, restocked shelves, maintained displays, and supported checkout.'
	}
];
