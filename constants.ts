
import { Stat, Quest, InventoryItem, Repository } from './types';

export const INITIAL_STATS: Stat[] = [
  { label: 'REACT_JS', value: 23, max: 99, unit: 'HP' },
  { label: 'UI_DESIGN', value: 33, max: 99, unit: 'HP' },
  { label: 'PYTHON', value: 59, max: 99, unit: 'HP' }
];

export const INITIAL_QUESTS: Quest[] = [
  {
    id: 'q1',
    title: 'Adi Shankara Institute of Engineering and Technology',
    date: '2022–2026 | Current',
    status: 'ACTIVE',
    description: 'CGPA: 6.0',
    order: 1
  },
  {
    id: 'q2',
    title: 'St. Columbas School',
    date: '2009–2022',
    status: 'COMPLETED',
    description: '',
    order: 2
  }
];

export const INVENTORY_ITEMS: InventoryItem[] = [
  { id: 'i1', label: 'DATA_VAULT', icon: 'database' },
  { id: 'i2', label: 'MARKET_V1', icon: 'shopping_bag' },
  { id: 'i3', label: 'NIMBUS', icon: 'cloud' },
  { id: 'i4', label: 'EMPTY', icon: 'add_box', empty: true }
];

export const REPOSITORIES: Repository[] = [
  {
    id: 'repo1',
    title: 'ai-agents-using-langchain',
    description: 'AI agents built using LangChain for LLM workflows and tool-based reasoning.',
    url: 'https://github.com/Adil-baby/ai-agents-using-langchain'
  },
  {
    id: 'repo2',
    title: 'eeg-signal-model-',
    description: 'EEG signal processing and machine learning models for brain-signal analysis.',
    url: 'https://github.com/Adil-baby/eeg-signal-model-'
  },
  {
    id: 'repo3',
    title: 'Whatsapp-bot-',
    description: 'WhatsApp automation bot built using Node.js and Baileys library.',
    url: 'https://github.com/Adil-baby/Whatsapp-bot-'
  },
  {
    id: 'repo4',
    title: 'elderly-assistant-bot',
    description: 'Python-based assistant bot designed to help elderly users with basic tasks.',
    url: 'https://github.com/Adil-baby/elderly-assistant-bot'
  },
  {
    id: 'repo5',
    title: 'youtube-downloader',
    description: 'Python tool for downloading YouTube videos or audio locally.',
    url: 'https://github.com/Adil-baby/youtube-downloader'
  },
  {
    id: 'repo6',
    title: 'weather-alert-app',
    description: 'Python application that monitors weather and sends alerts.',
    url: 'https://github.com/Adil-baby/weather-alert-app'
  },
  {
    id: 'repo7',
    title: 'react-job-portal',
    description: 'React-based job portal web application developed as a college project.',
    url: 'https://github.com/Adil-baby/react-job-portal'
  },
  {
    id: 'repo8',
    title: 'Sparse-matrix',
    description: 'Implementation and handling of sparse matrix data structures.',
    url: 'https://github.com/Adil-baby/Sparse-matrix'
  }
];
