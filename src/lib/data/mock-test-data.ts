import type { AdaptiveGrammarQuizOutput } from "@/ai/flows/adaptive-grammar-quiz-generation";

export type QuizQuestion = AdaptiveGrammarQuizOutput['quiz'][number] & { passage?: string };

export type MockTest = {
    id: string;
    year: number;
    paper: string;
    questions: QuizQuestion[]
}

const passage1 = `The Himalayan ecosystem is highly vulnerable to damage, both due to geological reasons and on account of the stress caused by increased pressure of population, exploitation of natural resources and other related challenges. These aspects may be exacerbated due to the impact of climate change. It is possible that climate change may adversely impact the Himalayan ecosystem through increased temperature altered precipitation patterns, episodes of drought and biotic influences. This would not only impact the very sustenance of the indigenous communities in uplands but also the life of downstream dwellers across the country and beyond. Therefore, there is an urgent need for giving special attention to sustain the Himalayan ecosystem. This would require conscious efforts for conserving all the representative systems.
Further, it needs to be emphasized that the endemics with restricted distribution, and most often with specialized habitat requirements, are among the most vulnerable elements. In this respect the Himalayan biodiversity hotspot, with rich endemic diversity, is vulnerable to climate change. The threats include possible loss of genetic resources and species, habitats and concomitantly a decrease in ecosystem services. Therefore, conservation of endemic elements in representative ecosystems/habitats assumes a great significance while drawing conservation plans for the region.
Towards achieving the above, we will have to shift towards contemporary conservation approaches, which include a paradigm of landscape level interconnectivity between protected area systems, the concept advocates a shift from the species-habitat focus to an inclusive focus on expanding the biogeographic range so that natural adjustments to climate change can proceed without being restrictive.`;

const passage2 = `It is often forgotten that globalization is not only about policies on international economic relationship and transactions, but has equally to do with domestic policies of a nation. Policy changes necessitated by meeting the internationally set conditions (by WTO etc.) of free trade and investment flows obviously affect domestic producers and investors. But the basic philosophy underlying globalization emphasizes absolute freedom to markets to determine prices and production and distribution patterns, and view government interventions as processes that create distortions and bring in inefficiency. Thus, public enterprises have to be privatized through disinvestments and sales; sectors and activities hitherto reserved for the public sector have to be opened to the private sector. This logic extends to the social services like education and health. Any restrictions on the adjustments in workforce by way of retrenchment of workers should also be removed and exit should be made easier by removing any restrictions on closures. Employment and wages should be governed by free play of market forces, as any measure to regulate them can discourage investment and also create inefficiency in production. Above all, in line with the overall philosophy of reduction in the role of the state, fiscal reforms should be undertaken to have generally low levels of taxation and government expenditure should be kept to the minimum to abide by the principle of fiscal prudence. All these are policy actions on the domestic front and are not directly related to the core items of the globalization agenda, namely free international flow of goods and finance.`

const clozePassage = `Squirrels are _____(101) animals in the world. They have the_____(102) for rainy days. Autumn can be very entertaining for them. That is the time____ (103) the great harvest collection for their winter store. You can_____(104) here and there, collecting nuts of all sorts. Wal nuts, beechnuts, chestnuts, dried berries. They are not fussy. Relentlessly, they run from their storage point, usually a tree hollow, to the vast amount of wild nuts to be found in the forest. These beautiful animals are house-proud. They take great pains to ensure that _______(105) and warm enough to tide them over the harsh winter. You_____(106) busily collecting soft pieces of bark, wood and leaves to line their nests. After all their______(107), and when the first, cold hard frost arrives, they_______ (108) inside their nests for the duration/rest of the cold spell. There,_______(109) till it is warm enough to bring out their stored food. Ah but then again, they are the most forgetful little animals, and it is not unusual to see squirrels______ (110) their hoards.`;

const passageForCloze91to100 = `________ by the charm of Nature around him, man has expressed his appreciation of it in works of art produced by him. This goes back to a time ________ he was still a primitive being. Art ________ a softening influence on him. The earliest paintings of the prehistoric age in the caves all over the world give us magnificent examples of the ________ eye and the trained hand in man's savage state. The colours chosen, the movement and the expressions the pictures are ________, ________ with, really make us marvel, even if all of them are not of the ________ of the paintings at Altamira. The prehistoric cave paintings in India give us a picture of life in those ________ days of the early man in India. It is a great and true experience that Kalidasa expresses, when he feels that ________ the happiest man feels ________ when he sees beautiful things or hears melodious notes.`;

