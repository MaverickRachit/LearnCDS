export type Sentence = {
  id: string;
  text: string;
};

export type ReorderingExercise = {
  id: string;
  title: string;
  fixedIndices: number[];
  sentences: Sentence[];
  correctOrderIds: string[];
};

export const sentenceReorderingExercises: ReorderingExercise[] = [
    {
        id: 'set-1',
        title: 'Exercise Set 1: Global Warming',
        fixedIndices: [0, 5],
        sentences: [
            { id: 's1-1', text: 'S1: Global warming, an existential threat, is primarily driven by human activities.' },
            { id: 's1-p', text: 'P: The consequences include rising sea levels, extreme weather events, and loss of biodiversity.' },
            { id: 's1-q', text: 'Q: The primary cause of this phenomenon is the emission of greenhouse gases into the atmosphere.' },
            { id: 's1-r', text: 'R: These gases, such as carbon dioxide and methane, trap heat and lead to a gradual increase in Earth\'s average temperature.' },
            { id: 's1-s', text: 'S: To mitigate its effects, international cooperation and a shift towards renewable energy are essential.' },
            { id: 's1-6', text: 'S6: Therefore, addressing this challenge requires immediate and concerted global action.' },
        ],
        correctOrderIds: ['s1-1', 's1-q', 's1-r', 's1-p', 's1-s', 's1-6'],
    },
    {
        id: 'set-2',
        title: 'Exercise Set 2: The Indus Valley Civilization',
        fixedIndices: [0, 5],
        sentences: [
            { id: 's2-1', text: 'S1: The Indus Valley Civilization was one of the world\'s earliest urban civilizations.' },
            { id: 's2-p', text: 'P: It was noted for its impressive, organized cities, such as Mohenjo-Daro and Harappa.' },
            { id: 's2-q', text: 'Q: These cities featured advanced drainage systems, multi-story brick houses, and a grid-like layout.' },
            { id: 's2-r', text: 'R: The civilization\'s economy was based on agriculture and trade, with evidence of trade links with Mesopotamia.' },
            { id: 's2-s', text: 'S: The reasons for its decline around 1800 BCE remain a topic of scholarly debate.' },
            { id: 's2-6', text: 'S6: Its legacy, however, continues to influence the cultural fabric of the Indian subcontinent.' },
        ],
        correctOrderIds: ['s2-1', 's2-p', 's2-q', 's2-r', 's2-s', 's2-6'],
    },
    {
        id: 'set-3',
        title: 'Exercise Set 3: The Role of the Reserve Bank of India',
        fixedIndices: [0, 5],
        sentences: [
            { id: 's3-1', text: 'S1: The Reserve Bank of India (RBI) is India\'s central banking institution.' },
            { id: 's3-p', text: 'P: Its primary function is to manage the country\'s currency and credit systems.' },
            { id: 's3-q', text: 'Q: It also acts as the regulator and supervisor of the financial system.' },
            { id: 's3-r', text: 'R: The RBI is responsible for formulating monetary policy to maintain price stability while considering the objective of growth.' },
            { id: 's3-s', text: 'S: Furthermore, it manages the foreign exchange reserves of the country.' },
            { id: 's3-6', text: 'S6: Thus, the RBI plays a crucial role in the economic stability and development of India.' },
        ],
        correctOrderIds: ['s3-1', 's3-p', 's3-q', 's3-r', 's3-s', 's3-6'],
    },
    {
        id: 'set-4',
        title: 'Exercise Set 4: The Green Revolution',
        fixedIndices: [0, 5],
        sentences: [
            { id: 's4-1', text: 'S1: The Green Revolution in India was a period when agriculture was converted into an industrial system.' },
            { id: 's4-p', text: 'P: This was made possible by the adoption of modern methods and technology.' },
            { id: 's4-q', text: 'Q: The key developments were the introduction of high-yielding variety (HYV) seeds.' },
            { id: 's4-r', text: 'R: It led to a massive increase in the production of food grains, particularly wheat and rice.' },
            { id: 's4-s', text: 'S: This initiative helped the country achieve self-sufficiency in food production.' },
            { id: 's4-6', text: 'S6: Consequently, it transformed India from a food-deficient country into one of the world\'s leading agricultural nations.' },
        ],
        correctOrderIds: ['s4-1', 's4-p', 's4-q', 's4-r', 's4-s', 's4-6'],
    },
    {
        id: 'set-5',
        title: 'Exercise Set 5: India\'s Space Program',
        fixedIndices: [0, 5],
        sentences: [
            { id: 's5-1', text: 'S1: India\'s space program, managed by the Indian Space Research Organisation (ISRO), has a rich history of remarkable achievements.' },
            { id: 's5-p', text: 'P: ISRO has successfully launched numerous satellites for communication, navigation, and Earth observation.' },
            { id: 's5-q', text: 'Q: It is recognized globally for its cost-effective missions, such as the Mars Orbiter Mission (Mangalyaan).' },
            { id: 's5-r', text: 'R: The development of indigenous launch vehicles like the PSLV and GSLV has been a cornerstone of its success.' },
            { id: 's5-s', text: 'S: These capabilities have made India a significant player in the global space industry.' },
            { id: 's5-6', text: 'S6: With ambitious future projects, ISRO continues to push the boundaries of space exploration.' },
        ],
        correctOrderIds: ['s5-1', 's5-r', 's5-p', 's5-q', 's5-s', 's5-6'],
    },
    {
        id: 'set-6',
        title: 'Exercise Set 6: Vocabulary Integration',
        fixedIndices: [0, 5],
        sentences: [
            { id: 's6-1', text: 'S1: The leader was known for his capricious moods, making him very unpredictable.' },
            { id: 's6-p', text: 'P: He could be ambivalent about important decisions, frustrating his advisors.' },
            { id: 's6-q', text: 'Q: One day he would be gregarious and sociable, the next he would be completely aloof.' },
            { id: 's6-r', text: 'R: This mercurial nature was a bane to his administration.' },
            { id: 's6-s', text: 'S: His supporters, however, accepted these whims with alacrity.' },
            { id: 's6-6', text: 'S6: Ultimately, his tenure was as ephemeral as a mayfly.' },
        ],
        correctOrderIds: ['s6-1', 's6-q', 's6-r', 's6-p', 's6-s', 's6-6'],
    }
];
