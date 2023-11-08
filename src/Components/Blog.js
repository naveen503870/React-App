import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog(props) {
  return (
    <>
      <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1 className={`py-1 text-${props.mode === 'light' ? 'black' : 'white'}`} style={{ fontSize: '33px' }}>The Top 10 Most Difficult-to-Spot Writing Mistakes</h1>
        <Link className="nav-link" to="/about">October 23, 2023</Link>
        <img src={require('../Foto/writing-mistake.jpg')} to="/PageDesc" style={{ height: '500px' }} class="img-fluid" alt="Responsive image" />
        {/* firstBlog */}
        <p className={`text-${props.mode === 'light' ? 'black' : 'light'}  `} style={{ color: props.mode === "light" ? "black" : "white" }}>Writing is like trying to juggle flaming knives while riding a unicycle – it requires skill, precision, and a healthy dose of madness. But even the most seasoned writers can get a little lost in the word jungle, and typos and grammatical blunders can sneak up on them like ninjas in the night. So, without further ado, let’s take a look at the top 10 most difficult-to-spot writing mistakes that even the sharpest writers sometimes struggle to catch!</p>
        <p to="/PageDesc" className={`text-${props.mode === 'light' ? 'black' : 'light'}`} ><strong> 1. Misplaced modifiers:</strong> These are words or phrases placed too far away from the word they are supposed to modify, leading to confusion or ambiguity. For example,
          “He served his guests the meat on silver platters that he inherited from his grandfather.”
          Did he inherit the platters or the meat from his grandfather? We may never know, but we do know that it’s not a good idea to inherit meat – it tends to get a little ripe. To avoid confusion, we can correct the sentence by moving the modifier closer to the word it’s meant to describe:
        </p>
        <p to="/PageDesc" className={`text-${props.mode === 'light' ? 'black' : 'light'}`} ><strong> 2. Wordiness:</strong> Wordiness is like a party guest who just won’t stop talking – they drone on and on, taking up space and making you wish you could escape. Writers who are afflicted by wordiness use too many words to express a simple idea, turning a straightforward message into a labyrinthine maze. For example, take this sentence:
          “In spite of the fact that he was feeling under the weather, he still managed to make it to the meeting.”
          Geez, that’s like wrapping a present in a hundred layers of duct tape! To cut to the chase, you could simply say,
          “Although he was sick, he still attended the meeting.”
        </p>
        <p to="/PageDesc" className={`text-${props.mode === 'light' ? 'black' : 'light'}`} ><strong> 3. Redundancy:</strong> Redundancy is like saying the same joke twice – it might get a chuckle the first time, but by the second, you’re just beating a dead horse. Writers who are guilty of redundancy repeat themselves unnecessarily, turning an already clear message into a broken record. For example, take this sentence:
          “The car collided with the truck, and the collision was quite loud.”
          Well, no duh, Sherlock! Instead, you could say,
          “The car collided with the truck, and the impact was quite loud.”
          Boom! No need to repeat yourself – we heard you the first time. So let’s ditch the redundancy and make room for some fresh material!
        </p>


        <h1 className={`py-1 text-${props.mode === 'light' ? 'black' : 'white'}`} style={{ fontSize: '33px' }}>Simple Tips for Great Writing</h1>
        <Link className="nav-link" to="/about">April 13, 2023</Link>
        <img src={require('../Foto/writing-skills.jpg')} to="/PageDesc" style={{ height: '500px' }} class="img-fluid" alt="Responsive image" />
        {/* firstBlog */}
        <p className={`text-${props.mode === 'light' ? 'black' : 'light'}  `} style={{ color: props.mode === "light" ? "black" : "white" }}>Writing the English language is just as much an art as it is a science. No doubt, your schoolteachers gave you rules to stick to in class. But out in the real world, there’s more leeway than you may have realized.

          Not to worry. You don’t need a master’s degree in publishing to be a good writer. If you follow these four tips anytime you write and edit, you’ll be able to turn out a quality email, report, or article. </p>

        <p to="/PageDesc" className={`text-${props.mode === 'light' ? 'black' : 'light'}`} ><strong> 1. Be consistent:</strong> Some aspects of good writing are rules. Others are style choices. So how can you tell which is which?

          The easiest way is to pick and follow a style guide.

          There are many style guides for English: AP, APA, CMOS (a.k.a., Chicago), MLA, Oxford … It depends what country you’re writing for and what you’re writing about. If you’re writing within a school or company, you may be asked to follow what’s called a house style guide, that is, a guide created specifically for that entity. Some newspapers like The Economist or The Guardian even stick to their own. </p>
        <p to="/PageDesc" className={`text-${props.mode === 'light' ? 'black' : 'light'}`} ><strong> 2. Use the active voice:</strong>In English, sentences typically follow the subject–verb–object pattern: “Emilio caught the ball.” This sentence is written in the active voice, meaning the subject is acting on the object.
          However, you could also write, “The ball was caught by Emilio.” This sentence conveys the same idea, but it’s written in the passive voice. The object has become the subject.
          Although there are cases in which passive voice can work well or even better than the active voice, most of the time, active voice is usually preferable. Why?
          For one thing, the active voice takes more words to say the same thing. If you’re keen to keep your readers’ eyes from tiring or save space, active voice rules.
          Additionally, passive voice can sound vague. Take, for example, the following sentence: “The vase was smashed.”
          Who exactly smashed the vase? We don’t know. That’s why the passive voice is used in certain instances where the writer wants to eliminate tagging a subject with responsibility. Examples include law and science.
        </p>
        <p to="/PageDesc" className={`text-${props.mode === 'light' ? 'black' : 'light'}`} ><strong> 3.  Punctuate right:</strong>Punctuation marks can make a huge difference in meaning when stringing words together in a sentence. But getting punctuation right can be tricky.
          Although you probably learned the basics of punctuation in grade school, there’s more to the marks than what you likely learned. That’s because like most aspects of the English language, punctuation is both art and science.
          Here’s a list of the basics.
          Apostrophes make contractions and show possession.
          No, you cant eat Sashas’ pie. (✗)
          No, you can’t eat Sasha’s pie. (✓)
          Colons introduce important information. They’re a way to say, “Now hear this!”
          The reception menu includes: fish, chicken, and a vegetarian dish. (✗)
          The reception menu includes fish, chicken, and a vegetarian dish. (✓)
          I found the book he wanted: a dusty, leather-bound dinosaur. (✓)
          Javier gave me the news: The zombies had taken over. (✓)
          Keep in mind that colons are used differently in American and British English, so again, check your style guide.
        </p>


        <h1 className={`py-1 text-${props.mode === 'light' ? 'black' : 'white'}`}  style={{ fontSize: '33px' }}>The Oxford Comma: The Splice of Life</h1>
        <Link className="nav-link" to="/about">January 23, 2023</Link>
        <img src={require('../Foto/coma.jpg')} to="/PageDesc" style={{ height: '500px' }} class="img-fluid" alt="Responsive image" />
        {/* firstBlog */}
        <p className={`text-${props.mode === 'light' ? 'black' : 'light'}  `} style={{ color: props.mode === "light" ? "black" : "white" }}>Debates among writers, editors, teachers, and others who use English are common. One of the longest-standing debates is that over the Oxford comma, aka the serial comma.

          People arguing over a punctuation mark? As silly as it sounds, it’s been going on for decades.

          If you’re not aware of this debate, we don’t want you to miss out on the fun and fastidiousness. Here’s an overview of the Oxford comma and why you might choose to use it.</p>
        <p to="/PageDesc" className={`text-${props.mode === 'light' ? 'black' : 'light'}`} ><strong> 1. What is the Oxford comma?:</strong> Oxford shirt, Oxford shoes … Oxford comma. Nope, the comma’s not related. But like certain fashions, the serial comma is adored by some and hated by others.
          In short, the Oxford comma is the optional comma before the final conjunction in a list or series.

          Huh?

          No worries; we’ll break it down for you.

          When listing items in a written sentence, you use commas to separate the items, just as you’d normally pause between the items when speaking. (Note: Commas don’t always represent pauses in speech. To use commas this way is to use them incorrectly. However, in the case of listing items, there’s a parallel between verbal pauses and commas.)

          Here’s an example of a sentence that contains a list of two items:

          I need to buy wine and toilet paper for the party.

          Let’s add one more item to that list:

          I need to buy eggs, wine, and toilet paper for the party.   </p>
        <p to="/PageDesc" className={`text-${props.mode === 'light' ? 'black' : 'light'}`} ><strong> 2. Why use the Oxford comma?:</strong>Fans of the Oxford comma maintain that skipping it causes confusion in some cases. Let’s say you’re emailing a friend about some photos you took on your last vacation. You might write the following sentence:

          I’ll send you some photos of my grandparents, a hitchhiker and a skunk.

          The way this sentence is structured, it implies that you have some highly unusual DNA! In other words, using one comma here implies that one of your parents is the offspring of a hitchhiker and a skunk (let’s not picture the details).

          But this surely wasn’t your intended meaning. And if you were to come across such a sentence by another writer, it should give you pause (pun intended).

          Let’s see what happens when we add an Oxford comma:

          I’ll send you some photos of my grandparents, a hitchhiker, and a skunk.
        </p>
        <p to="/PageDesc" className={`text-${props.mode === 'light' ? 'black' : 'light'}`} ><strong> 3. The history of the Oxford comma:</strong>The Oxford comma is so named because it was used at Oxford University Press, the largest university press on the planet. Ironically, British writers seem to use the Oxford comma less than Americans do, which is why it stands out in the UK as an Oxford-prescribed guideline.

          Many professional writers and editors have opined on the use of the Oxford comma. Some language lovers claim that adding one comma to a sentence can’t hurt and can only help in terms of clarity. Those on the other side of the fence feel that serial commas are prissy and unnecessary.

          However, consider that a 2014 lawsuit, O’Connor v. Oakhurst Dairy, revolved around a serial comma ambiguity. A list of labor activities exempt from overtime pay was open to misinterpretation. Hence, the dairy was ordered to pay $5 million in overtime wages to workers who performed the activities in the gray area.

          If you’re in doubt, it’s usually worth it to add that comma.
        </p>
      </div>
    </>
  )
}
