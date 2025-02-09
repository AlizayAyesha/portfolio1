import React, { useState } from 'react';
import BlogSingle from '../BlogSingle';
import Link from 'next/link';
import useSWR from 'swr';

const blog = [
    {
        Id: "1",
        heading: " The Weight We Carry ",
        bImg1: 'images/blog/blog1/1.jpg',
        author: 'images/blog/blog1/author.jpg',
        authorName: "Alizay",
        date: "Nov 24, 2024",
        des: 'Life is a journey of struggle. Most of us weren’t handed anything on a silver platter—we had to earn our way, facing challenges and overcoming obstacles. Along the way, we’ve all experienced pain: bullying, disrespect, or simply a lack of support. These moments leave scars, pieces of us we’ll never fully forget.',
     extraLines: [
    <blockquote>The lack of humanity in the world makes a man rise like an emperor, driven by ego and dominance instead of compassion. This 'Emperor Man' thrives in a society where empathy is scarce, ruling over others but losing the essence of what it means to be human. True strength, however, lies not in superiority, but in kindness—lifting others up rather than keeping them down. Imagine a world where power is defined by compassion, where the emperor leads with humanity, creating not fear, but hope.</blockquote>,
    <p key="para1">But what if life was different? What if, instead of tearing each other down, people supported one another? What if respect and kindness replaced judgment and superiority?</p>,
    <p key="para2">It’s a delusional thought, perhaps, but worth considering. Humans are like onions, layered with experiences, traumas, and secrets. Beneath each layer is a story—a personal battle no one else sees. Some fight demons from their past, others grieve losses or face inner doubts. Yet, despite it all, we continue living, breathing, and moving forward.</p>,
    <p key="para3">But why do we make life harder for each other? Why do we let envy, prejudice, and ego cloud our interactions? Instead of envying someone's success, why not collaborate and grow together? Instead of mocking someone’s flaws, why not uplift them?</p>,
    <p key="para4">We often prioritize societal expectations over our own happiness, silencing the child within us who just wants to feel free. We hurt ourselves by believing that our imperfections make us unworthy of love or acceptance. But here’s the truth: life is fleeting, and people come and go. You can’t force someone to stay, but you can find those who love you for who you are—someone who will embrace your layers, even if peeling them brings tears.</p>,
    <p key="para5">Kindness matters. In a world where pain is universal, a kind word or small act of support can mean everything to someone struggling silently. Yet, kindness feels rare. Despite the education and advancements of modern society, we often fail to learn the most basic lesson: to be human.</p>,
    <p key="para6">If you’re one of the rare souls who feels others' pain deeply, who sheds tears for strangers, and offers kindness without expecting anything in return, you are extraordinary. The world needs more people like you.</p>,
    <p key="para7">Imagine if everyone carried this mindset. Imagine a world where people didn’t judge but supported, where smiles weren’t masks for suffering but reflections of genuine joy. Behind every cheerful person could be someone waiting for a kind word to remind them they matter.</p>,
    <p key="para8">Life isn’t easy—it’s a constant grind. From earning a living to preparing meals, every step takes effort. The world already feels like a prison at times, so let’s not make it worse. Instead, let’s make it a place where compassion and empathy thrive.</p>,
    <p key="para8">Last but not least be proud on your self where ever you are standing now after facing all your demons I will say you are a amazing human a gem. A bullet proof idea</p>,
    <blockquote>“Every human’s unique—proof? Your thumbprint is special, nobody else have it Smile please don’t kill your inner child it’s hard to stay happy but we can try to be happy just believe on good and good will happen and remember every thing happens for a reason ”</blockquote>,
    <p key="para8">Every one have there own charisma only the true people will be able to see that not every one is lucky enough to see the beautiful soul inside you.</p>,

]

    },
    {
        Id: "2",
        heading: "Movie V for Vendetta",
        bImg1: 'images/blog/blog1/2.jpg',
        author: 'images/blog/blog1/author2.jpg',
        authorName: "Alizay",
        date: "Feb 2, 2025",
        des: 'So let V remind you today, the day before Election Day: we the people have the power. We were not windswept into this state of affairs: we have made choices, for security over freedom, for comfort over justice, for easy lies over hard truths. In so doing, we have become complicit to the things we say we hate.',
        extraLines: [
             <blockquote>Introduction: V for Vendetta is more than just a dystopian thriller — it’s a testament to the power of ideas, the tragedy of sacrifice, and the complexity of love. Directed by James McTeigue and based on the graphic novel by Alan Moore and David Lloyd, the film presents a future where Britain is ruled by a fascist regime, and fear controls the people. Amid this darkness, a masked vigilante known as V rises, not just to fight tyranny but to ignite a revolution.</blockquote>,
    <p key="para1">Yet, beneath the political rebellion lies something deeply human — an unconventional love story, one that defies the superficial standards of beauty. Love, after all, is not about faces or appearances; it’s about trust, care, and the power we give to another person — the power to hurt us, yet they choose not to.</p>,
    <p key="para2">The Essence of Love and Sacrifice
Evey Hammond’s journey is one of transformation, but also of love — not in the traditional, fleeting sense, but in a way that transcends the physical. She falls for V, not because of his face, which she never sees, but because of his soul. Love is not about what the world deems attractive; it is about connection, about understanding, about a bond so strong that it defends rather than destroys.</p>,
    <p key="para3">V, in many ways, represents a painful truth: heroes are not those who live to see their victories; they are the ones who sacrifice themselves for a cause greater than themselves. And that is what makes them tragic. He could have chosen love, he could have chosen Evey, but he chose the people instead. That’s why, in the end, heroes are not the ones who survive. They are the ones who bleed, who suffer, who give everything — until nothing is left.</p>,
    <p key="para5">And villains? They are often misunderstood. They prioritize themselves, their lovers, their own world. They think before they act, they take before they give. In a way, they are more human to me.</p>,
    <p key="para6">A Question of Freedom
But one question lingers — why do people always wait for a hero? Why do they need a savior to awaken their anger, to make them stand up for themselves? Why do they rely on someone else’s shoulder to take a stand from behind? Why not stand together, in unity and bravery, and claim what is rightfully theirs? Why not fix what is broken, not by waiting, but by acting?</p>,
    <p key="para7">Governments exist, but why? To rule? To control? To serve? The world has been divided into rich and poor, powerful and powerless. But what if there was a place without these walls? A place where trust was stronger than locks, where no one feared theft even with an open door. A place where hunger didn’t exist because those who had more always shared. A place where race, caste, and status meant nothing — only humanity mattered.</p>,
    <p key="para8">A world where peace wasn’t just a word, where no one needed laws because kindness governed all. A world where people lived not to compete, not to conquer, but simply to exist, to worship, to love.

But that world is just an illusion. A dream too pure for reality.

Because we are trapped — in a cycle of survival, of ambition, of the relentless need to be more. To be better. To chase. To race. Until we forget why we started running in the first place.</p>,
    <p key="para8">The Legacy of V
And so, V for Vendetta is not just about rebellion; it’s about a man who dared to believe in something beyond himself. It’s about love that never got to bloom, about a hero who never got to live in the world he dreamed of, about a revolution that came at the cost of his life.
It is a story of sacrifice, of tragedy, and of the eternal fight for freedom. A fight that, perhaps, should not need a masked man to begin.

But as history has shown — sometimes, it does.

The lines I will never forget.
</p>,
    <blockquote>“Behind this mask there is more than just flesh. Beneath this mask there is an idea… and ideas are bulletproof.”
― Alan Moore, V for Vendetta</blockquote>,

        ]
    },
    {
        Id: "3",
        heading: "OOP in TypeScript",
        bImg1: 'images/blog/blog1/3.jpg',
        author: 'images/blog/blog1/author3.jpg',
        authorName: "Alizay",
        date: "Jun 20, 2024",
        des: 'Object-Oriented Programming, Encapsulation, Inheritance, and Polymorphism including Base Class or Superclass and Derived Class or Subclass :',
        extraLines: [
                <p key="para3">Programming Paradigm:
A programming paradigm is a way of thinking about structuring code to solve problems. It’s a fundamental approach or style of programming that dictates how you design, organize, and execute your code. There are several programming paradigms, including: </p>,
    <p key="para1">1. Imperative Programming: This paradigm focuses on describing the steps that the computer should take to reach a desired state. Examples include procedural programming and object-oriented programming.</p>,
    <p key="para2">2. Declarative Programming: Here, the emphasis is on describing what the program should accomplish without specifying how to achieve it. Examples include functional programming and logic programming.
    </p>,
    <p key="para3">
       3. Functional Programming: This paradigm treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data. It emphasizes immutable data and higher-order functions.
       </p>,
    <p key="para5">
4. Object-Oriented Programming (OOP): OOP focuses on representing concepts as “objects” that have data (attributes) and methods (functions) associated with them. It emphasizes encapsulation, inheritance, and polymorphism.
.</p>,
    <p key="para6">
5. Procedural Programming: This paradigm involves writing code in a step-by-step manner, breaking down tasks into a series of procedures or functions. It’s often used for tasks that involve a sequence of steps.
</p>,
    <p key="para7">
6. Event-Driven Programming: This paradigm revolves around responding to events triggered by the user or the system. It’s commonly used in graphical user interfaces and web development.
</p>,
<p key="para7">
7. Logic Programming: In this paradigm, you define a set of facts and rules, and the program derives new facts from the existing ones using logical inference. Prolog is a popular language that follows this paradigm.
</p>,
    <blockquote>
        Different programming languages may support one or more paradigms, and often developers combine paradigms to suit the requirements of their projects. Each paradigm offers its own benefits and trade-offs, and the choice of paradigm depends on factors such as the problem domain, the nature of the project, and personal preference.
    </blockquote>,
<p key="para7">
Encapsulation: Protecting Your Cake Batter:
Imagine encapsulation is like baking a cake. You have different layers and ingredients: the flour, eggs, sugar, and so on. Encapsulation ensures that each ingredient is measured and mixed properly in its own bowl before combining them together. It prevents your flour from mixing prematurely with the eggs or sugar before they’re ready. This way, you get a delicious cake with distinct layers that all work together perfectly, without any ingredient causing a mess in the final product. Plus, if you want to tweak the recipe (like adding more chocolate chips), you can adjust just one part without affecting the entire cake. Happy baking, I mean coding!
</p>,
    <blockquote>
       Encapsulation:
So basically Encapsulation is one of the four fundamental concepts of object-oriented programming (OOP), along with inheritance, polymorphism, and abstraction. It refers to the bundling of data and methods that operate on that data into a single unit, called a class.
    </blockquote>,

<p key="para7">
Encapsulation allows you to hide the internal state of an object and restrict access to it from outside the class. This means that the data within an object is only accessible through the methods provided by that object’s class, which helps to prevent accidental modification of the data and ensures that it remains consistent.
</p>,
<blockquote>
In simpler terms, encapsulation is like packaging data and functionality together within a protective wrapper. This helps to organize code, improve maintainability, and reduce dependencies between different parts of a program. It also promotes the principle of information hiding, where the implementation details are hidden from the outside world, allowing for easier changes and updates to the code in the future.
    </blockquote>,
<p key="para7">
Inheritance and Polymorphism
“inheritance and polymorphism are two fundamental concepts in object-oriented programming (OOP).”
</p>,
<p key="para7">
1. Inheritance:
Inheritance is a mechanism in OOP where a new class (derived class) is created from an existing class (base class or superclass), inheriting its attributes and methods.
The derived class can add its own attributes and methods, and it can also override methods from the base class to provide its own implementation.
This promotes code reusability and allows for creating a hierarchy of classes where common functionalities are centralized in a base class and specialized functionalities are added in derived classes.
For example, you might have a base class called Vehicle with attributes and methods common to all vehicles, and then derived classes like Car, Truck, and Motorcycle that inherit from Vehicle and add their own specific attributes and methods.
</p>,
<p key="para7">
2. Polymorphism:
Polymorphism means the ability of different objects to respond to the same message (method call) in different ways.
There are two types of polymorphism: compile-time polymorphism (method overloading) and runtime polymorphism (method overriding).
Method overloading allows a class to have multiple methods with the same name but different parameters. The appropriate method is chosen at compile time based on the arguments passed.
Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its superclass. The method to be executed is determined at runtime based on the actual type of the object.
Polymorphism simplifies code and makes it more flexible and scalable. It allows you to write code that works with objects of different classes without needing to know the specific details of each class.
For example, you might have a method called drive() in the Vehicle class. Each subclass (Car, Truck, Motorcycle) can override this method to provide its own implementation of driving behavior, but you can call drive() on any vehicle object without knowing its specific type, and the appropriate implementation will be executed based on the actual object being referenced.
</p>,
<p key="para7">
 * Base Class * or * Superclass *:
These terms are often used interchangeably.
The base class or superclass is the class that serves as the foundation for other classes.
It typically contains common attributes and methods that are shared among multiple derived classes.
Inheritance allows derived classes to inherit these attributes and methods from the base class.
Example: In a vehicle hierarchy, Vehicle might be the base class or superclass, containing attributes and methods common to all vehicles, such as speed, accelerate(), and brake().
</p>,<p key="para7">
2. * Derived Class * or * Subclass *:
Again, these terms are often used interchangeably.
The derived class or subclass is a class that is created from an existing class (the base class or superclass) through inheritance.
It inherits attributes and methods from the base class and can also add its own unique attributes and methods or override the existing ones.
Example: Continuing with the vehicle hierarchy, Car, Truck, and Motorcycle could be derived classes or subclasses of the Vehicle base class. They inherit common vehicle functionalities from Vehicle and may have their own specific attributes and methods like num Doors for Car, cargo Capacity for Truck, and has Kick Start for Motorcycle.
So, in summary:
</p>,<blockquote>
“ The base class or superclass is the original class from which other classes are derived. The derived class or subclass is a class that is created based on the structure and behavior of the base class, inheriting its attributes and methods while adding its own unique features.”
    </blockquote>,
    <p key="para8">
Whole topic summary
Understanding OOP concepts such as encapsulation, inheritance, and polymorphism in TypeScript is crucial for building modular, maintainable, and scalable applications. By encapsulating data and methods into classes, leveraging inheritance for code reuse, and employing polymorphism for flexible behavior, developers can create robust software solutions that efficiently address complex requirements.
</p>,

        ]
    }
];

