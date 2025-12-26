export type ClozeTestQuestion = {
    id: number;
    options: string[];
    correctAnswer: string;
};

export type ClozeTestExercise = {
    id: string;
    title: string;
    passage: string;
    questions: ClozeTestQuestion[];
};

export const clozeTestExercises: ClozeTestExercise[] = [
    {
        id: 'set-1',
        title: 'Industrial Revolution',
        passage: "The Industrial Revolution was a period of major industrialization and innovation that took place during the late 18th and early 19th centuries. It began in Great Britain and then ___<strong>(1)</strong>___ to other parts of the world. This era saw the development of new machines, new power sources, and new ways of organizing work. The textile industry, for example, was completely ___<strong>(2)</strong>___ by inventions like the spinning jenny and the power loom. These changes had a ___<strong>(3)</strong>___ impact on society, leading to urbanization, new social classes, and a modern, industrial economy. While it brought economic growth, it also created significant social challenges and ___<strong>(4)</strong>___ working conditions for many. The legacy of this period is complex, shaping the world we live in today in ___<strong>(5)</strong>___ ways.",
        questions: [
            {
                id: 1,
                options: ['vanished', 'spread', 'contained'],
                correctAnswer: 'spread',
            },
            {
                id: 2,
                options: ['transformed', 'ignored', 'hindered'],
                correctAnswer: 'transformed',
            },
            {
                id: 3,
                options: ['minimal', 'profound', 'temporary'],
                correctAnswer: 'profound',
            },
            {
                id: 4,
                options: ['excellent', 'safe', 'harsh'],
                correctAnswer: 'harsh',
            },
            {
                id: 5,
                options: ['countless', 'few', 'irrelevant'],
                correctAnswer: 'countless',
            },
        ],
    },
    {
        id: 'set-2',
        title: 'Photosynthesis',
        passage: "Photosynthesis is the process ___<strong>(1)</strong>___ which green plants, algae, and some bacteria convert light energy into chemical energy. This process is ___<strong>(2)</strong>___ for life on Earth as it produces oxygen, which most living organisms need to breathe. During photosynthesis, plants capture light energy using a pigment called chlorophyll, which gives them their green color. They use this energy to ___<strong>(3)</strong>___ carbon dioxide and water into glucose, a sugar that provides energy for the plant's growth. Oxygen is released as a ___<strong>(4)</strong>___. This entire process primarily takes place within specialized organelles called chloroplasts, found in plant cells. The efficiency of photosynthesis can be affected by various factors, including light intensity, carbon dioxide concentration, and ___<strong>(5)</strong>___.",
        questions: [
            {
                id: 1,
                options: ['by', 'from', 'through'],
                correctAnswer: 'by',
            },
            {
                id: 2,
                options: ['optional', 'essential', 'irrelevant'],
                correctAnswer: 'essential',
            },
            {
                id: 3,
                options: ['destroy', 'combine', 'separate'],
                correctAnswer: 'combine',
            },
            {
                id: 4,
                options: ['byproduct', 'main product', 'requirement'],
                correctAnswer: 'byproduct',
            },
            {
                id: 5,
                options: ['altitude', 'temperature', 'sound'],
                correctAnswer: 'temperature',
            },
        ],
    },
     {
        id: 'set-3',
        title: 'The Indian Constitution',
        passage: "The Constitution of India is the supreme law of the country. It lays down the framework that defines the fundamental political code, structure, procedures, powers, and duties of government institutions. It also sets out fundamental rights, directive principles, and the duties of citizens. It is the longest written constitution of any ___<strong>(1)</strong>___ country in the world. Dr. B. R. Ambedkar, the chairman of the Drafting Committee, is widely considered to be its chief ___<strong>(2)</strong>___. The constitution declares India a sovereign, socialist, secular, and democratic republic, assuring its citizens justice, equality, and liberty, and endeavors to promote ___<strong>(3)</strong>___ among them all. The constitution was ___<strong>(4)</strong>___ by the Constituent Assembly of India on 26 November 1949 and became effective on 26 January 1950. The date 26 January was chosen to ___<strong>(5)</strong>___ the Purna Swaraj declaration of independence of 1930.",
        questions: [
            {
                id: 1,
                options: ['federal', 'sovereign', 'unitary'],
                correctAnswer: 'sovereign',
            },
            {
                id: 2,
                options: ['critic', 'architect', 'opponent'],
                correctAnswer: 'architect',
            },
            {
                id: 3,
                options: ['fraternity', 'conflict', 'hierarchy'],
                correctAnswer: 'fraternity',
            },
            {
                id: 4,
                options: ['rejected', 'adopted', 'amended'],
                correctAnswer: 'adopted',
            },
            {
                id: 5,
                options: ['ignore', 'commemorate', 'challenge'],
                correctAnswer: 'commemorate',
            },
        ],
    },
    {
        id: 'set-4',
        title: 'The Indian Monsoon',
        passage: "The Indian monsoon is a large-scale sea breeze which occurs when the temperature on land is significantly warmer than the ocean temperature. This seasonal wind brings heavy rainfall, which is ___<strong>(1)</strong>___ for India's agriculture-based economy. The monsoon's arrival is eagerly awaited by farmers, as it ___<strong>(2)</strong>___ the water needed for crops like rice and sugarcane. However, an erratic monsoon can lead to severe ___<strong>(3)</strong>___, such as floods or droughts. Accurate forecasting of its onset and distribution is therefore of ___<strong>(4)</strong>___ importance to the nation's economic planning. Climate change is believed to be making the monsoon more unpredictable, posing a significant ___<strong>(5)</strong>___ to food security.",
        questions: [
            {
                id: 1,
                options: ['vital', 'optional', 'detrimental'],
                correctAnswer: 'vital',
            },
            {
                id: 2,
                options: ['reduces', 'provides', 'withholds'],
                correctAnswer: 'provides',
            },
            {
                id: 3,
                options: ['benefits', 'certainties', 'consequences'],
                correctAnswer: 'consequences',
            },
            {
                id: 4,
                options: ['paramount', 'minor', 'secondary'],
                correctAnswer: 'paramount',
            },
            {
                id: 5,
                options: ['advantage', 'challenge', 'solution'],
                correctAnswer: 'challenge',
            },
        ],
    },
    {
        id: 'set-5',
        title: 'Fundamental Rights',
        passage: "Fundamental Rights, enshrined in Part III of the Indian Constitution, guarantee civil liberties such that all Indians can lead their lives in peace and harmony as citizens of India. These rights are ___<strong>(1)</strong>___ from the Constitution of the United States. They are designed to protect citizens from the arbitrary ___<strong>(2)</strong>___ of power by the state. These rights are not absolute and are subject to reasonable restrictions. The judiciary acts as the ___<strong>(3)</strong>___ of these rights, and citizens can approach the Supreme Court directly for the enforcement of any of these rights. The right to equality, freedom, against exploitation, freedom of religion, cultural and educational rights, and the right to constitutional remedies are the six fundamental rights. They are considered an ___<strong>(4)</strong>___ part of the Constitution and are essential for the development of the personality of every individual and to ___<strong>(5)</strong>___ human dignity.",
        questions: [
            {
                id: 1,
                options: ['borrowed', 'copied', 'inspired'],
                correctAnswer: 'inspired',
            },
            {
                id: 2,
                options: ['exercise', 'distribution', 'limitation'],
                correctAnswer: 'exercise',
            },
            {
                id: 3,
                options: ['creator', 'guardian', 'destroyer'],
                correctAnswer: 'guardian',
            },
            {
                id: 4,
                options: ['expendable', 'integral', 'additional'],
                correctAnswer: 'integral',
            },
            {
                id: 5,
                options: ['diminish', 'preserve', 'question'],
                correctAnswer: 'preserve',
            },
        ],
    },
    {
        id: 'set-6',
        title: 'Vocabulary Integration',
        passage: "The researcher was ___<strong>(1)</strong>___ in her work, ensuring every detail was accurate. She knew that the ___<strong>(2)</strong>___ influence of fake news could harm society. While fame can be ___<strong>(3)</strong>___, true knowledge is lasting. Unlike her predecessor, she was ___<strong>(4)</strong>___ and loved collaborating with her team. The ___<strong>(5)</strong>___ spread of smartphones has made information access easier than ever.",
        questions: [
            { id: 1, options: ['Lethargic', 'Meticulous', 'Capricious'], correctAnswer: 'Meticulous' },
            { id: 2, options: ['Pernicious', 'Benevolent', 'Affable'], correctAnswer: 'Pernicious' },
            { id: 3, options: ['Permanent', 'Ephemeral', 'Lethargic'], correctAnswer: 'Ephemeral' },
            { id: 4, options: ['Aloof', 'Gregarious', 'Bashful'], correctAnswer: 'Gregarious' },
            { id: 5, options: ['Rare', 'Obscure', 'Ubiquitous'], correctAnswer: 'Ubiquitous' }
        ]
    }
];