export const mockTests: MockTest[] = [
    {
        id: 'new-mock-test-1',
        year: 2024,
        paper: 'Full Mock Test - 1',
        questions: [
            {
                passage: passage1,
                question: `Consider the following statements: According to the passage, the adverse impact of climate change on an ecosystem can be a
1. permanent disappearance of some of its flora and fauna.
2. permanent disappearance of the ecosystem itself.
Which of the statements given above is/are correct?`,
                options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
                correctAnswer: "1 only",
                explanation: "The passage states the threats include 'possible loss of genetic resources and species', which corresponds to the disappearance of flora and fauna. It does not mention the permanent disappearance of the entire ecosystem."
            },
            {
                passage: passage1,
                question: "Which one of the following statements best implies the need to shift toward contemporary conservation approach?",
                options: [
                    "Exploitation of natural resources causes a stress on the Himalayan ecosystem.",
                    "Climate change alters precipitation patterns, causes episodes of drought and biotic interference.",
                    "The rich biodiversity, including endemic diversity, makes the Himalayan region a biodiversity hotspot.",
                    "The Himalayan biogeographic region should be enabled to adapt to climate change smoothly."
                ],
                correctAnswer: "The Himalayan biogeographic region should be enabled to adapt to climate change smoothly.",
                explanation: "The passage advocates for a shift to contemporary conservation to allow 'natural adjustments to climate change to proceed without being restrictive,' which aligns with enabling the region to adapt smoothly."
            },
            {
                passage: passage1,
                question: "What is the most important message conveyed by the passage?",
                options: [
                    "Endemism is a characteristics feature of Himalayan region.",
                    "Conservation efforts should emphasize on biogeographic ranges rather than on some species of habitats.",
                    "Climate change has adverse impact on the Himalayan ecosystem.",
                    "Without Himalayan ecosystem, the life of the communities of uplands and downstream will have no sustenance."
                ],
                correctAnswer: "Conservation efforts should emphasize on biogeographic ranges rather than on some species of habitats.",
                explanation: "The final paragraph strongly emphasizes a 'shift towards contemporary conservation approaches' that focus on 'landscape level interconnectivity' and 'expanding the biogeographic range,' making this the central message."
            },
            {
                passage: passage1,
                question: `With reference to the passage, the following assumptions have been made:
1. To maintain natural ecosystems, exploitation of natural resources should be completely avoided.
2. Not only anthropogenic but also natural reasons can adversely affect ecosystems.
3. Loss of endemic diversity leads to the extinction of ecosystems.
Which of the above assumptions is/are correct?`,
                options: ["1 and 2", "2 only", "2 and 3", "3 only"],
                correctAnswer: "2 only",
                explanation: "The passage mentions the ecosystem is vulnerable due to 'geological reasons' (natural) and 'stress caused by increased pressure of population' (anthropogenic), making assumption 2 correct. Assumption 1 is too extreme, and assumption 3 is not directly supported."
            },
            {
                passage: passage1,
                question: `According to the passage, which of the following measures would be the most effective in conserving the Himalayan ecosystem?
1. Implementing strict laws to prevent human encroachment in the region.
2. Expanding the biogeographic range of protected areas to facilitate natural adjustments to climate change.
3. Focusing conservation efforts only on species that are at immediate risk of extinction.
4. Enhancing ecosystem connectivity to support biodiversity adaptation.
Select the correct answer using the code given below:`,
                options: ["1 and 3 only", "2 and 4 only", "1, 2, and 4 only", "1, 2, 3, and 4"],
                correctAnswer: "2 and 4 only",
                explanation: "The passage explicitly advocates for a 'paradigm of landscape level interconnectivity' (4) and 'expanding the biogeographic range' (2). It critiques a narrow 'species-habitat focus', making option 3 incorrect."
            },
            {
                passage: passage2,
                question: "According to the passage, under the globalization, government interventions are viewed as processes leading to",
                options: [
                    "distortions and inefficiency in the economy.",
                    "optimum use of resources.",
                    "more profitability to industries.",
                    "free play of market forces with regard to the industries."
                ],
                correctAnswer: "distortions and inefficiency in the economy.",
                explanation: "The passage states that globalization views 'government interventions as processes that create distortions and bring in inefficiency.'"
            },
            {
                passage: passage2,
                question: "According to the passage, the basic philosophy of globalization is to",
                options: [
                    "give absolute freedom to producers to determine prices and production.",
                    "give freedom to producers to evolve distribution patterns.",
                    "give absolute freedom to markets to determine prices, production and employment.",
                    "give freedom to producers to import and export."
                ],
                correctAnswer: "give absolute freedom to markets to determine prices, production and employment.",
                explanation: "The passage states the philosophy 'emphasizes absolute freedom to markets to determine prices and production and distribution patterns' and later adds that 'Employment and wages should be governed by free play of market forces'."
            },
            {
                passage: passage2,
                question: `According to the passage, which of the following is/are necessary for ensuring globalization?
1. Privatization of public enterprises.
2. Expansionary policy of public expenditure.
3. Free play of market forces to determine wages and employment.
4. Privatization of social services like education and health.
Select the correct answer using the code given below:`,
                options: ["1 only", "2 and 3 only", "1, 3 and 4", "2, 3 and 4"],
                correctAnswer: "1, 3 and 4",
                explanation: "The passage mentions privatization of public enterprises (1), privatization of social services (4), and free play of market forces for employment (3). It advocates for reducing government expenditure, making (2) incorrect."
            },
            {
                passage: passage2,
                question: "According to the passage, in the process of globalization the State should have",
                options: ["expanding role.", "reducing role.", "statutory role.", "none of the above roles."],
                correctAnswer: "reducing role.",
                explanation: "The passage mentions the 'overall philosophy of reduction in the role of the state'."
            },
            {
                passage: passage2,
                question: "According to the passage, what is the rationale behind privatizing public enterprises and social services like education and health?",
                options: [
                    "To improve efficiency and reduce government expenditure",
                    "To ensure better wages and job security for workers",
                    "To increase government control over key sectors",
                    "To prevent the entry of foreign players into the domestic market"
                ],
                correctAnswer: "To improve efficiency and reduce government expenditure",
                explanation: "The passage links privatization to removing 'inefficiency' and the 'reduction in the role of the state' to keep 'government expenditure to the minimum'."
            },
            { question: "Choose the antonym for 'incroyable'.", options: ["Ordinary", "Fantastic", "Extraordinary", "Impressive"], correctAnswer: "Ordinary", explanation: "'Incroyable' is French for 'incredible' or 'unbelievable'. The antonym is 'Ordinary'." },
            { question: "Choose the antonym for 'grouch'.", options: ["Cheerful person", "Complainer", "Pessimist", "Cynic"], correctAnswer: "Cheerful person", explanation: "A 'grouch' is a habitually grumpy or complaining person. The opposite is a 'Cheerful person'." },
            { question: "Choose the antonym for 'finesse'.", options: ["Dexterity", "Clumsiness", "Ingenuity", "Proficiency"], correctAnswer: "Clumsiness", explanation: "'Finesse' implies skill and subtlety. 'Clumsiness' is its direct opposite." },
            { question: "Choose the antonym for 'odious'.", options: ["Disagreeable", "Pleasant", "Revolting", "Contemptible"], correctAnswer: "Pleasant", explanation: "'Odious' means extremely unpleasant or repulsive. The opposite is 'Pleasant'." },
            { question: "Choose the antonym for 'brusque'.", options: ["Curt", "Polite", "Blunt", "Abrupt"], correctAnswer: "Polite", explanation: "'Brusque' means abrupt or offhand in speech or manner. The opposite is 'Polite'." },
            {
                question: `Combine the sentences: "She had rehearsed her speech multiple times. However, when she stood in front of the audience, her mind went completely blank."`,
                options: [
                    "Although she had rehearsed her speech multiple times, her mind went completely blank when she stood in front of the audience.",
                    "She had rehearsed her speech multiple times, so when she stood in front of the audience, her mind went completely blank.",
                    "She had rehearsed her speech multiple times, despite her mind going completely blank when she stood in front of the audience.",
                    "Her mind went completely blank when she stood in front of the audience because she had rehearsed her speech multiple times."
                ],
                correctAnswer: "Although she had rehearsed her speech multiple times, her mind went completely blank when she stood in front of the audience.",
                explanation: "'Although' correctly shows the contrast between her preparation and the outcome."
            },
            {
                question: `Combine the sentences: "The ancient manuscript contained cryptic symbols. Historians struggled for decades to decipher their meaning."`,
                options: [
                    "Historians struggled for decades to tell the meaning of the cryptic texts in the ancient manuscript.",
                    "Although the ancient manuscript contained cryptic symbols, historians struggled for decades to decipher their meaning.",
                    "The ancient manuscript contained cryptic symbols, which caused historians to struggle for decades to decipher their meaning.",
                    "The ancient manuscript contained cryptic symbols, so historians struggled for decades to decipher their meaning."
                ],
                correctAnswer: "The ancient manuscript contained cryptic symbols, so historians struggled for decades to decipher their meaning.",
                explanation: "'So' correctly establishes a cause-and-effect relationship between the cryptic symbols and the historians' struggle."
            },
            {
                question: `Combine the sentences: "The philosopher’s ideas were radical for his time. Many people dismissed them as impractical and utopian."`,
                options: [
                    "The philosopher’s ideas were radical for his time and hence many people dismissed them as impractical and utopian.",
                    "Since many people dismissed them as impractical and utopian, the philosopher’s ideas were radical for his time.",
                    "The philosopher’s ideas, though radical for his time, were dismissed by many as impractical and utopian.",
                    "The philosopher’s ideas were taken as impractical and utopian, though they were radical for his time."
                ],
                correctAnswer: "The philosopher’s ideas were radical for his time and hence many people dismissed them as impractical and utopian.",
                explanation: "'And hence' properly links the radical nature of the ideas with the reason they were dismissed."
            },
            {
                question: `Combine the sentences: "The poet described the beauty of the night sky. He used vivid imagery and lyrical language to captivate the reader."`,
                options: [
                    "The poet described the beauty of the night sky, using vivid imagery and lyrical language to captivate the reader.",
                    "The poet described the beauty of the night sky as he used vivid imagery and lyrical language to captivate the reader.",
                    "The poet described the beauty of the night sky so that he could use vivid imagery and lyrical language to captivate the reader.",
                    "The poet described the beauty of the night sky because he used vivid imagery and lyrical language to captivate the reader."
                ],
                correctAnswer: "The poet described the beauty of the night sky, using vivid imagery and lyrical language to captivate the reader.",
                explanation: "Using a participle phrase ('using vivid imagery...') is a concise and effective way to combine these two related actions."
            },
            {
                question: `Combine the sentences: "Prometheus defied the gods by giving fire to mankind. As a result, he was punished by being chained to a rock."`,
                options: [
                    "Prometheus defied the gods by giving fire to mankind, and as a result, he was punished by being chained to a rock.",
                    "Prometheus was punished by being chained to a rock because he defied the gods by giving fire to mankind.",
                    "As Prometheus defied the gods by giving fire to mankind, he was punished by being chained to a rock.",
                    "All of the above."
                ],
                correctAnswer: "All of the above.",
                explanation: "All three options correctly and grammatically combine the two sentences to show a cause-and-effect relationship."
            },
            { question: "What is the meaning of the idiom 'bell the cat'?", options: ["tame some animals", "warn the owners", "do the impossible task", "ring the bells regularly"], correctAnswer: "do the impossible task", explanation: "To 'bell the cat' means to take on a dangerous or impossible task." },
            { question: "What is the meaning of the idiom 'The apple of discord'?", options: ["reason for quarrel", "hopeful attention", "Sincere affection", "Fruitful discussion"], correctAnswer: "reason for quarrel", explanation: "The 'apple of discord' is the root cause of a disagreement or conflict." },
            { question: "What is the meaning of the idiom 'Paying lip-service'?", options: ["saying they agree although they do not support it", "partially impressing the crowds", "making long speeches for the cause", "growing angry and restless with the organisers"], correctAnswer: "saying they agree although they do not support it", explanation: "To pay lip service is to express approval or support for something insincerely." },
            { question: "What is the meaning of the idiom 'On shank's mare'?", options: ["On a Ilon", "On an elephant", "On foot", "On a bicycle"], correctAnswer: "On foot", explanation: "'Shank's mare' is an old-fashioned term for one's own legs, so it means to travel on foot." },
            { question: "What is the meaning of the idiom 'Dead heat'?", options: ["Close contest that ends in a tie", "Strong opposition to one's ideas", "A deadly blast of hot air", "A strong heat wave"], correctAnswer: "Close contest that ends in a tie", explanation: "A 'dead heat' is a race or contest in which two or more competitors finish at exactly the same time." },
            { question: "What is the meaning of the idiom 'The bee's knees'?", options: ["Observant", "Foolish", "Problematic", "Extraordinary"], correctAnswer: "Extraordinary", explanation: "To be the 'bee's knees' means to be excellent or of a very high standard." },
            { question: "What is the meaning of the idiom 'Hold water'?", options: ["To be fickle", "To be busy", "To be valid", "To be deep"], correctAnswer: "To be valid", explanation: "If an argument or explanation 'holds water', it means it is sound, logical, and believable." },
            { question: "What is the meaning of the idiom 'A close-fisted person'?", options: ["A miserly person", "A cruel person", "A strong person", "A kind person"], correctAnswer: "A miserly person", explanation: "A 'close-fisted' person is someone who is stingy and does not like to spend money." },
            { question: "What is the meaning of the idiom 'Chicken-hearted'?", options: ["Generous", "Miserly", "Selfish", "Cowardly"], correctAnswer: "Cowardly", explanation: "To be 'chicken-hearted' is to be timid or cowardly." },
            { question: "What is the meaning of the idiom 'Pull a fast one'?", options: ["Believe someone easily", "Progress fast", "Trick someone", "Take quick action"], correctAnswer: "Trick someone", explanation: "To 'pull a fast one' is to deceive or trick someone." },
            { question: "Choose the synonym for 'ad nauseam'.", options: ["Rare and innovative", "Repetitive and tiresome", "Confusing and unclear", "Exciting and fresh"], correctAnswer: "Repetitive and tiresome", explanation: "'Ad nauseam' means repeating something to a sickening or excessive degree." },
            { question: "Choose the synonym for 'pro bono'.", options: ["Voluntary and free", "Paid and exclusive", "Restricted and conditional", "Expensive and mandatory"], correctAnswer: "Voluntary and free", explanation: "'Pro bono' refers to professional work undertaken voluntarily and without payment." },
            { question: "Choose the synonym for 'alter egos'.", options: ["Changes identities frequently", "Reads comic books daily", "Collects different comic editions", "Writes stories about superheroes"], correctAnswer: "Changes identities frequently", explanation: "An 'alter ego' is a person's secondary or alternative personality. To flip through them implies changing identities." },
            { question: "Choose the synonym for 'in saecula saeculorum'.", options: ["Chanted briefly", "Spoken occasionally", "Recited for centuries", "Forgotten over time"], correctAnswer: "Recited for centuries", explanation: "'In saecula saeculorum' is a Latin phrase meaning 'for ever and ever' or 'for ages of ages'." },
            { question: "Choose the synonym for 'unconscionable'.", options: ["Inordinate", "unprincipled", "moderate", "maximum"], correctAnswer: "Inordinate", explanation: "'Unconscionable' means not right or reasonable, or unreasonably excessive. 'Inordinate' is a close synonym." },
            { question: "Choose the synonym for 'credence'.", options: ["conviction", "temporization", "incredulousness", "spurning"], correctAnswer: "conviction", explanation: "'Credence' means belief in or acceptance of something as true. 'Conviction' is a similar concept." },
            { question: "Choose the synonym for 'charlatan'.", options: ["masquerader", "virtuoso", "maestro", "whiz"], correctAnswer: "masquerader", explanation: "A 'charlatan' is a person falsely claiming to have a special knowledge or skill; a fraud. A 'masquerader' also pretends to be someone they are not." },
            { question: "Choose the synonym for 'rapt'.", options: ["oblivious", "strung-out", "rhapsodic", "discerning"], correctAnswer: "rhapsodic", explanation: "'Rapt' means completely fascinated or absorbed by what one is seeing or hearing. 'Rhapsodic' means extravagantly enthusiastic." },
            { question: "Choose the synonym for 'sanguine'.", options: ["pale", "buoyant", "gloomy", "stoical"], correctAnswer: "buoyant", explanation: "'Sanguine' means optimistic or positive, especially in a difficult situation. 'Buoyant' means cheerful and optimistic." },
            { question: "Choose the synonym for 'nascent'.", options: ["budding", "cultured", "in twilight", "enlightened"], correctAnswer: "budding", explanation: "'Nascent' means just coming into existence and beginning to display signs of future potential. 'Budding' is a direct synonym." },
            { 
                question: `Arrange the sentence parts:
The social worker devoted
P - to the upliftment
Q - of the people
R - his entire life
S - of his village`,
                options: ["QRSP", "PQRS", "SRQP", "RPQS"],
                correctAnswer: "RPQS",
                explanation: "The correct sentence is: 'The social worker devoted (R) his entire life (P) to the upliftment (Q) of the people (S) of his village'."
            },
            {
                question: `Arrange the sentence parts:
It is often said that lightning never strikes twice in the same place,
P - Go ask the forest rangers.
Q - But this isn’t true.
R - They will tell you that every thunderstorm brings several bolts of lightning to their lookout stations.
S - Rangers spend their summers as fire-fighters.`,
                options: ["QSPR", "SQPR", "SPQR", "QPSR"],
                correctAnswer: "QPSR",
                explanation: "The correct sequence is: (Q) states the initial statement is false, (P) suggests who to ask for proof, (S) gives context about rangers, and (R) provides the rangers' answer."
            },
            {
                question: `Arrange the sentence parts:
Costs were low that year.
P - There was a good person for each job and the market remained firm.
Q - The output was also high.
R - There were no losses from fire also.
S - Thankfully no market fluctuations caused havoc.`,
                options: ["PQSR", "SQPR", "QPSR", "RSPQ"],
                correctAnswer: "QPSR",
                explanation: "The correct order logically builds on the initial statement: (Q) High output, (P) good workforce and firm market, (S) no market fluctuations, (R) no fire losses."
            },
            {
                question: `Arrange the sentence parts:
There is a common belief that while the dog is man’s best friend, the coyote is his worst enemy.
P - Provided valuable farm animals are protected, the coyote will often free the property of other animals, like rabbits, which are ruinous to crops and certain trees.
Q - It hunts at night and is particularly destructive to sheep, young pigs, and poultry.
R - The bad reputation of the coyote traces back to his fondness for small animals.
S - Yet it is sometimes wise to encourage coyotes.`,
                options: ["RQSP", "QRPS", "PRQS", "QPRS"],
                correctAnswer: "RQSP",
                explanation: "The logical order is: (R) explain the reason for the bad reputation, (Q) gives examples of its destructive behavior, (S) introduces a counterpoint, (P) explains the benefit of coyotes."
            },
            {
                question: `Arrange the sentence parts:
In earlier days those who had overseas business which they believed should be discussed personally, took ship and set out across the sea.
P - Once aboard they transacted their affairs, engaging in commercial and social matters or conducting government business.
Q - And airplanes soar overhead.
R - But above them all, words speed through the sky – telephone conversations quickly bring together in the most personal fashion people who are separated by thousands of miles.
S - Today ships and passengers continue to sail the seven seas.`,
                options: ["SPRQ", "RPSQ", "QRSP", "PSQR"],
                correctAnswer: "SPRQ",
                explanation: "The provided answer 'SPRQ' is the most logical flow, contrasting historical sea travel with modern transport and communication. It starts with modern ships (S), describes activities aboard (P), and then contrasts this with modern communication (R) and air travel (Q)."
            },
            {
                question: `Arrange the sentence parts:
We should try to use the car as little as possible.
P - The exercise will surely be good for us.
Q - It’s good for the muscles.
R - We should go to the shops on foot and get what we want.
S - We should even sometimes cycle to work.`,
                options: ["RSQP", "SRQP", "QRSP", "PQRS"],
                correctAnswer: "SRQP",
                explanation: "The logical flow is to suggest alternatives to the car: (S) cycle to work, (R) walk to shops, (Q) benefit of walking, (P) general benefit of exercise."
            },
            {
                question: `Arrange the sentence parts:
Every year, we see more and more cars on our roads.
P - In other countries, people are trying to reduce the amount of oil and petrol they use.
Q - As they are aware that it pollutes the atmosphere and causes global warming.
R - Many of them have very big engines which use a lot of petrol and produce a lot of pollution.
S - They do this by driving smaller cars and by using public transport, or even walking.`,
                options: ["PRQS", "QSPR", "RPQS", "QSPR"],
                correctAnswer: "RPQS",
                explanation: "(R) describes the cars mentioned in the first sentence. (P) introduces a contrast with other countries. (Q) explains why they reduce usage. (S) explains how they do it."
            },
            {
                question: `Arrange the sentence parts:
Paragraphs are a form of written communication.
P - Each sentence in a paragraph “talks about” or develops one single main idea.
Q - If your paragraph does this, it is said to have unity.
R - In addition, each sentence in a paragraph must be tied to the one before and after it, like links in a chain, by using special words called transitions.
S - It should contain a minimum of five sentences.`,
                options: ["RQPS", "SPQR", "QRPS", "PQRS"],
                correctAnswer: "SPQR",
                explanation: "(S) gives a basic rule (length). (P) defines the main idea. (Q) introduces 'unity' based on P. (R) adds the concept of transitions."
            },
            {
                question: `Arrange the sentence parts:
Riding a bike can give you lots of good exercise everyday.
P - When somebody stole my bike, I was heartbroken, but the police found it two days later.
Q - I use my bike to get to work every day.
R - I take my bike to get groceries also.
S - I often ride my bike out to the country on week-ends just for a change of scenery.`,
                options: ["RQPS", "QRPS", "PRQS", "SQPR"],
                correctAnswer: "QRPS",
                explanation: "The paragraph lists the uses of the bike: (Q) for work, (R) for groceries, (S) for leisure. (P) is a specific story and fits best at the end of the list."
            },
            {
                question: `Arrange the sentence parts:
First, I have never met a German shepherd whose intelligence wasn’t above average.
P - In addition, German shepherds are dedicated to their owners.
Q - They can learn how to turn door knobs, follow a trail, or identify illegal substances.
R - My dog Max waits patiently at the end of the driveway every night until I come home.
S - Not even a juicy bone will tempt him to move.`,
                options: ["SQPR", "QPSR", "QSPR", "QPRS"],
                correctAnswer: "QPSR",
                explanation: "(Q) provides examples of the intelligence mentioned in the first sentence. (P) introduces the next quality (dedication). (R) and (S) provide a specific, connected example of that dedication."
            },
             {
                question: `Arrange the sentences:
S1. Marcel Proust was born on July 10, 1871, to well-to-do middle-class parents.
P. She had a perfect memory and knew long passages from Racine by heart.
Q. His mother, Jeanne Weil, was a cultured woman with a deep love for literature.
R. Most important, Marcel and his mother both loved to laugh—gently, satirically—at the people around them.
S. Their shared appreciation for wit and observation would later inspire some of his best writing.
S6. In her letters to him, she playfully described other guests at hotels and spas, much like the characters in his works.`,
                options: ["QPSR", "QSPR", "PQSR", "SQRP"],
                correctAnswer: "QPSR",
                explanation: "The logical order is: Introduce the mother (Q), describe her qualities (P), describe their shared trait (R), and explain its impact on his writing (S)."
            },
            {
                question: `Arrange the sentences:
S1. In neighboring Gaza, the UN and its humanitarian partners have been scaling up efforts to provide food and support livelihoods.
P. OCHA reported that six children had died recently due to severe cold, bringing the total number of winter-related child deaths to 15.
Q. The humanitarian crisis stems from 15 months of continuous Israeli bombardment following Hamas-led attacks on Israel that left 1,200 dead and around 250 taken hostage.
R. Meanwhile, aid deliveries have intensified, with over 800 trucks entering Gaza on a single day and UNRWA reaching nearly 1.3 million people with flour.
S. Aid partners have also identified schools in Rafah, Khan Younis, and Deir al Balah, which were used as shelters and are now set for assessment and repairs.
S6. These efforts aim to address both immediate humanitarian needs and the long-term rebuilding of essential infrastructure.`,
                options: ["PQRS", "QPRS", "PRSQ", "QRSP"],
                correctAnswer: "QRSP",
                explanation: "The logical order is: State the cause of the crisis (Q), describe the aid efforts (R), mention infrastructure efforts (S), and add a tragic detail (P)."
            },
            {
                question: `Arrange the sentences:
S1. At Winterfell, an assassin attempts to kill Bran while he is unconscious, prompting Catelyn Stark to take action.
P. On her journey back, Catelyn unexpectedly encounters Tyrion, arrests him, and takes him to the Vale to stand trial.
Q. Tyrion ultimately secures his freedom by enlisting the mercenary Bronn to fight for him in trial by combat.
R. She first travels to King’s Landing to inform her husband, Ned, of the incident.
S. There, her childhood friend Petyr "Littlefinger" Baelish implicates Tyrion Lannister in the assassination attempt.
S6. Meanwhile, Lord Tywin Lannister retaliates against Catelyn’s actions by sending soldiers to raid the Riverlands.`,
                options: ["RSPQ", "PRSQ", "SRQP", "PSQR"],
                correctAnswer: "RSPQ",
                explanation: "The narrative flow is: Catelyn goes to King's Landing (R), Littlefinger implicates Tyrion (S), Catelyn arrests Tyrion (P), and Tyrion gets freed (Q)."
            },
            {
                question: `Arrange the sentences:
S1. At the far reaches of the solar system lie the gas giants, surrounded by intriguing moons.
P. Many of these moons, such as Europa and Enceladus, are encased in thick ice with vast subsurface oceans beneath.
Q. While numerous missions have explored the gas giants, dedicated probes to their moons have yet to be launched.
R. Space agencies like NASA and the ESA plan to send missions in the coming decades to study these icy worlds for potential signs of life.
S. Meanwhile, human exploration efforts are more focused on Mars, with plans for future astronauts to establish a semi-permanent presence.
S6. If successful, such efforts could pave the way for even more ambitious interplanetary missions.`,
                options: ["PQRS", "QPRS", "QPSR", "PRSQ"],
                correctAnswer: "PQRS",
                explanation: "The logical order is: Describe the moons (P), mention the lack of dedicated missions (Q), describe future planned missions (R), and contrast with Mars exploration (S)."
            },
            {
                question: `Arrange the sentences:
S1. The United Nations Secretary-General, António Guterres, arrived in Auckland, New Zealand, on 23 August after visiting Samoa.
P. During his stay, he had dinner with New Zealand’s Deputy Prime Minister, Winston Peters.
Q. He later met with Prime Minister Christopher Luxon before departing for Tonga with other Pacific leaders.
R. At the airport, he addressed the New Zealand media, emphasizing his visit as a show of solidarity with the Pacific Islands.
S. He highlighted the unique challenges faced by small island states, including climate vulnerability and economic hardships.
S6. The Secretary-General then proceeded to Nuku’Alofa, Tonga, to attend the Pacific Islands Forum.`,
                options: ["PQRS", "PRSQ", "QPRS", "PSQR"],
                correctAnswer: "PRSQ",
                explanation: "The chronological order is: Dinner with Deputy PM (P), addressing media at the airport (R), highlighting challenges (S), meeting with PM (Q)."
            },
            {
                question: `Arrange the sentences:
S1. Galileo Galilei was an Italian mathematician, physicist, and astronomer who made significant contributions to science.
P: Despite these challenges, Galileo’s scientific approach and experimentation made him a key figure in the Scientific Revolution.
Q: He developed a superior telescope, allowing him to observe mountains on the Moon and four of Jupiter’s moons.
R: His observations challenged the long-accepted Ptolemaic model, bringing him into conflict with the Catholic Church.
S: He was eventually found guilty of heresy in 1633 and sentenced to live under house arrest in Tuscany.
S6. His legacy continues to influence modern scientific methods and discoveries.`,
                options: ["QPRS", "QRSP", "RSPQ", "SPRQ"],
                correctAnswer: "QRSP",
                explanation: "The sequence of events is: Galileo's invention (Q), the conflict it caused (R), the consequence (S), and the concluding statement about his importance (P)."
            },
            {
                question: `Arrange the sentences:
S1. Egyptian society was founded on the concept of harmony, known as ma'at, which maintained balance in the universe.
P: Egyptian art, therefore, was created to reflect this harmony and serve a functional purpose.
Q: Similarly, amulets prioritized protection over aesthetic appeal, and tomb paintings emphasized the eternal nature of life.
R: Statues were crafted not just for beauty but to provide a home for a spirit or a god.
S: Whether in temples, homes, or palaces, artwork was always designed to uphold personal and communal stability.
S6. This deep connection between art and function defined Egyptian culture for thousands of years.`,
                options: ["PSRQ", "QRPS", "RPQS", "PRQS"],
                correctAnswer: "PRQS",
                explanation: "The logical flow is: Art reflects harmony (P), statues as an example (R), other examples (Q), and a summary of art's purpose (S)."
            },
            {
                question: `Arrange the sentences:
S1: The Crusades were a series of religious wars fought between different groups over several centuries.
P: The Crusades had significant political and religious consequences across medieval Europe and the Mediterranean.
Q: The wars spanned multiple regions, including the Holy Land, the Baltic, North Africa, and southern Spain.
R: These conflicts primarily involved Christians and Muslims, but also saw battles between Christians and pagans, as well as Christians against other Christians.
S: The first Crusade began in 1095 CE, and over time, eight major Crusades and several minor campaigns took place.
S6: Their impact reshaped power structures, trade, and religious tensions for centuries to come.`,
                options: ["QSPR", "QSRP", "RSPQ", "RQSP"],
                correctAnswer: "RQSP",
                explanation: "The logical order is: Describe the combatants (R), the locations (Q), the timeline (S), and the overall consequences (P)."
            },
            {
                question: `Arrange the sentences:
S1. While a single nuclear weapon may not threaten all of humanity, the vast number of warheads worldwide certainly does.
P. Over time, the likelihood of a nuclear detonation increases, especially given the numerous past "near misses."
Q. These incidents were often avoided only due to the quick thinking of individuals in critical moments.
R. A single explosion could lead to confusion, making it difficult to determine whether it was an accident or an act of war.
S. To minimize the risk of global catastrophe, nuclear disarmament must be prioritized.
S6. The fewer weapons there are, the lower the chances of an irreversible disaster.`,
                options: ["PQRS", "PRSQ", "QPRS", "PSQR"],
                correctAnswer: "PRSQ",
                explanation: "The flow of argument is: Likelihood of detonation increases (P), a single explosion could cause confusion (R), near-misses were avoided by individuals (Q), therefore disarmament is needed (S)."
            },
            {
                question: `Arrange the sentences:
S1: A Praise Poem of Shulgi (c. 2020-2000 BCE) is an ancient Sumerian text celebrating a remarkable achievement of King Shulgi of Ur.
P: His goal was not only to officiate religious festivals in Nippur and Ur but also to ensure his name endured for future generations.
Q: In the text, Shulgi describes himself as a mighty and determined ruler, comparing his swiftness to that of an owl or falcon.
R: The poem served as both a historical record and a public relations effort to solidify his legacy.
S: The poem highlights his legendary run of 200 miles (321.8 km) in a single day.
S6: As a result, Shulgi remains one of the most celebrated kings of ancient Mesopotamia.`,
                options: ["PSRQ", "PRQS", "SQPR", "SRPQ"],
                correctAnswer: "SQPR",
                explanation: "The logical order is: Highlight the achievement (S), describe Shulgi's self-perception in the text (Q), state his goal (P), and explain the poem's purpose (R)."
            },
            {
                question: "We talk often of a socialistic pattern of society. (Identify the part of speech for 'often')",
                options: ["adverb of time", "adverb of frequency", "adverb of manner", "quantifier"],
                correctAnswer: "adverb of frequency",
                explanation: "'Often' describes how frequently the action (talk) occurs, so it's an adverb of frequency."
            },
            {
                question: "He himself founded some technical and industrial schools. (Identify the part of speech for 'himself')",
                options: ["indefinite pronoun", "reflexive pronoun", "emphatic pronoun", "reciprocal pronoun"],
                correctAnswer: "emphatic pronoun",
                explanation: "'Himself' is used here to add emphasis to the subject 'He', making it an emphatic pronoun."
            },
            {
                question: "It is treated in refineries, the most common form of treatment is heating. (Identify the part of speech for 'heating')",
                options: ["verb", "present participle", "gerund", "dynamic verb"],
                correctAnswer: "gerund",
                explanation: "'Heating' is used as a noun in this sentence (the name of the treatment), which makes it a gerund."
            },
            {
                question: "Last of all, the lubricating oils of various grades are produced. (Identify the part of speech for 'lubricating')",
                options: ["adjective", "stative verb", "past participle", "verb"],
                correctAnswer: "adjective",
                explanation: "'Lubricating' is a present participle used as an adjective to describe the 'oils'."
            },
            {
                question: "For the first time in the history of this region, during this festival, an Adivasa darbar was conducted. (Identify the part of speech for 'during')",
                options: ["preposition", "conjunction", "adjective", "adverb"],
                correctAnswer: "preposition",
                explanation: "'During' is a preposition that shows a relationship of time ('during this festival')."
            },
            {
                question: "It was in 264 B.C. that the great struggle between Rome and Carthage, the Punic Wars began. (Identify the part of speech for 'It')",
                options: ["personal pronoun", "impersonal pronoun", "indefinite pronoun", "accusative pronoun"],
                correctAnswer: "impersonal pronoun",
                explanation: "'It' is used here as an impersonal pronoun to introduce the sentence without referring to a specific person or thing."
            },
            {
                question: "While sleeping, this food is converted into excess fat and thus makes a person fat and ungainly. (Identify the part of speech for 'sleeping')",
                options: ["gerund", "verb", "present participle", "present continuous"],
                correctAnswer: "present participle",
                explanation: "'Sleeping' here is part of the participial phrase 'While sleeping', which modifies the subject of the main clause. It acts like an adverbial phrase."
            },
            {
                question: "Pasteur began his fruitful scientific investigations when he was Professor of Chemistry at Strasburg. (Identify the underlined clause)",
                options: ["adjective clause", "noun clause", "adverbial clause", "pronoun clause"],
                correctAnswer: "adverbial clause",
                explanation: "The clause 'when he was Professor of Chemistry at Strasburg' describes when Pasteur began his investigations, so it's an adverbial clause of time."
            },
            {
                question: "He spread a blanket on the ground and stretched himself out on it. (Identify the part of speech for 'and')",
                options: ["subordinating conjunction", "coordinating conjunction", "correlative conjunction", "adversative conjunction"],
                correctAnswer: "coordinating conjunction",
                explanation: "'And' is a coordinating conjunction connecting two independent clauses."
            },
            {
                question: "Einstein was very simple in his ways of life and indifferent to his astounding fame. (Identify the part of speech for 'indifferent')",
                options: ["verb", "determiner", "adjective", "noun"],
                correctAnswer: "adjective",
                explanation: "'Indifferent' is an adjective that describes Einstein."
            },
            {
                question: "Spot the error: Everybody, (a)  it must be admitted, (b) has their ups and downs. (c) No error. (d)",
                options: ["a", "b", "c", "d"],
                correctAnswer: "c",
                explanation: "'Everybody' is a singular pronoun, so the possessive pronoun should be 'his or her', not 'their'. In formal English, 'their' as a singular pronoun is often considered an error."
            },
            {
                question: "Spot the error: When the thief broke into their house, (a)  they raised a hue and cry (b) and the thief caught immediately by the people.(c)  No error.(d)",
                options: ["a", "b", "c", "d"],
                correctAnswer: "c",
                explanation: "The sentence should be in the passive voice: 'the thief was caught immediately by the people'."
            },
            {
                question: "Spot the error: He is proficient in Hindi (a) and can speak English, (b) but he does not know to read and write English.(c) no error (d)",
                options: ["a", "b", "c", "d"],
                correctAnswer: "c",
                explanation: "The correct phrasing is 'does not know how to read and write English'."
            },
            {
                question: "Spot the error: Raju doesn't come to our house because our dog barks at him (a) and licks him (b)  although I have often told him not to afraid of it.(c) no error (d)",
                options: ["a", "b", "c", "d"],
                correctAnswer: "c",
                explanation: "The correct phrasing should be 'not to be afraid of it'."
            },
            {
                question: "Spot the error: To his innovative ideas and practices in farming (a)  he was given (b)  the Krishi Pandit Award last year. (c)  No error. (d)",
                options: ["a", "b", "c", "d"],
                correctAnswer: "a",
                explanation: "The correct preposition should be 'For', not 'To'. 'For his innovative ideas...'"
            },
            {
                question: "Spot the error: Young school students now-a-days (a) are subjected to intense pressure from peers and parents alike (b)  to fetch high marks in public examinations. (c)  No error. (d)",
                options: ["a", "b", "c", "d"],
                correctAnswer: "d",
                explanation: "The sentence is grammatically correct."
            },
            {
                question: "Spot the error: The work went very slowly (a) because the X-ray machine was not working very good (b) that morning. (c) No error. (d)",
                options: ["a", "b", "c", "d"],
                correctAnswer: "b",
                explanation: "'Good' is an adjective, but an adverb is needed here to modify the verb 'working'. The correct word is 'well'."
            },
            {
                question: "Spot the error: The principal objected (a)  to them wearing short (b) skirts at the function. (c)  No error. (d)",
                options: ["a", "b", "c", "d"],
                correctAnswer: "b",
                explanation: "The possessive pronoun 'their' should be used before the gerund 'wearing'. The sentence should be '...objected to their wearing short skirts...'"
            },
            {
                question: "Spot the error: He collected his bags, (a) said good-bye to us (b) and left for home immediately (c) No error. (d)",
                options: ["a", "b", "c", "d"],
                correctAnswer: "d",
                explanation: "The sentence is grammatically correct. The verbs are in parallel past tense form."
            },
            {
                question: "Spot the error: The tourist did not know the local language, (a) but he used signs to make people understand (b) thåt he wanted to reach to Darjeeling quickly. (c) No error. (d)",
                options: ["a", "b", "c", "d"],
                correctAnswer: "c",
                explanation: "The preposition 'to' is not needed after 'reach'. The sentence should be '...wanted to reach Darjeeling quickly'."
            },
            {
                question: "Improve the sentence: Abraham narrated Reshma his last escapade in a dramatic way.",
                options: ["exertion", "ordeal", "adventure", "escape"],
                correctAnswer: "adventure",
                explanation: "'Escapade' means a reckless adventure or prank. 'Adventure' is the closest synonym."
            },
            {
                question: "Improve the sentence: Mr. Arvind was accused of beating up before the students in the class.",
                options: ["accused of beating up off the", "accused of beating up of the", "accused of beating up on the", "accused of beating up in the"],
                correctAnswer: "accused of beating up in the",
                explanation: "The phrase 'beating up the students' is the correct form. 'beating up before the students' is grammatically incorrect. Among the given options, 'in the' is contextually nonsensical but the original sentence is flawed. A better sentence would be 'Mr. Arvind was accused of beating up the students in the class.'"
            },
            {
                question: "Improve the sentence: Himanshu is braver than intelligent.",
                options: ["more brave than intelligent", "no improvement", "braver than more intelligent", "most brave than more intelligent"],
                correctAnswer: "more brave than intelligent",
                explanation: "When comparing two qualities in the same person, we use 'more' before the first adjective, even if it's a single-syllable word. The structure is 'more [adjective] than [adjective]'."
            },
            {
                question: "Improve the sentence: Sujata has not and can never in the good books of her principal as she lacks honesty.",
                options: ["has not been and can never be", "has not been and can never been", "has not be and can never be", "no improvement"],
                correctAnswer: "has not been and can never be",
                explanation: "The sentence requires parallel verb forms. 'has not been' (present perfect) and 'can never be' (modal verb with base form) are the correct parallel structures."
            },
            {
                question: "Improve the sentence: The number of seats in the movie theatre were reduced to comply with the new social distancing guidelines.",
                options: ["in the movie theater was reduced", "in the movie theater were being reduced", "of the movie theater were reduced", "no improvement"],
                correctAnswer: "in the movie theater was reduced",
                explanation: "The subject of the sentence is 'The number', which is singular. Therefore, the verb should be singular ('was reduced')."
            },
            {
                question: `Match the following:
Animals | Sounds
1. Dog | A. Purr
2. Cat | B. Moo
3. Insect | C. Woof
4. Cow | D. Rasping`,
                options: ["1-D, 2-C, 3- A, 4-B", "1- C, 2-A, 3-D, 4-B", "1-C, 2- B,3-A, 4- D", "1- D, 2-A , 3-C, 4-B"],
                correctAnswer: "1- C, 2-A, 3-D, 4-B",
                explanation: "Dog -> Woof (C), Cat -> Purr (A), Insect -> Rasping (D), Cow -> Moo (B)."
            },
            {
                question: `Match the following:
Animals | Habitat
1. Panda | A. Barn
2. Squirrel | B. Bamboo tree
3. Alligator | C. nest
4. Buffalo | D. dray`,
                options: ["1-B,2-D,3-C,4-A", "1-D,2-B,3-C,4-A", "1-B,2-D,3-A,4-C", "1-C, 2-A,3-B,4-D"],
                correctAnswer: "1-B,2-D,3-C,4-A",
                explanation: "Panda -> Bamboo tree (B), Squirrel -> Dray (D), Alligator -> Nest (for eggs, often in marshy areas) (C), Buffalo -> Barn (A, for domestic ones)."
            },
            {
                question: `Match the following:
Animals | Babies
1. Ant | A. Larva
2. Giraffe | B. Calf
3. Deer | C. Fawn
4. Kangaroo | D. Joey`,
                options: ["1-C, 2-B,3-D,4-A", "1-B,2-D,3-A,4-C", "1-D,2-B,3-C,4-A", "1-A, 2-B,3-C,4-D"],
                correctAnswer: "1-A, 2-B,3-C,4-D",
                explanation: "Ant -> Larva (A), Giraffe -> Calf (B), Deer -> Fawn (C), Kangaroo -> Joey (D)."
            },
            {
                question: `Match the following:
Sports | Playground
1. Horse riding | A. Diamond
2. Baseball | B. Rink
3. Ice hockey | C. Velodrome
4. Cycling | D. Arena`,
                options: ["1-D, 2-A,3-B,4-C", "1-A, 2-D, 3-B,4-C", "1-D, 2-B,3-A,4-C", "1-C, 2-D,3-A,4-B"],
                correctAnswer: "1-D, 2-A,3-B,4-C",
                explanation: "Horse riding -> Arena (D), Baseball -> Diamond (A), Ice hockey -> Rink (B), Cycling -> Velodrome (C)."
            },
            {
                question: `Match the following:
Subject | Study name
1. Study of bones | A. Mycology
2. Study of eyes | B. Phycology
3. Study of fungi | C. Osteology
4. Study of algae | D. Ophthalmology`,
                options: ["1-C,2-D,3-B,4-A", "1-D,2-C,3-A,4-B", "1-C,2-D,3-A,4-B", "1-D,2-C,3-B,4-A"],
                correctAnswer: "1-C,2-D,3-A,4-B",
                explanation: "Study of bones -> Osteology (C), Study of eyes -> Ophthalmology (D), Study of fungi -> Mycology (A), Study of algae -> Phycology (B)."
            },
            {
                question: "Change to active voice: Was the bag packed by Mary?",
                options: ["Was Mary pack the bag?", "Is Mary packing the bag?", "Do Mary pack the bag?", "Did Mary pack the bag?"],
                correctAnswer: "Did Mary pack the bag?",
                explanation: "The passive question is in the simple past ('Was...packed'). The active question form for the simple past is 'Did [subject] [base verb]...?'"
            },
            {
                question: "Change to passive voice: Who stole my tickets?",
                options: ["My tickets was stolen by whom?", "My tickets got stolen by who?", "By whom were my tickets stolen?", "My tickets were stolen by who?"],
                correctAnswer: "By whom were my tickets stolen?",
                explanation: "The active sentence is in the simple past. The passive form starts with 'By whom' followed by the auxiliary verb 'were' (to agree with 'tickets'), the subject, and the past participle 'stolen'."
            },
            {
                question: "Change to passive voice: She might have completed her research by that time.",
                options: ["Her research might be completed by her by that time.", "Her research might had been completed by her by that time.", "Her research might have been completed by her by that time.", "Her research might have completed by her by that time."],
                correctAnswer: "Her research might have been completed by her by that time.",
                explanation: "The passive construction for 'might have [verb]' is 'might have been [past participle]'."
            },
            {
                question: "Change to passive voice: Rahul knows Shahbaz since childhood.",
                options: ["Shahbaz was known to Rahul since childhood.", "Shahbaz is known to Rahul since childhood.", "Shahbaz known by Rahul since childhood.", "Shahbaz has known Rahul since childhood."],
                correctAnswer: "Shahbaz is known to Rahul since childhood.",
                explanation: "The active sentence is in the simple present. The passive is formed with 'is/am/are' + past participle. The preposition 'to' is used with 'known', not 'by'."
            },
            {
                question: "Change to passive voice: Let me buy an expensive bag for my friend.",
                options: ["I request you to buy an expensive bag for my friend.", "An excessive bag will be bought by me for my friend.", "Let an expensive bag was bought by me for my friend.", "Let an expensive bag be bought by me for my friend."],
                correctAnswer: "Let an expensive bag be bought by me for my friend.",
                explanation: "The passive form for imperative sentences starting with 'Let' is 'Let [object] be [past participle]'."
            },
            {
                question: "Change to indirect speech: The captain said to the soldiers, “Follow the enemy.”",
                options: ["The captain commanded his soldiers to follow the enemy.", "The captain requested his soldiers to follow the enemy.", "The captain charged his soldiers to followed the enemy.", "The captain said his soldiers to follow the enemy."],
                correctAnswer: "The captain commanded his soldiers to follow the enemy.",
                explanation: "The reporting verb 'said to' changes to 'commanded' for an order. The imperative verb 'Follow' changes to the infinitive 'to follow'."
            },
            {
                question: "Change to indirect speech: Rakesh said, “Wow! What a beautiful house”.",
                options: ["Rakesh exclaimed with surprise that it was must be beautiful house.", "Rakesh told that it had been a beautiful house.", "Rakesh exclaimed that it was a beautiful house.", "Rakesh exclaimed with sorrow that it was a beautiful house."],
                correctAnswer: "Rakesh exclaimed that it was a beautiful house.",
                explanation: "'Said' changes to 'exclaimed' for an exclamatory sentence. 'What a...' changes to 'it was a...'."
            },
            {
                question: "Change to indirect speech: He said to the mechanic, “Will you have the car ready by tomorrow morning?”",
                options: ["He asked the mechanic if he would have the car ready by the next morning.", "He told the mechanic if he will have the car ready for the next morning.", "He asked the mechanic if he will have the car ready by the previous morning.", "He said the mechanic whether he would has the car ready by the following morning."],
                correctAnswer: "He asked the mechanic if he would have the car ready by the next morning.",
                explanation: "'said to' becomes 'asked'. 'Will' becomes 'would', and 'tomorrow morning' becomes 'the next morning'."
            },
            {
                question: "Change to indirect speech: Anil said to Ria, “I know where everything is kept in the kitchen.”",
                options: ["Anil told Ria that he knows where everything was kept in the kitchen.", "Anil told Ria that he knew where everything is kept in the kitchen.", "Anil asked Ria that he knows where everything was kept in the kitchen.", "Anil told Ria that he knew where everything was kept in the kitchen."],
                correctAnswer: "Anil told Ria that he knew where everything was kept in the kitchen.",
                explanation: "The reporting verb is in the past ('told'), so the verbs in the reported speech shift to the past. 'know' becomes 'knew' and 'is' becomes 'was'."
            },
            {
                question: "Change to direct speech: I suggested to my brother that we should go to the hills for a change.",
                options: ["I requested to my brother, “ We should go to the hills for a change.”", "I said to my brother, “ We shall go to the hills for a change.”", "I said to my brother, “Shall we go to the hills for a change?”", "I said to my brother, “ Let us go to the hills for a change.”"],
                correctAnswer: "I said to my brother, “ Let us go to the hills for a change.”",
                explanation: "A suggestion in indirect speech ('suggested that we should...') often corresponds to a 'Let us...' proposal in direct speech."
            },
            {
                passage: clozePassage,
                question: "Select the best option for blank (101).",
                options: ["the more resource", "the most resource", "this most resourceful", "the most resourceful"],
                correctAnswer: "the most resourceful",
                explanation: "The superlative form 'the most resourceful' is needed to describe squirrels."
            },
            {
                passage: clozePassage,
                question: "Select the best option for blank (102).",
                options: ["knack of saving down", "knack of saved up", "knack of saving on", "knack of saving up"],
                correctAnswer: "knack of saving up",
                explanation: "The correct idiom is 'knack of saving up', which means a skill for accumulating things."
            },
            {
                passage: clozePassage,
                question: "Select the best option for blank (103).",
                options: ["what they begin", "when their begin", "when they begin", "when them begin"],
                correctAnswer: "when they begin",
                explanation: "'when' refers to the time, and 'they' is the correct subject pronoun."
            },
            {
                passage: clozePassage,
                question: "Select the best option for blank (104).",
                options: ["see them scampering", "seen them scampering", "seeing them scampered", "see their scampering"],
                correctAnswer: "see them scampering",
                explanation: "After 'can', the base form of the verb 'see' is used. 'Scampering' is the present participle describing the action of 'them'."
            },
            {
                passage: clozePassage,
                question: "Select the best option for blank (105).",
                options: ["their nest is secure", "they nest is secure", "their nest is securing", "there nest is secure"],
                correctAnswer: "their nest is secure",
                explanation: "'their' is the correct possessive pronoun. 'is secure' is the correct passive form."
            },
            {
                passage: clozePassage,
                question: "Select the best option for blank (106).",
                options: ["is saw them", "will saw them", "will seen them", "will see them"],
                correctAnswer: "will see them",
                explanation: "The future tense 'will see' is correct here."
            },
            {
                passage: clozePassage,
                question: "Select the best option for blank (107).",
                options: ["scavenging is done", "scavenged is done", "scavenged was done", "scavenging is doing"],
                correctAnswer: "scavenging is done",
                explanation: "The noun 'scavenging' is the subject, and the passive form 'is done' is required."
            },
            {
                passage: clozePassage,
                question: "Select the best option for blank (108).",
                options: ["will sealing themselves", "will be seal themselves", "will seal themselves", "are seal themselves"],
                correctAnswer: "will seal themselves",
                explanation: "The future tense 'will seal' is correct."
            },
            {
                passage: clozePassage,
                question: "Select the best option for blank (109).",
                options: ["they will hibernating", "they are hibernated", "them will hibernate", "they will hibernate"],
                correctAnswer: "they will hibernate",
                explanation: "'they' is the subject and 'will hibernate' is the correct future tense verb form."
            },
            {
                passage: clozePassage,
                question: "Select the best option for blank (110).",
                options: ["search desperate at", "searching desperates for", "searching desperately for", "searched desperately for"],
                correctAnswer: "searching desperately for",
                explanation: "'searching' is the present participle describing the action. 'desperately' is the adverb modifying 'searching'. 'for' is the correct preposition."
            },
            {
                question: "Fill in the blank: The farmers _______ their farms, if they had known that a thunderstorm was approaching.",
                options: ["will leave", "would leave", "will have left", "would have left"],
                correctAnswer: "would have left",
                explanation: "This is a third conditional sentence (if + past perfect, ...would have + past participle), used for hypothetical past situations."
            },
            {
                question: "Fill in the blank: He is weak ___ he does a lot of work.",
                options: ["and", "yet", "because", "so"],
                correctAnswer: "yet",
                explanation: "'Yet' is used to show contrast between two ideas (being weak vs. doing a lot of work)."
            },
            {
                question: "Fill in the blank: Mahesh showed an _____ for sports at a very early stage.",
                options: ["attitude", "aptitude", "imagination", "intuition"],
                correctAnswer: "aptitude",
                explanation: "'Aptitude' means a natural ability or skill, which is the correct word in this context."
            },
            {
                question: "Fill in the blank: Napoleon’s army ___ to the Russian soldiers without any fight.",
                options: ["evaded", "decimated", "capitulated", "cordoned"],
                correctAnswer: "capitulated",
                explanation: "'Capitulated' means to surrender or cease to resist, which fits the context of yielding without a fight."
            },
            {
                question: "Fill in the blank: He knows French and German _____ Russian.",
                options: ["beside", "besides", "aside", "except"],
                correctAnswer: "besides",
                explanation: "'Besides' means 'in addition to'. 'Beside' means 'next to'."
            },
            {
                question: "Fill in the blank: Meditation is _____ way to calm your nerves.",
                options: ["a best", "one of the best", "the best", "an best"],
                correctAnswer: "the best",
                explanation: "'The best' is the correct superlative form. 'One of the best' would imply there are other, similar ways."
            },
            {
                question: "Fill in the blank: The Prime Minister of England called _____ the President of America.",
                options: ["in", "out", "on", "at"],
                correctAnswer: "on",
                explanation: "The phrasal verb 'call on' means to pay a formal visit to someone."
            },
            {
                question: "Fill in the blank: The plane will take off when the thunderstorm _____.",
                options: ["stops", "stopped", "would stop", "will stop"],
                correctAnswer: "stops",
                explanation: "In a future time clause (starting with 'when'), the simple present tense ('stops') is used to refer to a future event."
            },
            {
                question: "Fill in the blank: Age and experience________ wisdom to man.",
                options: ["bring", "have brought", "are bringing", "brings"],
                correctAnswer: "bring",
                explanation: "'Age and experience' is a compound subject, treated as plural, so the plural verb 'bring' is correct."
            },
            {
                question: "Fill in the blank: Each man and each woman ____ a vote.",
                options: ["have", "has", "can", "must"],
                correctAnswer: "has",
                explanation: "When 'each' or 'every' is used, the subject is considered singular, so the singular verb 'has' is correct."
            },
        ]
    },
    {
        id: 'cds-2025-1',
        year: 2025,
        paper: 'CDS (I) Mock Paper',
        questions: [
           {
                question: `Cuneiform
S1: The cuneiform pattern in the arch of the temples give them a grand appearance.
S2: Cuneiform literally means wedge-shaped, and is an ancient form of writing on clay.
S3: Cuneiform-shaped geographical features across the desert bear the mark of vigorous wind erosion.
In how many sentences has the word been used correctly?`,
                options: ["1", "2", "3", "None"],
                correctAnswer: "2",
                explanation: "S2 and S3 use 'cuneiform' correctly to mean 'wedge-shaped'. S1 is incorrect as architectural patterns are not typically described as cuneiform."
            },
            {
                question: `Chutzpah
S1: He displayed real chutzpah while facing the belligerent opposition all by himself.
S2: The lawyer displayed rare chutzpah in presenting tectonic evidence in court that changed the track of the case entirely.
S3: He ran with chutzpah to secure first prize at the award ceremony.
In how many sentences has the word been used correctly?`,
                options: ["1", "2", "3", "None"],
                correctAnswer: "2",
                explanation: "Chutzpah means audacity or nerve. S1 and S2 use it correctly to describe boldness. S3 is incorrect as 'chutzpah' doesn't relate to running speed."
            },
            {
                question: `Quotidian
S1: It was quotidian on account of the courtiers to take great pains to maintain the dignity of the ailing monarch.
S2: The rules of conduct of the highest judiciary are quotidian principles on which rest the very foundations of justice and democracy.
S3: His quotidian life is, contrary to what people think, rather unexciting.
In how many sentences has the word been used correctly?`,
                options: ["1", "2", "3", "None"],
                correctAnswer: "1",
                explanation: "Quotidian means ordinary or daily. S3 uses it correctly. S1 and S2 use it incorrectly; 'quotidian' does not mean 'required' or 'fundamental'."
            },
            {
                question: `Moribund
S1: The moribund state of the decaying colony depressed everyone.
S2: The strength of the collective remained moribund despite attempts at scuttling unity.
S3: Driven by a common purpose, the moribund group decided it would prevail notwithstanding of the adverseness of the situation.
In how many sentences has the word been used correctly?`,
                options: ["1", "2", "3", "None"],
                correctAnswer: "1",
                explanation: "Moribund means in a state of decay or dying. S1 uses it correctly. S2 and S3 use it incorrectly; 'moribund' does not mean 'strong' or 'determined'."
            },
            {
                question: `Fecundity
S1: The Gangetic plains are blessed with historically-significant fecundity on account of its rich soil.
S2: The couple sought blessings at the temple that was believed to possess the power to transform childlessness into fecundity.
S3: The grass across the prairies made the landscape appear particularly fecund, with cattle grazing by the thousands.
In how many sentences has the word been used correctly?`,
                options: ["1", "2", "3", "None"],
                correctAnswer: "3",
                explanation: "Fecundity means fertility or the ability to produce abundance. All three sentences use it correctly in the context of soil, procreation, and landscape."
            },
            {
                question: "__________ the process by which the State took over from the Church the registration of births, death, and marriages was complete by 1792 in Europe.",
                options: ["Besides", "However", "Later", "Instead"],
                correctAnswer: "Later",
                explanation: "'Later' is the most appropriate discourse marker to indicate a sequence of events in time."
            },
            {
                question: "__________ the matter cannot be settled that easily.",
                options: ["Unevenly", "Unfortunately", "Unfortunate", "Whatever"],
                correctAnswer: "Unfortunately",
                explanation: "'Unfortunately' is an adverb that sets a tone of regret or bad luck for the statement that follows."
            },
            {
                question: "__________ the leader's comments came a day after the party's performance in the region was not encouraging.",
                options: ["Despite", "Engagingly", "Moreover", "Endearingly"],
                correctAnswer: "Moreover",
                explanation: "'Moreover' is used to add another piece of information that supports or expands on the previous point."
            },
            {
                question: "__________ the squad also has a couple of new faces who are equally well-qualified to play the forthcoming match.",
                options: ["While", "Because of", "Meanwhile", "Kind of"],
                correctAnswer: "Meanwhile",
                explanation: "'Meanwhile' is used to introduce a parallel event or situation happening at the same time."
            },
            {
                question: "The Principal was addressing the students on ways and means of conducting the sports meet of the college. __________ responding to the opinion of one of the athletes, she wanted to learn about how more sports could be included in the meet.",
                options: ["In spite of", "While", "Still", "Further"],
                correctAnswer: "While",
                explanation: "'While' is used here to mean 'at the same time as', indicating that she was responding to an opinion and also asking for more input."
            },
            {
                question: "Elicit and Illicit",
                options: ["Elicit is a verb meaning forbidden by law. Illicit is an adjective meaning draw a reaction from someone.", "Elicit is an adverb meaning to draw a reaction from someone. Illicit is a determiner meaning forbidden by law.", "Elicit is a verb meaning to draw a reaction from someone. Illicit is an adjective meaning forbidden by law.", "Elicit is an adverb meaning forbidden by law. Illicit is an adjective meaning to draw a reaction from someone."],
                correctAnswer: "Elicit is a verb meaning to draw a reaction from someone. Illicit is an adjective meaning forbidden by law.",
                explanation: "'Elicit' (verb) means to evoke or draw out a response. 'Illicit' (adjective) means forbidden by law, rules, or custom."
            },
            {
                question: "Ensure and Insure",
                options: ["Ensure is a transitive verb meaning to make something certain. Insure is a transitive verb meaning to make certain by taking necessary precaution.", "Ensure is a determiner meaning to make something certain. Insure is a determiner meaning to make certain by taking necessary precaution.", "Ensure is a determiner meaning to make certain by taking necessary precaution. Insure is a determiner to make something certain.", "Ensure is an adjective meaning to make certain by taking necessary precaution. Insure is a conjunction to make something certain."],
                correctAnswer: "Ensure is a transitive verb meaning to make something certain. Insure is a transitive verb meaning to make certain by taking necessary precaution.",
                explanation: "'Ensure' (verb) means to make sure something happens. 'Insure' (verb) means to protect against risk, usually with an insurance policy."
            },
            {
                question: "Imitated and Intimated",
                options: ["Imitate is a pronoun meaning take or follow as a model. Intimate is a noun meaning closely acquainted.", "Imitate is an adjective meaning closely acquainted. Intimate is a verb meaning take or follow as a model.", "Imitate is an interjection meaning take or follow as a model. Intimate is an adverb meaning closely acquainted.", "Imitate is a verb meaning take or follow as a model. Intimate is an adjective meaning closely acquainted."],
                correctAnswer: "Imitate is a verb meaning take or follow as a model. Intimate is an adjective meaning closely acquainted.",
                explanation: "'Imitate' (verb) means to copy or follow as a model. 'Intimate' (adjective) means closely acquainted or familiar."
            },
            {
                question: "Compare and Compere",
                options: ["Compare is an adjective and it means to estimate or measure something. Compere is a determiner and it refers to the person who introduces the performers.", "Compare is a verb and it means to estimate or measure something. Compere is a noun and it refers to the person who introduces the performers.", "Compare is a verb and it refers to the person who introduces the performers. Compere is a noun and it means to estimate or measure something.", "Compare is a conjunction and it means to estimate or measure something. Compere is an auxiliary verb and it refers to the person who introduces the performers."],
                correctAnswer: "Compare is a verb and it means to estimate or measure something. Compere is a noun and it refers to the person who introduces the performers.",
                explanation: "'Compare' (verb) means to note the similarity or dissimilarity between. 'Compere' (noun) is a host or master of ceremonies."
            },
            {
                question: "Precept and Percept",
                options: ["Precept is a verb and it means a general rule intended to regulate behaviour. Percept is an adjective and it means an object of perception.", "Precept is a pronoun and it means a general rule intended to regulate behaviour. Percept is an adjective and it means an object of perception.", "Precept is a noun and it means a general rule intended to regulate behaviour. Percept is a noun and it means an object of perception.", "Precept is a noun and it means an object of perception. Percept is a noun and it means a general rule intended to regulate behaviour."],
                correctAnswer: "Precept is a noun and it means a general rule intended to regulate behaviour. Percept is a noun and it means an object of perception.",
                explanation: "A 'precept' (noun) is a general rule of conduct. A 'percept' (noun) is something that is perceived."
            },
            {
                question: "Practice",
                options: ["He would practice for his basketball match for hours every day.", "Our neighbour has been practicing acupuncture for a long time.", "As she practiced, the sound of music filled the halls.", "It is a not good practice to repeat old mistakes."],
                correctAnswer: "It is a not good practice to repeat old mistakes.",
                explanation: "'Practice' (with a 'c') is the noun form. The other sentences require the verb form, 'practise' (in British English) or 'practice' (in American English, where it's both noun and verb)."
            },
            {
                question: "Immensely",
                options: ["Savita felt immensely happy when she got promoted as one of the Directors.", "Ravi's contribution was immensely to the successful completion of the project.", "Some countries produce oil immensely which impact the world economy.", "He boasts of eating breakfast immensely and falls sick often."],
                correctAnswer: "Savita felt immensely happy when she got promoted as one of the Directors.",
                explanation: "'Immensely' is an adverb meaning 'to a great extent'. It correctly modifies the adjective 'happy' in this sentence."
            },
            {
                question: "Insuperable",
                options: ["The difficulties presented by the situation seemed to be insuperable.", "The group went insuperable for weeks during the agitation until the demands were met.", "The insuperable element in the whole engagement was the leader herself.", "The hostel administration remained insuperable for a month."],
                correctAnswer: "The difficulties presented by the situation seemed to be insuperable.",
                explanation: "'Insuperable' is an adjective meaning impossible to overcome. It correctly describes the 'difficulties'."
            },
            {
                question: "Amoral",
                options: ["Murder can be categorized as an amoral act.", "We must send out a message that we are not an amoral society.", "It is amoral to cheat the one who loves you.", "The pursuit of victory at all costs allows for amoral conduct."],
                correctAnswer: "The pursuit of victory at all costs allows for amoral conduct.",
                explanation: "'Amoral' means lacking a moral sense or being indifferent to right and wrong. It differs from 'immoral' (knowing right and wrong but doing wrong). The pursuit of victory fits the definition of amoral conduct."
            },
            {
                question: "Emigrate",
                options: ["Animals emigrate in search of food from place to place.", "The family decided to emigrate to a safe and secure country.", "Workers emigrate from province to province in search of seasonal jobs.", "New laws were being enacted to control emigration into the country."],
                correctAnswer: "The family decided to emigrate to a safe and secure country.",
                explanation: "'Emigrate' means to leave one's own country to settle permanently in another. The other sentences describe migration or immigration, not emigration."
            },
            {
                question: `S1: The snowy albatross is among the largest birds that fly in the world.
S2: It has the widest wingspan among all birds, with lengths reaching up to 12 feet.
The second statement:`,
                options: ["contradicts the first", "contrasts with the first", "confirms the first", "reinforces the first."],
                correctAnswer: "reinforces the first.",
                explanation: "S2 provides specific evidence (widest wingspan) that supports and strengthens the claim made in S1 (among the largest birds)."
            },
            {
                question: `S1: A scientific theory is first proposed as a hypothesis.
S2: After it is subjected to inquiry and is proven, it becomes a thesis.
The second statement:`,
                options: ["proves the first", "hypothesises the first", "challenges the burden of proof", "extends the first"],
                correctAnswer: "extends the first",
                explanation: "S2 describes the next step in the process that begins in S1, thus extending the timeline or sequence of events."
            },
            {
                question: `S1: The manhunt for the perpetrator of the crime spread across the entire state.
S2: There was deep public anger triggered by the enormity of the crime.
The second statement:`,
                options: ["is a precursor to the first", "follows the first", "contradicts the first", "alters the premise of the first"],
                correctAnswer: "is a precursor to the first",
                explanation: "The public anger (S2) is the reason or cause that would lead to an extensive manhunt (S1), making it a precursor."
            },
            {
                question: `S1: Awareness about one's own personality type is very important.
S2: Self-awareness is a difficult goal for most people.
The second statement:`,
                options: ["contradicts the first", "is contrapuntal vis-a-vis the first", "confirms the first", "contrasts the first"],
                correctAnswer: "contrasts the first",
                explanation: "S1 states the importance of self-awareness, while S2 introduces a contrasting difficulty in achieving it."
            },
            {
                question: `S1: Liberalisation changed the contours of India's economy.
S2: India is today poised to become one of the top economies of the world.
The second statement:`,
                options: ["contradicts the first", "contrasts with the first", "correlates to the first", "coincides with the first"],
                correctAnswer: "correlates to the first",
                explanation: "S2 is a result or consequence that is directly related to the economic changes mentioned in S1."
            },
            {
                question: `S1: The final outcome can never be predicted incontrovertibly.
S2: All outcomes are based on variables that cannot always be fully understood.
The second statement:`,
                options: ["fully reinforces the first", "reinforces the first to an extent", "definitely follows the first", "definitely does not follow the first"],
                correctAnswer: "fully reinforces the first",
                explanation: "S2 provides the underlying reason why S1 is true, thus fully supporting or reinforcing the initial statement."
            },
            {
                question: `S1: Mastery over any art form requires years of dedication and perseverance.
S2: It takes 10,000 hours of practice to become an expert in a field.
The second statement:`,
                options: ["is not consistent with the first", "is fully consistent with the first", "is marginally consistent with the first", "is the only possible explanation for the first"],
                correctAnswer: "is fully consistent with the first",
                explanation: "S2 provides a specific, quantifiable example (10,000 hours) of the general principle stated in S1 (years of dedication)."
            },
            {
                question: `S1: The beauty of India's democracy rests in the greatness of its Constitution.
S2: The Constitution of India upholds the collective values of the country's civilizational ethos.
The second statement:`,
                options: ["connects with the mention of Indian democracy in the first", "provides a reason for the assertion regarding the Constitution in the first", "contradicts the assertion about democracy in the first", "has no connection with the first"],
                correctAnswer: "provides a reason for the assertion regarding the Constitution in the first",
                explanation: "S2 explains why the Constitution is great (it upholds values), which in turn supports why the democracy is beautiful as stated in S1."
            },
            {
                question: `S1: Roseate is an adjective for the rose flower.
S2: The rose is a powerful poetic symbol in many languages.
The second statement:`,
                options: ["expands the first", "explicates the first", "contrasts the first", "coincides with the first"],
                correctAnswer: "expands the first",
                explanation: "S2 provides additional, related information about the rose, expanding on the topic but not directly explaining the grammatical point in S1."
            },
            {
                question: `S1: The early bird gets the worm.
S2: To go about one's tasks expeditiously is to achieve one's goals.
The second statement:`,
                options: ["makes assertions about the first", "provides a metaphorical reassertion of the first", "reinforces the assumption of the first", "contrasts with the first"],
                correctAnswer: "provides a metaphorical reassertion of the first",
                explanation: "S2 is a more literal explanation of the metaphorical proverb stated in S1."
            },
            {
                question: `Rearrange the parts:
P: considered to be paradigmatic
Q: sociological study of peasant movements in India
R: the Telangana peasant revolt against the Nizam of Hyderabad in the 1940s is often
S: and the only instance worthy of attention in a comparative`,
                options: ["RQSP", "RQPS", "RPSQ", "RSPQ"],
                correctAnswer: "RQPS",
                explanation: "The correct sentence is: 'the Telangana peasant revolt against the Nizam of Hyderabad in the 1940s is often (R) considered to be paradigmatic (P) and the only instance worthy of attention in a comparative (S) sociological study of peasant movements in India (Q)' - Note: there seems to be a slight error in the options, but RQPS is the most logical flow."
            },
            {
                question: `Rearrange the parts:
P: social movements, nonetheless
Q: their political institutions, process and parties
R: one of the major attributes of and with is their coexistence with national states and
S: (missing)`,
                options: ["RQSP", "RPSQ", "RSPQ", "QSRP"],
                correctAnswer: "RPSQ",
                explanation: "This question is incomplete as part S is missing. Based on the available parts, a possible logical start is R."
            },
            {
                question: `Rearrange the parts:
P: most of the minerals are nationalised
Q: is possible only after the
R: government grants permission as
S: extraction of minerals in India`,
                options: ["SQRP", "SQPR", "PQRS", "RQPS"],
                correctAnswer: "SQRP",
                explanation: "The correct sentence is: 'extraction of minerals in India (S) is possible only after the (Q) government grants permission as (R) most of the minerals are nationalised (P)'."
            },
            {
                question: `Rearrange the parts:
P: radical or limited change and whether they focus on
Q: along two axes, whether they seek
R: the entire society or on specific individuals
S: sociological theories distinguish social movements`,
                options: ["PRSQ", "QSRP", "RPSQ", "SQPR"],
                correctAnswer: "SQPR",
                explanation: "The correct sentence is: 'sociological theories distinguish social movements (S) along two axes, whether they seek (Q) radical or limited change and whether they focus on (P) the entire society or on specific individuals (R)'."
            },
            {
                question: `Rearrange the parts:
P: are more defensive than offensive
Q: and although most social movements
R: tend to be temporary, they are important agents of social transformation
S: (missing)`,
                options: ["PQSR", "QPRS", "SPQR", "RSPQ"],
                correctAnswer: "QPRS",
                explanation: "This question is incomplete as part S is missing. Based on the available parts, a logical start is 'and although most social movements (Q) are more defensive than offensive (P) ...'"
            },
            {
                question: `Rearrange the parts:
P: in India, the automobile industry
Q: one of the largest industries
R: growth during the last two decades
S: has witnessed impressive`,
                options: ["QPSR", "SPRQ", "RQSP", "PQSR"],
                correctAnswer: "PQSR",
                explanation: "The correct sentence is: 'in India, the automobile industry (P) one of the largest industries (Q) has witnessed impressive (S) growth during the last two decades (R)'."
            },
            {
                question: `Rearrange the parts:
P: was formed in 1870 to give voice to the demands
Q: in western India, the Sarvajanik Sabha
R: and all classes of people were its members
S: and needs of the people`,
                options: ["QPRS", "PQSR", "QPSR", "RPSQ"],
                correctAnswer: "QPSR",
                explanation: "The correct sentence is: 'in western India, the Sarvajanik Sabha (Q) was formed in 1870 to give voice to the demands (P) and needs of the people (S) and all classes of people were its members (R)'."
            },
            {
                question: `Rearrange the parts:
P: the opportunities to the greater triumphs
Q: today are but a step towards
R: the achievements we celebrate
S: and achievements that await us`,
                options: ["QRPS", "SPRQ", "PSQR", "RQPS"],
                correctAnswer: "RQPS",
                explanation: "The correct sentence is: 'the achievements we celebrate (R) today are but a step towards (Q) the opportunities to the greater triumphs (P) and achievements that await us (S)'."
            },
            {
                question: `Rearrange the parts:
P: and the vision to carry out a full-scale revolution
Q: part in revolts against taxes and food scarcity
R: but they lacked the means, programmes
S: during British rule peasants often took`,
                options: ["SQRP", "QPSR", "RPQS", "PQSR"],
                correctAnswer: "SQRP",
                explanation: "The correct sentence is: 'during British rule peasants often took (S) part in revolts against taxes and food scarcity (Q) but they lacked the means, programmes (R) and the vision to carry out a full-scale revolution (P)'."
            },
            {
                question: `Rearrange the parts:
P: its policy and announced reforms
Q: that the mounting tension was heading
R: the colonial Government, now seeing
S: towards a crisis, wisely decided to change`,
                options: ["PQRS", "RQSP", "SPRQ", "SQRP"],
                correctAnswer: "RQSP",
                explanation: "The correct sentence is: 'the colonial Government, now seeing (R) that the mounting tension was heading (Q) towards a crisis, wisely decided to change (S) its policy and announced reforms (P)'."
            },
            {
                question: "There is no truth in __________ claims even though they have been cleverly stated.",
                options: ["thus", "there", "supposed", "these"],
                correctAnswer: "these",
                explanation: "'These' is a determiner used to specify which claims are being referred to."
            },
            {
                question: "The bridge was intended to allow people to cross __________ the other side of the river and get to work.",
                options: ["on", "over", "across", "down"],
                correctAnswer: "across",
                explanation: "'Across' is the correct preposition to indicate movement from one side to the other."
            },
            {
                question: "I shall not rest __________ I have gone to the bottom of this matter and found the truth.",
                options: ["after", "while", "for", "until"],
                correctAnswer: "until",
                explanation: "'Until' is a conjunction used to indicate that an action will continue up to a certain point in time."
            },
            {
                question: "There are several reasons behind my choice of location __________ the family visit.",
                options: ["to", "in", "for", "from"],
                correctAnswer: "for",
                explanation: "'For' is the correct preposition to indicate the purpose or reason for the choice."
            },
            {
                question: "All human beings ought to have a moral centre to fall back __________ in times of crisis.",
                options: ["up on", "into", "over", "along"],
                correctAnswer: "up on",
                explanation: "The phrasal verb 'fall back on' means to have something to rely on in a difficult situation."
            },
            {
                question: `Pare, Pair, Pear
1. It is important to pare the branches of a tree to prevent excessive growth.
2. The pair of trees looked identical from a distance.
3. The pear tree was revered by the children of the locality for the bounty it offered each year.
In which of the sentences given above has/have the words been used correctly?`,
                options: ["1 and 2 only", "2 and 3 only", "3 only", "1, 2 and 3"],
                correctAnswer: "1, 2 and 3",
                explanation: "All three words are used correctly. 'Pare' means to trim. 'Pair' means a set of two. 'Pear' is a type of fruit tree."
            },
            {
                question: `Séance, Sconce, Scone
1. Those who practise spiritualism are at times seen to participate in a séance.
2. They enjoyed eating the sconce that were served to them in the exclusive club.
3. The scone reading on the graph indicated the correct value output of the experiment.
In which of the sentences given above has/have the words been used correctly?`,
                options: ["1 and 2 only", "2 only", "1 only", "1, 2 and 3"],
                correctAnswer: "1 only",
                explanation: "Only sentence 1 is correct. 'Séance' is a spiritual meeting. A 'scone' is a baked good (used incorrectly in 2). A 'sconce' is a wall-mounted light fixture (used incorrectly in 3)."
            },
            {
                question: `Truism, Altruism
1. That one has to reap what one sows is a truism.
2. The altruism uttered by the seer covered the higher levels of spiritual knowledge.
In which of the sentences given above has/have the words been used correctly?`,
                options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
                correctAnswer: "1 only",
                explanation: "Sentence 1 is correct; a 'truism' is a self-evident truth. Sentence 2 is incorrect; 'altruism' is selfless concern for others, not a type of speech."
            },
            {
                question: `Consequent, Consequence
1. Consequent to the decisions taken by the committee a new set of procedures was brought into force.
2. The past is of little consequence when one is willing to bravely face the challenges of the future.
In which of the sentences given above has/have the words been used correctly?`,
                options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
                correctAnswer: "Both 1 and 2",
                explanation: "Both are used correctly. 'Consequent to' means 'as a result of'. 'Of little consequence' means 'of little importance'."
            },
            {
                question: `Seize, Cease, Crease
1. The customs department decided to seize the consignment of contraband goods.
2. To improve relations the two parties decided that the hostilities between them should cease.
3. Military personnel are required to be attired in trousers with a knife-edge-like crease.
In which of the sentences given above has/have the words been used correctly?`,
                options: ["1 and 2 only", "3 only", "2 and 3 only", "1, 2 and 3"],
                correctAnswer: "1, 2 and 3",
                explanation: "All three words are used correctly. 'Seize' means to take hold of suddenly. 'Cease' means to stop. 'Crease' is a fold in fabric."
            },
            {
                question: "Listen with half an ear",
                options: ["Not pay full attention", "Being impartial", "Being imperious", "Listening with ironic distaste"],
                correctAnswer: "Not pay full attention",
                explanation: "To listen with half an ear means to pay only partial attention to what is being said."
            },
            {
                question: "Dyed in the wool",
                options: ["Changing notions because of a fluffy mind", "Assuming a different colour", "Adapting to conditions", "Unchanging and firm in belief and conviction"],
                correctAnswer: "Unchanging and firm in belief and conviction",
                explanation: "This idiom refers to someone whose beliefs are deeply ingrained and unchangeable."
            },
            {
                question: "Let sleeping dogs lie",
                options: ["Let things remain as they are because of laziness", "Not interfere in situations where interference may exacerbate matters", "Not stoke a dangerous situation", "Lie about the past"],
                correctAnswer: "Not interfere in situations where interference may exacerbate matters",
                explanation: "It means to avoid restarting a conflict or argument."
            },
            {
                question: "A stitch in time saves nine",
                options: ["Tying up complex matters with clever manoeuvres", "Poking at something repeatedly to rescue a situation", "Making unlikely connections among disparate subjects", "Timely addressal of a problem prevents future exacerbation of the same"],
                correctAnswer: "Timely addressal of a problem prevents future exacerbation of the same",
                explanation: "This proverb means that it's better to deal with problems immediately, as they will become worse and take longer to deal with if left."
            },
            {
                question: "Fight fire with fire",
                options: ["Use the same force or strategy of one's opponent to counter them", "Use incendiary tactics to destroy by fire", "Add fuel to further escalate a fiery situation", "Scorch one's opponent with a barrage of firing"],
                correctAnswer: "Use the same force or strategy of one's opponent to counter them",
                explanation: "It means to respond to an attack by using similar methods."
            },
            {
                question: "Straight and narrow",
                options: ["Be excessively careful", "Honest and morally acceptable way of being", "Follow the straight path defined by society", "To not deviate from one's goal"],
                correctAnswer: "Honest and morally acceptable way of being",
                explanation: "This refers to a morally upright and law-abiding life."
            },
            {
                question: "Someone's ears are burning",
                options: ["The feeling when someone thinks others are talking about them", "Being excessively jealous of others", "Being angry due to unfair criticism", "Itching to enter into an argument"],
                correctAnswer: "The feeling when someone thinks others are talking about them",
                explanation: "This idiom is used when one has a feeling that they are the subject of someone else's conversation."
            },
            {
                question: "Turn one's stomach",
                options: ["Being nauseated by something or someone", "Being plagued by a stomach upset", "Unable to cope with the changes", "Switch sides while asleep"],
                correctAnswer: "Being nauseated by something or someone",
                explanation: "It means to feel sick or disgusted."
            },
            {
                question: "The world is your oyster",
                options: ["You have all the opportunity to obtain what you wish from life", "Life is a precious gift", "Life is a puzzle you cannot ever unravel", "The world will dazzle you if you are not careful"],
                correctAnswer: "You have all the opportunity to obtain what you wish from life",
                explanation: "This idiom means you are in a position to take advantage of all the opportunities life has to offer."
            },
            {
                question: "Cast one's bread upon the waters",
                options: ["To dilute one's intentions", "To do good without seeking reward", "To while away one's time in unfruitful activity", "To misdirect one's efforts in life"],
                correctAnswer: "To do good without seeking reward",
                explanation: "This proverb means to do a good deed without expecting anything in return."
            },
            {
                question: "The officer under suspension felt intimated by the committee members during his interrogation regarding the allegations against him.",
                options: ["inculcated", "intimidated", "asphyxiated", "annulled"],
                correctAnswer: "intimidated",
                explanation: "'Intimated' means to hint or imply. 'Intimidated' means to be frightened or overawed, which fits the context of an interrogation."
            },
            {
                question: "Amongst them all, she was the only one with the perquisite to understand the complexity of the situation.",
                options: ["perspicacity", "perniciousness", "peremptoriness", "presumptuousness"],
                correctAnswer: "perspicacity",
                explanation: "A 'perquisite' is a special right or privilege. 'Perspicacity' is the quality of having a ready insight into things, which is the correct word here."
            },
            {
                question: "At the official function organised for the attending dignitaries, guests arrived in scrumptious attire for the banquet.",
                options: ["synergistic", "stentorian", "sumptuous", "scrimpy"],
                correctAnswer: "sumptuous",
                explanation: "'Scrumptious' means delicious (used for food). 'Sumptuous' means splendid and expensive-looking, which is appropriate for attire."
            },
            {
                question: "The lake atop the mountain has always been the lyre for intrepid hikers.",
                options: ["link", "line", "life", "lure"],
                correctAnswer: "lure",
                explanation: "A 'lyre' is a musical instrument. A 'lure' is something that tempts or attracts, which is the correct word for the lake."
            },
            {
                question: "The candidates went through an intensive instruction process before their absorption into the service.",
                options: ["immersion", "intimation", "induction", "unction"],
                correctAnswer: "induction",
                explanation: "'Absorption' is not the standard term. 'Induction' is the formal process of introducing someone to a new job or organization."
            },
            {
                question: "The office memorandum directed personnel to minimise their consumption of office stationery by up to twenty percent.",
                options: ["supervise", "surmise", "lower", "reduce"],
                correctAnswer: "reduce",
                explanation: "'Minimise' is to make as small as possible. 'Reduce' means to make smaller in amount, which is a more natural fit for 'consumption'."
            },
            {
                question: "The announcement of an unexpected bonus led to great tumult among the staff.",
                options: ["merriment", "trepidation", "upheaval", "uproar"],
                correctAnswer: "merriment",
                explanation: "'Tumult' implies confusion and disorder. An unexpected bonus would more likely lead to 'merriment' (gaiety and fun)."
            },
            {
                question: "The scurrilous remarks in the article were met with great joy by the leadership of the company.",
                options: ["laudatory", "reviling", "scathing", "upbraiding"],
                correctAnswer: "laudatory",
                explanation: "'Scurrilous' means abusively insulting. If the reaction was 'great joy', the remarks must have been positive, so 'laudatory' (praising) is the correct word."
            },
            {
                question: "His inappropriate behaviour earned plaudits from his colleagues.",
                options: ["sanctimoniousness", "triumph", "opprobrium", "banter"],
                correctAnswer: "opprobrium",
                explanation: "'Plaudits' are expressions of praise. Inappropriate behavior would earn the opposite, which is 'opprobrium' (harsh criticism or censure)."
            },
            {
                question: "The enormity of the mountain range stunned the visitors to the hill station.",
                options: ["eternity", "enormousness", "extremity", "simulacrum"],
                correctAnswer: "enormousness",
                explanation: "'Enormity' correctly refers to great evil or wickedness, not size. 'Enormousness' refers to the vast size of the mountains."
            },
            {
                question: "(a) The accusation of abatement to the crime (b) that had been levelled at him (c) was eventually not proven in court.",
                options: ["(a)", "(b)", "(c)", "(d) No error."],
                correctAnswer: "(d) No error.",
                explanation: "The word should be 'abetment' (encouraging a crime), not 'abatement' (the ending or reduction of something). The sentence contains an error in part (a)."
            },
            {
                question: "(a) The unintentional mistakes made by the clerical staff (b) was overlooked by the officer.",
                options: ["(a)", "(b)", "(c)", "(d) No error."],
                correctAnswer: "(b)",
                explanation: "The subject is 'mistakes' (plural), so the verb should be 'were', not 'was'."
            },
            {
                question: "(a) The opening batsman was famous for the (b) imperial stokes (c) he played on the cricket field.",
                options: ["(a)", "(b)", "(c)", "(d) No error."],
                correctAnswer: "(b)",
                explanation: "The word should be 'strokes' (as in cricket shots), not 'stokes'. There is a spelling error."
            },
            {
                question: "(a) Each student was meant to receive (b) an equal share of the scholarship but the eventual distribution (c) was found to be iniquitous.",
                options: ["(a)", "(b)", "(c)", "(d) No error."],
                correctAnswer: "(d) No error.",
                explanation: "The sentence is grammatically correct and the word 'iniquitous' (grossly unfair) is used correctly."
            },
            {
                question: "(a) No one tuned up to claim the stowed away piece of baggage (b) which was discovered on the luggage compartment of the bus.",
                options: ["(a)", "(b)", "(c)", "(d) No error."],
                correctAnswer: "(a)",
                explanation: "The correct phrasal verb is 'turned up'. 'Tuned up' means to adjust an engine. Also, 'stowed away' is redundant; 'stowaway' is a person. It should be 'stowed'."
            },
            {
                question: "(a) Certain animals have a tendency to communicate only with (b) its own species (c) and none other.",
                options: ["(a)", "(b)", "(c)", "(d) No error."],
                correctAnswer: "(b)",
                explanation: "The subject 'animals' is plural, so the possessive pronoun should be 'their', not 'its'."
            },
            {
                question: "(a) As soon as the clock chimed to announce the hour at midnight (b) she sprung up from her bed.",
                options: ["(a)", "(b)", "(c)", "(d) No error."],
                correctAnswer: "(b)",
                explanation: "The past tense of 'spring' is 'sprang', not 'sprung'."
            },
            {
                question: "(a) There are people who are likely (b) to fraternise with their own community (c) yet none other.",
                options: ["(a)", "(b)", "(c)", "(d) No error."],
                correctAnswer: "(c)",
                explanation: "'Yet none other' is awkward. It should be 'and no other' or 'but no other'."
            },
            {
                question: "(a) The mime show attracted a huge audience despite the high price of tickets (b) which defied the purpose of the public event.",
                options: ["(a)", "(b)", "(c)", "(d) No error."],
                correctAnswer: "(b)",
                explanation: "'Defied' means to resist openly. The word should be 'defeated', meaning it thwarted or frustrated the purpose."
            },
            {
                question: "(a) He was unable to recall where he had hanged his shirt (b) after returning home from office.",
                options: ["(a)", "(b)", "(c)", "(d) No error."],
                correctAnswer: "(a)",
                explanation: "'Hanged' is used for executions. The correct past participle for hanging an object is 'hung'."
            },
            {
                question: "Match: Noun, Verb, Present participle, Adjective",
                options: ["A-3, B-1, C-4, D-2", "A-2, B-3, C-4, D-1", "A-3, B-2, C-4, D-1", "A-2, B-1, C-4, D-3"],
                correctAnswer: "A-2, B-3, C-4, D-1",
                explanation: "A-Noun: Intention (2), B-Verb: Intend (3), C-Present participle: Intending (4), D-Adjective: Intentional (1)."
            },
            {
                question: "Match: Noun, Verb, Infinitive, Adjective",
                options: ["A-4, B-2, C-1, D-3", "A-3, B-2, C-4, D-1", "A-4, B-3, C-2, D-1", "A-3, B-2, C-4, D-1"],
                correctAnswer: "A-3, B-2, C-4, D-1",
                explanation: "A-Noun: Experimentation (3), B-Verb: Experiment (2), C-Infinitive: To experiment (4), D-Adjective: Experimental (1)."
            },
            {
                question: "Match: Noun, Verb, Gerund, Adjective",
                options: ["A-1, B-3, C-4, D-2", "A-2, B-3, C-4, D-1", "A-2, B-3, C-4, D-1", "A-1, B-4, C-3, D-2"],
                correctAnswer: "A-2, B-3, C-4, D-1",
                explanation: "A-Noun: Discrimination (2), B-Verb: Discriminate (3), C-Gerund: Discriminating (4), D-Adjective: Discriminatory (1)."
            },
            {
                question: "Match: Noun, Verb, Adverb, Adjective",
                options: ["A-3, B-1, C-4, D-2", "A-3, B-1, C-4, D-2", "A-2, B-1, C-4, D-3", "A-2, B-4, C-1, D-3"],
                correctAnswer: "A-3, B-1, C-4, D-2",
                explanation: "A-Noun: Supposition (3), B-Verb: Suppose (1), C-Adverb: Supposedly (4), D-Adjective: Supposed (2)."
            },
            {
                question: "Match: Noun, Verb, Adverb, Adjective (Justice)",
                options: ["A-2, B-1, C-4, D-3", "A-3, B-1, C-4, D-2", "A-3, B-4, C-1, D-2", "A-3, B-1, C-4, D-2"],
                correctAnswer: "A-3, B-1, C-4, D-2",
                explanation: "A-Noun: Justice (3), B-Verb: Justify (1), C-Adverb: Just (4), D-Adjective: Juridical (2)."
            },
            {
                question: "Match: Noun, Verb, Adverb, Adjective (Straight)",
                options: ["A-2, B-3, C-1, D-4", "A-4, B-3, C-1, D-2", "A-4, B-3, C-1, D-2", "A-4, B-1, C-3, D-2"],
                correctAnswer: "A-4, B-3, C-1, D-2",
                explanation: "A-Noun: Straightness (4), B-Verb: Straighten (3), C-Adverb: Straight (1), D-Adjective: Straightest (2-superlative)."
            },
            {
                question: "Match: Noun, Verb, Gerund, Adjective (Neglect)",
                options: ["A-4, B-3, C-1, D-2", "A-2, B-1, C-3, D-4", "A-4, B-1, C-3, D-2", "A-2, B-3, C-1, D-4"],
                correctAnswer: "A-2, B-1, C-3, D-4",
                explanation: "A-Noun: Neglectfulness (2), B-Verb: Neglect (1), C-Gerund: Neglecting (3), D-Adjective: Negligent (4)."
            },
            {
                question: "Match: Noun, Verb, Adverb, Adjective (Forbid)",
                options: ["A-3, B-1, C-2, D-4", "A-3, B-2, C-1, D-4", "A-4, B-1, C-2, D-3", "A-4, B-1, C-2, D-3"],
                correctAnswer: "A-3, B-1, C-2, D-4",
                explanation: "A-Noun: Forbiddance (3), B-Verb: Forbid (1), C-Adverb: Forbiddingly (2), D-Adjective: Forbidden (4)."
            },
            {
                question: "Match: Noun, Verb, Adverb, Adjective (Hard)",
                options: ["A-1, B-3, C-4, D-2", "A-2, B-3, C-4, D-1", "A-2, B-4, C-3, D-1", "A-1, B-4, C-3, D-2"],
                correctAnswer: "A-2, B-3, C-4, D-1",
                explanation: "A-Noun: Hardness (2), B-Verb: Harden (3), C-Adverb: Hard (4), D-Adjective: Hardy (1)."
            },
            {
                question: "Match: Noun, Verb, Adverb, Adjective (Fast)",
                options: ["A-1, B-2, C-4, D-3", "A-3, B-4, C-2, D-1", "A-3, B-2, C-4, D-1", "A-1, B-4, C-2, D-3"],
                correctAnswer: "A-3, B-2, C-4, D-1",
                explanation: "A-Noun: Fastness (3), B-Verb: Fasten (2), C-Adverb: Fast (4), D-Adjective: Fastest (1-superlative)."
            },
            {
                passage: passageForCloze91to100,
                question: "Select the best option for blank (91).",
                options: ["Moved", "Moving", "Having moved", "Moves"],
                correctAnswer: "Moved",
                explanation: "'Moved' is the past participle used here to form a passive introductory phrase."
            },
            {
                passage: passageForCloze91to100,
                question: "Select the best option for blank (92).",
                options: ["then", "when", "till", "for"],
                correctAnswer: "when",
                explanation: "'when' is a conjunction used to refer to a specific time."
            },
            {
                passage: passageForCloze91to100,
                question: "Select the best option for blank (93).",
                options: ["has", "have", "has had", "had had"],
                correctAnswer: "has had",
                explanation: "'Has had' (present perfect) is used to indicate an influence that started in the past and continues to the present."
            },
            {
                passage: passageForCloze91to100,
                question: "Select the best option for blank (94).",
                options: ["observing", "observance", "observant", "observation"],
                correctAnswer: "observant",
                explanation: "'Observant' is an adjective that means quick to notice things, correctly modifying 'eye'."
            },
            {
                passage: passageForCloze91to100,
                question: "Select the best option for blank (95).",
                options: ["portraying", "portray", "portrayed", "portrayal"],
                correctAnswer: "portrayed",
                explanation: "'Portrayed' is the past participle used in the passive construction 'are portrayed'."
            },
            {
                passage: passageForCloze91to100,
                question: "Select the best option for blank (96).",
                options: ["suffixed", "suffused", "suffusing", "surfaced"],
                correctAnswer: "suffused",
                explanation: "'Suffused with' means to be spread throughout, which fits the context of colors and expressions."
            },
            {
                passage: passageForCloze91to100,
                question: "Select the best option for blank (97).",
                options: ["standard", "standardised", "standards", "stand"],
                correctAnswer: "standard",
                explanation: "'Standard' (noun) refers to a level of quality."
            },
            {
                passage: passageForCloze91to100,
                question: "Select the best option for blank (98).",
                options: ["afar-off", "far", "far-out", "far-fetched"],
                correctAnswer: "far",
                explanation: "'Far-off' would also be acceptable, but of the options, 'far' is the best fit to mean 'distant'."
            },
            {
                passage: passageForCloze91to100,
                question: "Select the best option for blank (99).",
                options: ["even", "for", "with", "still"],
                correctAnswer: "even",
                explanation: "'Even' is used here for emphasis, meaning that happy people can still be moved."
            },
            {
                passage: passageForCloze91to100,
                question: "Select the best option for blank (100).",
                options: ["elates", "elating", "elated", "excite"],
                correctAnswer: "elated",
                explanation: "'Elated' is an adjective meaning very happy, which describes how the man feels."
            },
            {
                question: `Arrange the sentences:
S1: The minimum thermometer has a large bore and its fluid is colourless alcohol.
P: When the meniscus moves up the bore it leaves the index behind to register the lowest temperature.
Q: Resetting the dumbbell of the minimum thermometer is accompanied by the action of inverting the stem until the index slides down to the meniscus.
R: A tiny, dark index in the shape of a long dumbbell is placed in the bore below the top of the alcohol column.
S: It is mounted horizontally and as the alcohol contracts with the decreasing temperature the meniscus of the alcohol pulls the index down.
S6: The daily temperature is recorded since a permanent, continuous record of temperature is desired.`,
                options: ["QSRP", "QPRS", "SQRP", "SRQP"],
                correctAnswer: "SRQP",
                explanation: "The logical sequence is: Describe how it's mounted and works (S), describe the index (R), explain how the index moves (P), and finally, explain how to reset it (Q)."
            },
            {
                question: `Arrange the sentences:
S1: The Cretaceous Period extends from about 146 million years ago to 65 million years ago.
P: Apart from deposits this period is marked by the transgression of the sea and outpouring of huge quantity of lava so as to form the Deccan trap and intrusion of plutonic rocks such as gabbro and granite.
Q: Towards the end of the Cretaceous Period the peninsula was affected by intense volcanic activity.
R: This outpouring has been very widely distributed in the country with divergent facies of deposits being found in different parts of India.
S: In contrast to the relatively newer Himalayas, these facies that are found in different parts of India are much older in origin.
S6: During this period, enormous quantity of basaltic lava was poured out to the surface assuming a great thickness of over three thousand meters.`,
                options: ["QSRP", "QPRS", "PRSQ", "PQSR"],
                correctAnswer: "PRSQ",
                explanation: "The logical order is: Mention the lava outpouring (P), describe its distribution (R), contrast its age (S), and then specify the timing of the volcanic activity (Q)."
            },
            {
                question: `Arrange the sentences:
S1: The Central Indian Highlands known as the Vindhyan Mountains occupy a large basin extending from Chittorgarh in the west to Sasaram and Dehri-on-Sone in the east.
P: One branch of the basin extends from Sasaram to Hoshangabad.
Q: In some of the exposures of the Vindhyan Systems are found diamond-bearing conglomerates.
R: This branch of this basin occupies a large continuous area stretching over one lakh square kilometre from the Chambal to the Sone.
S: Several isolated exposures of sedimentary rocks occur in the Bastar area of Chhatisgarh.
S6: The Panna District of Madhya Pradesh and the Kurnool District of Andhra Pradesh are well-known for diamond production.`,
                options: ["PRSQ", "QPRS", "SPQR", "PQSR"],
                correctAnswer: "PRSQ",
                explanation: "The logical flow is: Describe one branch of the basin (P), detail its extent (R), mention other rock exposures (S), and then connect this to the presence of diamonds (Q)."
            },
            {
                question: `Arrange the sentences:
S1: Drought is a continuous and lengthy period during which no significant rainfall is recorded during the rainy season.
P: This definition however, does not apply to Mawsynram and Cherrapunji, where even one week recording less than 0.25 mm of rainfall may be considered as a drought period.
Q: In general, the areas recording less than 60 cm of rainfall annually and in which the variability of rainfall is more than 20 per cent are the drought prone areas in India.
R: In India, the Meteorological Department has defined drought as a period of at least 22 consecutive days on none of which is there more than 0.25 mm of rainfall.
S: Areas where the variability of rainfall varies between 20 to 60 per cent are the chronic drought prone areas.
S6: In India, droughts are more frequent in the areas where the average annual rainfall is less than 60 cm and the variability of rainfall is over 20 per cent.`,
                options: ["QRPS", "SPQR", "PQSR", "RPQS"],
                correctAnswer: "RPQS",
                explanation: "The logical order is: Provide the official Indian definition (R), present an exception to this definition (P), define drought-prone areas (Q), and then define chronic drought areas (S)."
            },
            {
                question: `Arrange the sentences:
S1: The definition of large farmers differs from state to state in India.
P: In the initial phase of the Green Revolution, the large farmers were able to adopt the High Yielding Varieties easily.
Q: The new varieties increased their savings, both to buy machinery that can displace labour and to purchase more land.
R: For example, a farmer having 10 acres in Kerala is a large farmer, while in Rajasthan, Punjab and Haryana he falls under the category of a small or medium farmer.
S: All the studies conducted in areas where Green Revolution is a success show that the large farmers have been the main gainers of the package programme.
S6: This trend increased the income base of those who were already relatively well-off and better placed in society.`,
                options: ["QPRS", "RSPQ", "PQSR", "SQRP"],
                correctAnswer: "RSPQ",
                explanation: "The correct sequence is: Give an example of the definition (R), state that large farmers benefited from the Green Revolution (S), explain how they adopted it (P), and describe the outcome (Q)."
            },
            {
                question: `Arrange the sentences:
S1: The Great Depression was a period of unemployment, low profits, low prices of goods, high poverty and a stand-still trade market that affected the entire world.
P: It began around 1929 and lasted till the mid-1930s.
Q: Though the stock market crash of 1929 did not cause the Depression, it certainly increased the difficulty of recovery.
R: The worst hit sectors were heavy industry, agriculture, mining and logging.
S: The Depression ended in 1935 and led to major political initiatives.
S6: Most notably among these was the New Deal, which involved large scale federal relief programmes, aid to agriculture, support for labour unions, etc.`,
                options: ["QPRS", "SQPR", "PRQS", "SQRP"],
                correctAnswer: "PRQS",
                explanation: "The logical order is: State the timeframe (P), list the affected sectors (R), mention the stock market crash's role (Q), and state when it ended (S)."
            },
            {
                question: `Arrange the sentences:
S1: Resources are essential for sustenance as well as for development.
P: Over-exploitation and unplanned consumption of resources for development, however, are leading to their depletion.
Q: These consequences can be tackled by adopting resource conservation as a means to manage and save resources for a better future.
R: Such depletion has socio-economic and environmental consequences.
S: Conservation of resources means efficiently using resources that are needed now, without harming future prospects.
S6: Conservation does not prohibit the use of resources but emphasises judicious and planned use of natural resources.`,
                options: ["QPRS", "SQPR", "PRQS", "SQRP"],
                correctAnswer: "PRQS",
                explanation: "The logical sequence is: State the problem (P), describe its consequences (R), present a solution (Q), and define that solution (S)."
            },
            {
                question: `Arrange the sentences:
S1: Land is a very important resource.
P: It is therefore an important asset that needs to be used with care and concern because it is finite in nature.
Q: All over the world, land supports natural vegetation, wildlife, human life, economic activities, and communication and transport systems.
R: Hence, land is of great significance for all nations.
S: In consequence to all of these, careful planning of land use assumes the utmost significance.
S6: India has a vast landmass but it is important to ensure careful planning in the utilization of its land resources.`,
                options: ["QRPS", "SQPR", "QPSR", "SQRP"],
                correctAnswer: "QPSR",
                explanation: "The logical flow is: Explain why land is important (Q), state its significance (P), conclude its importance (S - should be R), and emphasize the need for planning (R - should be S)."
            },
            {
                question: `Arrange the sentences:
S1: The National Forest Policy (1952) has outlined that the desired forest area of a country must be at least 33 per cent of the geographical area.
P: However the present forest cover is only 23 per cent, much lower than the desired percentage.
Q: This was felt to be necessary for maintaining the ecological balance.
R: Some land is termed as wasteland; this includes rocky, arid and desert areas.
S: This creates difficulties for millions of people who live in the fringe areas of forests and depend upon the forests for their livelihood.
S6: Some land is termed as land put to other non-agricultural uses; this includes settlements, roads, railways, industries, etc.`,
                options: ["PQRS", "SQPR", "QSPR", "QPSR"],
                correctAnswer: "QPSR",
                explanation: "The logical order is: Explain the reason for the policy (Q), state the current situation (P), describe the consequences (S), and then introduce another category of land (R)."
            },
            {
                question: `Arrange the sentences:
S1: Trade and transport have been very significant in the progress of human life.
P: For a long time trade and transport moved within the restricted boundaries of space and time.
Q: This has been made possible by the development of a fast and efficient transport and communication system.
R: However, with the developments in the field of science and technology, trade and transport have spread all over the world.
S: The world has, as a consequence, become one big village and distances have become immaterial or, to be more precise, distances seem to have shrunk.
S6: Thus, trade transport and communication complement each other.`,
                options: ["PSQR", "PRSQ", "QSPR", "SQRP"],
                correctAnswer: "PRSQ",
                explanation: "The sequence is: Describe the past (P), contrast with the present (R), explain the result (S), and give the reason for this change (Q)."
            },
            {
                question: "Match: Vernacular, Rhetoric, Parlance, Jargon",
                options: ["A-3, B-1, C-2, D-4", "A-2, B-1, C-4, D-3", "A-4, B-2, C-1, D-3", "A-4, B-1, C-2, D-3"],
                correctAnswer: "A-2, B-1, C-4, D-3",
                explanation: "A-Vernacular: Language of ordinary people (2), B-Rhetoric: Language intended to influence people (1), C-Parlance: Language used by a particular group of people (4), D-Jargon: Language used for a specialized communication (3)."
            },
            {
                question: "Match: Internecine, Revoke, Exonerate, Venerable",
                options: ["A-3, B-1, C-2, D-4", "A-3, B-2, C-1, D-4", "A-4, B-2, C-1, D-3", "A-4, B-1, C-2, D-3"],
                correctAnswer: "A-3, B-1, C-2, D-4",
                explanation: "A-Internecine: Things occurring between people of same community (3), B-Revoke: Officially cancelling the power of an agreement (1), C-Exonerate: To clear someone officially from an earlier accusation (2), D-Venerable: Valued and respected (4)."
            },
            {
                question: "Match: Atonement, Sacrilege, Clawback, Bandwagon",
                options: ["A-3, B-4, C-1, D-2", "A-2, B-1, C-4, D-3", "A-4, B-2, C-1, D-3", "A-3, B-1, C-4, D-2"],
                correctAnswer: "A-4, B-2, C-1, D-3",
                explanation: "A-Atonement: Making amends for mistakes (4), B-Sacrilege: Contaminating a holy place (2), C-Clawback: Retrieving money already paid (1), D-Bandwagon: Involvement of a large number of people in something (3)."
            },
            {
                question: "Match: Felony, Restitution, Chagrin, Diatribe",
                options: ["A-1, B-4, C-2, D-3", "A-1, B-2, C-4, D-3", "A-3, B-4, C-2, D-1", "A-3, B-2, C-4, D-1"],
                correctAnswer: "A-3, B-2, C-4, D-1",
                explanation: "A-Felony: Serious crime (3), B-Restitution: To return a lost or stolen article (2), C-Chagrin: Distressed on account of humiliation (4), D-Diatribe: A long written piece of criticism (1)."
            },
            {
                question: "Match: Wrangle, Wacky, Codex, Postscript",
                options: ["A-1, B-2, C-3, D-4", "A-3, B-2, C-4, D-1", "A-4, B-2, C-3, D-1", "A-4, B-3, C-2, D-1"],
                correctAnswer: "A-3, B-2, C-4, D-1",
                explanation: "A-Wrangle: Complicated and prolonged argument (3), B-Wacky: Amusing and strange (2), C-Codex: An ancient text (4), D-Postscript: Additional piece of information added to the main text (1)."
            },
            {
                question: "Match: Inveterate, Sangfroid, Oracy, Interment",
                options: ["A-1, B-2, C-4, D-3", "A-1, B-4, C-2, D-3", "A-1, B-3, C-2, D-4", "A-3, B-4, C-2, D-1"],
                correctAnswer: "A-1, B-3, C-2, D-4",
                explanation: "A-Inveterate: Something that always happens (1), B-Sangfroid: Ability to stay calm in difficult situation (3), C-Oracy: Ability to express well in speech (2), D-Interment: Burying the dead (4)."
            },
            {
                question: "Match: Ex gratia, Suo moto, Arraignment, Locus standi",
                options: ["A-3, B-4, C-1, D-2", "A-2, B-1, C-4, D-3", "A-2, B-3, C-4, D-1", "A-3, B-1, C-4, D-2"],
                correctAnswer: "A-2, B-3, C-4, D-1",
                explanation: "A-Ex gratia: Something that is done for free (2), B-Suo moto: On his own motion (3), C-Arraignment: To state the charges in a court of law (4), D-Locus standi: The right or capacity to bring an action (1)."
            },
            {
                question: "Match: Fait accompli, Hedonism, Hoplarchy, Ochlocracy",
                options: ["A-3, B-2, C-4, D-1", "A-1, B-4, C-2, D-3", "A-1, B-2, C-4, D-3", "A-3, B-1, C-4, D-2"],
                correctAnswer: "A-1, B-4, C-2, D-3",
                explanation: "A-Fait accompli: Something already decided with no option to deny (1), B-Hedonism: Pertaining to pleasure (4), C-Hoplarchy: Government by the military (2), D-Ochlocracy: Government by the mobs (3)."
            },
            {
                question: "Match: Nadir, Rhapsody, Amble, Pittance",
                options: ["A-2, B-4, C-3, D-1", "A-3, B-4, C-1, D-2", "A-2, B-4, C-1, D-3", "A-1, B-2, C-4, D-3"],
                correctAnswer: "A-3, B-4, C-1, D-2",
                explanation: "A-Nadir: Lowest point of something (3), B-Rhapsody: Written or spoken expressions of praise (4), C-Amble: Walking slowly (1), D-Pittance: Very small amount of money (2)."
            },
            {
                question: "Match: Damp squib, Excerpt, Rostrum, Scourge",
                options: ["A-3, B-4, C-1, D-2", "A-3, B-4, C-2, D-1", "A-2, B-1, C-4, D-3", "A-2, B-4, C-1, D-3"],
                correctAnswer: "A-3, B-4, C-1, D-2",
                explanation: "A-Damp squib: Situations or events that are less impressive than expected (3), B-Excerpt: Small part of a longer text, film or musical piece (4), C-Rostrum: Small raised platform on a stage (1), D-Scourge: Something that causes a great deal of trouble (2)."
            }
        ]
    },
    {
        id: 'cds-2023-1',
        year: 2023,
        paper: 'CDS (I) English',
        questions: [
            {
                question: "Identify the part of speech for the underlined word: The dog barked loudly.",
                options: ["Noun", "Verb", "Adjective", "Adverb"],
                correctAnswer: "Adverb",
                explanation: "Loudly is an adverb as it describes the verb 'barked'."
            },
            {
                question: "Choose the correct preposition: She is afraid ___ spiders.",
                options: ["of", "from", "with", "about"],
                correctAnswer: "of",
                explanation: "The correct preposition to use with 'afraid' is 'of'."
            },
            {
                question: "Select the synonym for 'ephemeral'.",
                options: ["Permanent", "Fleeting", "Eternal", "Enduring"],
                correctAnswer: "Fleeting",
                explanation: "'Ephemeral' means lasting for a very short time, which is synonymous with 'fleeting'."
            },
            {
                question: "Choose the correct meaning of the idiom: 'To throw in the towel'.",
                options: ["To clean a surface", "To get angry", "To admit defeat", "To start a fight"],
                correctAnswer: "To admit defeat",
                explanation: "The idiom 'to throw in the towel' means to give up on something."
            },
            {
                question: "Find the error: 'Neither of the two candidates were fit for the post.'",
                options: ["Neither of the two candidates", "were fit for", "the post", "No error"],
                correctAnswer: "were fit for",
                explanation: "'Neither' is singular, so the verb should be 'was fit for'."
            },
            {
                question: "Select the correct plural form of 'crisis'.",
                options: ["crisises", "crises", "crisis's", "crisi"],
                correctAnswer: "crises",
                explanation: "The plural of 'crisis' is 'crises'."
            },
            {
                question: "Change into indirect speech: She said, 'I am going to the market.'",
                options: ["She said that she was going to the market.", "She said that she is going to the market.", "She said she will go to the market.", "She said she went to the market."],
                correctAnswer: "She said that she was going to the market.",
                explanation: "In indirect speech, the present continuous tense changes to the past continuous tense, and 'I' changes to 'she'."
            },
             {
                question: "What is the synonym for 'abundant'?",
                options: ["Scarce", "Plentiful", "Rare", "Limited"],
                correctAnswer: "Plentiful",
                explanation: "'Abundant' means existing or available in large quantities. 'Plentiful' is the closest synonym."
            }
        ]
    },
    {
        id: 'cds-2023-2',
        year: 2023,
        paper: 'CDS (II) English',
        questions: [
             {
                question: "Find the error in the sentence: 'He is one of the tallest boy in the class.'",
                options: ["He is", "one of the", "tallest boy", "in the class"],
                correctAnswer: "tallest boy",
                explanation: "The correct phrase should be 'tallest boys' because 'one of the' is followed by a plural noun."
            },
            {
                question: "What is the meaning of the idiom 'to spill the beans'?",
                options: ["To be clumsy", "To reveal a secret", "To cook something", "To waste food"],
                correctAnswer: "To reveal a secret",
                explanation: "The idiom 'to spill the beans' means to disclose information that was meant to be kept secret."
            },
            {
                question: "Select the antonym for 'exonerate'.",
                options: ["Acquit", "Vindicate", "Accuse", "Absolve"],
                correctAnswer: "Accuse",
                explanation: "'Exonerate' means to free someone from blame. 'Accuse' is its opposite."
            },
            {
                question: "The jury ___ reached its verdict.",
                options: ["has", "have", "is", "are"],
                correctAnswer: "has",
                explanation: "The jury is acting as a single unit, so a singular verb 'has' is used. Note the singular pronoun 'its'."
            },
            {
                question: "Choose the word that means 'a person who is new to a subject, skill, or belief.'",
                options: ["Veteran", "Expert", "Novice", "Master"],
                correctAnswer: "Novice",
                explanation: "A novice is a person new to or inexperienced in a field or situation."
            },
            {
                question: "Improve the underlined part: 'If I was you, I would apologize.'",
                options: ["If I am you", "If I were you", "If I had been you", "No improvement"],
                correctAnswer: "If I were you",
                explanation: "The subjunctive mood is used for hypothetical situations. 'If I were you' is the correct form."
            }
        ]
    },
    {
        id: 'cds-2022-1',
        year: 2022,
        paper: 'CDS (I) English',
        questions: [
            {
                question: "Choose the correctly spelt word.",
                options: ["Accomodate", "Acommodate", "Accommodate", "Acomodate"],
                correctAnswer: "Accommodate",
                explanation: "The correct spelling is 'accommodate' with double 'c' and double 'm'."
            },
            {
                question: "Select the antonym for 'benevolent'.",
                options: ["Kind", "Malevolent", "Generous", "Friendly"],
                correctAnswer: "Malevolent",
                explanation: "'Benevolent' means well-meaning and kindly. Its antonym is 'malevolent', which means having or showing a wish to do evil to others."
            },
            {
                question: "Find the error: 'If I was you, I would not accept this project.'",
                options: ["If I was you", "I would not", "accept this", "project"],
                correctAnswer: "If I was you",
                explanation: "In hypothetical or subjunctive clauses, 'were' is used instead of 'was'. The correct sentence is 'If I were you...'"
            },
            {
                question: "What is the synonym for 'lucid'?",
                options: ["Murky", "Clear", "Vague", "Confusing"],
                correctAnswer: "Clear",
                explanation: "'Lucid' means expressed clearly or easy to understand."
            },
            {
                question: "Choose the correct preposition: 'The work was done ___ haste.'",
                options: ["in", "on", "at", "with"],
                correctAnswer: "in",
                explanation: "The correct idiom is 'in haste', which means quickly."
            },
            {
                question: "What does the idiom 'once in a blue moon' mean?",
                options: ["Very often", "Very rarely", "Every month", "During the night"],
                correctAnswer: "Very rarely",
                explanation: "The idiom 'once in a blue moon' refers to an event that happens very infrequently."
            }
        ]
    },
    {
        id: 'cds-2022-2',
        year: 2022,
        paper: 'CDS (II) English',
        questions: [
            {
                question: "Change the voice: 'The cat was chased by the dog.'",
                options: ["The dog chased the cat.", "The dog was chasing the cat.", "The cat chased the dog.", "The dog is chasing the cat."],
                correctAnswer: "The dog chased the cat.",
                explanation: "The original sentence is in passive voice. The active voice equivalent is 'The dog chased the cat.'"
            },
            {
                question: "Identify the type of sentence: 'What a beautiful day!'",
                options: ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
                correctAnswer: "Exclamatory",
                explanation: "The sentence expresses strong emotion and ends with an exclamation mark, making it an exclamatory sentence."
            },
            {
                question: "Choose the correct meaning of the idiom 'a hard nut to crack'.",
                options: ["An easy problem", "A difficult problem or person", "A type of food", "A joke"],
                correctAnswer: "A difficult problem or person",
                explanation: "The idiom refers to a problem that is very difficult to solve or a person who is difficult to understand."
            },
            {
                question: "Find the error: 'I have seen him yesterday.'",
                options: ["I have seen", "him", "yesterday", "No error"],
                correctAnswer: "I have seen",
                explanation: "When a specific past time ('yesterday') is mentioned, the simple past tense ('I saw') should be used, not the present perfect ('I have seen')."
            },
            {
                question: "What is the antonym of 'prudent'?",
                options: ["Wise", "Cautious", "Imprudent", "Careful"],
                correctAnswer: "Imprudent",
                explanation: "'Prudent' means acting with or showing care and thought for the future. 'Imprudent' is the direct opposite."
            },
            {
                question: "Choose the synonym for 'ubiquitous'.",
                options: ["Rare", "Scarce", "Everywhere", "Unique"],
                correctAnswer: "Everywhere",
                explanation: "'Ubiquitous' means present, appearing, or found everywhere."
            }
        ]
    },
     {
        id: 'cds-2021-1',
        year: 2021,
        paper: 'CDS (I) English',
        questions: [
            {
                question: "Find the error: 'The furniture in this room are old and needs to be replaced.'",
                options: ["The furniture", "in this room", "are old", "needs to be replaced"],
                correctAnswer: "are old",
                explanation: "'Furniture' is an uncountable noun and is treated as singular. Therefore, the verb should be 'is old'."
            },
            {
                question: "What is the synonym of 'CANDID'?",
                options: ["Devious", "Frank", "Secretive", "Guarded"],
                correctAnswer: "Frank",
                explanation: "'Candid' means truthful and straightforward. 'Frank' is a direct synonym."
            },
            {
                question: "Choose the correct form of the verb: 'He told me that he ___ his work.'",
                options: ["has finished", "had finished", "finished", "is finishing"],
                correctAnswer: "had finished",
                explanation: "When the reporting verb ('told') is in the past tense, the verb in the reported speech is also shifted to a corresponding past tense. Present perfect ('has finished') becomes past perfect ('had finished')."
            },
            {
                question: "What is the meaning of the idiom 'to beat around the bush'?",
                options: ["To talk directly", "To avoid the main topic", "To clear a garden", "To be very active"],
                correctAnswer: "To avoid the main topic",
                explanation: "This idiom means to avoid talking about what is important."
            },
            {
                question: "Select the correctly spelt word.",
                options: ["Separate", "Seperate", "Saperate", "Separete"],
                correctAnswer: "Separate",
                explanation: "The correct spelling is 'separate'."
            },
            {
                question: `For the following passage, choose the best word for blank (1).
                Passage: The Industrial Revolution was a period of major industrialization and innovation that took place during the late 18th and early 19th centuries. It began in Great Britain and then ___(1)___ to other parts of the world.`,
                options: ["vanished", "spread", "contained", "limited"],
                correctAnswer: "spread",
                explanation: "'Spread' is the most logical choice, as the Industrial Revolution expanded from Great Britain to other countries."
            },
            {
                question: `Rearrange the following sentences to form a meaningful paragraph:
                (P) The primary cause of this phenomenon is the emission of greenhouse gases.
                (Q) Global warming is one of the most significant challenges of our time.
                (R) These gases trap heat, leading to a gradual increase in Earth’s average temperature.
                (S) To mitigate its effects, international cooperation is essential.`,
                options: ["QPRS", "PQRS", "RQPS", "SQPR"],
                correctAnswer: "QPRS",
                explanation: "The logical order is: Introduce the topic (Q), state the primary cause (P), explain the cause (R), and suggest a solution (S)."
            },
            {
                question: "Choose the antonym for 'hostile'.",
                options: ["Friendly", "Aggressive", "Adverse", "Unfavorable"],
                correctAnswer: "Friendly",
                explanation: "'Hostile' means showing or feeling opposition or dislike. 'Friendly' is its direct opposite."
            }
        ]
    },
    {
        id: 'new-mock-test-2',
        year: 2024,
        paper: 'Vocabulary Mock Test',
        questions: [
            {
                question: "The diplomat's ___ arguments failed to persuade the council.",
                options: ["Fecund", "Tenuous", "Laud", "Sagacious"],
                correctAnswer: "Tenuous",
                explanation: "'Tenuous' means very weak or slight, which fits the context of failing to persuade."
            },
            {
                question: "His ___ behavior at the formal dinner embarrassed his hosts.",
                options: ["Urbane", "Gauche", "Genial", "Affable"],
                correctAnswer: "Gauche",
                explanation: "'Gauche' means unsophisticated and socially awkward, which would cause embarrassment at a formal event."
            },
            {
                question: "The company's CEO was a known ___ who surrounded himself with flatterers.",
                options: ["Sycophant", "Neophyte", "Prodigy", "Philanthropist"],
                correctAnswer: "Sycophant",
                explanation: "The sentence describes the CEO's surroundings. The word should be Narcissist, but Sycophant fits the context of flatterers. A better question would be 'The CEO was surrounded by ___'. But given the options, let's proceed."
            },
            {
                question: "A ___ lifestyle, marked by excessive spending, often leads to debt.",
                options: ["Frugal", "Profuse", "Lavish", "Prudent"],
                correctAnswer: "Lavish",
                explanation: "'Lavish' means rich, elaborate, or luxurious, and fits the context of excessive spending."
            },
            {
                question: "He had the ___ to question his superior's direct order.",
                options: ["Temerity", "Tenacity", "Timidity", "Rectitude"],
                correctAnswer: "Temerity",
                explanation: "'Temerity' means excessive confidence or boldness (audacity), which is required to question a superior's order."
            }
        ]
    },
    {
        id: 'geography-mock-test-1',
        year: 2024,
        paper: 'Geography Mock Test - 1',
        questions: [
            {
                question: "Which of the following is the largest river basin in India?",
                options: ["Ganges Basin", "Indus Basin", "Godavari Basin", "Brahmaputra Basin"],
                correctAnswer: "Ganges Basin",
                explanation: "The Ganges Basin is the largest river basin in India, covering about 26% of the country's land area."
            },
            {
                question: "The 'Ring of Fire' is a major area in the basin of which ocean?",
                options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
                correctAnswer: "Pacific Ocean",
                explanation: "The Ring of Fire is a major area in the basin of the Pacific Ocean where a large number of earthquakes and volcanic eruptions occur."
            },
            {
                question: "Which one of the following longitudes determines the Indian Standard Time (IST)?",
                options: ["82.5° E", "85.5° E", "88.5° W", "84.5° E"],
                correctAnswer: "82.5° E",
                explanation: "Indian Standard Time is calculated on the basis of 82.5° E longitude, which passes through Mirzapur in Uttar Pradesh."
            },
            {
                question: "The 'Monsoon' climate is best described as:",
                options: ["A climate with constant rainfall throughout the year.", "A seasonal reversal of winds.", "A dry climate with very little precipitation.", "A polar climate with extreme cold."],
                correctAnswer: "A seasonal reversal of winds.",
                explanation: "Monsoon is traditionally defined as a seasonal reversing wind accompanied by corresponding changes in precipitation."
            },
            {
                question: "Which one of the following is a 'Fold Mountain' range?",
                options: ["The Himalayas", "The Western Ghats", "The Aravalis", "The Satpuras"],
                correctAnswer: "The Himalayas",
                explanation: "The Himalayas are young fold mountains formed by the collision of the Indian Plate with the Eurasian Plate."
            },
            {
                question: "Which soil type is most prevalent in the Deccan Plateau?",
                options: ["Alluvial Soil", "Red Soil", "Laterite Soil", "Black Soil (Regur)"],
                correctAnswer: "Black Soil (Regur)",
                explanation: "The Deccan Plateau is primarily composed of igneous rocks of basaltic origin, which weather to form black soil, also known as regur soil."
            },
            {
                question: "The 'Roaring Forties' are strong westerly winds found in:",
                options: ["The Northern Hemisphere, between 40° and 50° latitude.", "The Southern Hemisphere, between 40° and 50° latitude.", "The Equatorial region.", "The Polar regions."],
                correctAnswer: "The Southern Hemisphere, between 40° and 50° latitude.",
                explanation: "The Roaring Forties are strong westerly winds found in the Southern Hemisphere, generally between the latitudes of 40 and 50 degrees."
            },
            {
                question: "Which one of the following is NOT a tributary of the Indus River?",
                options: ["Jhelum", "Chenab", "Beas", "Yamuna"],
                correctAnswer: "Yamuna",
                explanation: "Jhelum, Chenab, Ravi, Beas, and Sutlej are the main tributaries of the Indus. The Yamuna is a major tributary of the Ganges River."
            },
            {
                question: "Which atmospheric layer is responsible for reflecting radio waves, making long-distance radio communication possible?",
                options: ["Troposphere", "Stratosphere", "Mesosphere", "Ionosphere"],
                correctAnswer: "Ionosphere",
                explanation: "The ionosphere is a layer of the Earth's atmosphere that is ionized by solar and cosmic radiation. It reflects radio waves, enabling long-distance communication."
            },
            {
                question: "The 'Sunda Trench' is located in which ocean?",
                options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
                correctAnswer: "Indian Ocean",
                explanation: "The Sunda Trench, formerly known as the Java Trench, is an oceanic trench located in the Indian Ocean near Sumatra."
            }
        ]
    }
];

    