const BlogSection = () => {
    const [open, setOpen] = useState(false);
    const [state, setState] = useState({});

    function handleClose() {
        setOpen(false);
    }

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item);
    };

    return (
        <section id="blog" className="blog-section section-padding">
            <div className="container">
                <div className="col-l2">
                    <div className="section-title section-title2 text-center">
                        <span>From my Blog</span>
                        <h2>Latest Blogs</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="blog-grids clearfix">
                            {blog.map((blogs, bl) => (
                                <div className="grid" key={bl}>
                                    <div className="entry-media">
                                        <img src={blogs.bImg1} alt="" />
                                    </div>
                                    <div className="details">
                                        <h3 onClick={() => handleClickOpen(blogs)}>{blogs.heading}</h3>
                                        <ul className="entry-meta">
                                            <li>
                                                <img src={blogs.author} alt="" />
                                                By <button onClick={() => handleClickOpen(blogs)}>{blogs.authorName}</button>
                                            </li>
                                            <li>{blogs.date}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
         {/* 
<svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
</svg>
*/}

            <BlogSingle 
                open={open} 
                onClose={handleClose} 
                title={state.heading} 
                doc={state.des} 
                image1={state.bImg1} 
                author={state.author} 
                authorName={state.authorName} 
                date={state.date}
                extraLines={state.extraLines}  
            />
        </section>
    );
};

export default BlogSection;
