# EduHub

EduHub is a one-stop app for students of Ngee Ann Poly that merges the features of NPal, Brightspace and NPGO. We think that it is a hassle for students to juggle between these three apps during their poly life. For example, students usually have to have these three apps open to check their timetable (NPal), take attendance (NPGO) and access module materials (Brightspace). Hence, EduHub serves as a culmination of the features of these three apps to help students navigate their poly life seamlessly. Gone are the days where students have to open multiple tabs just to go about their day!

Furthermore, EduHub also features a points system and a redeem store to incentivise students to use the app!

## Design Process

As mentioned above, the primary goal of EduHub was to make a one-stop app that merges the features of NPAL, Brightspace and NPGO, so that students would find their daily poly life easier. This means that our users do not have to juggle between so many tabs and potentially lag their devices or find doing assignments cumbersome, because EduHub incapsulates all integral features of Npal, Brightspace and NPGO. In addition to that, we also want students to have a platform for them to seek help if they run into issues while doing their assignment. Hence, EduHub also has a "Student Support" page where users can post their own queries and let other users answer.

To illustrate this, here are some user stories:

For example, a student that wants to keep track of his timetable and also revise learning materials at the same time does not have to open two seperate apps (NPGO and Brightspace) to do so. Instead, the student just has to make use of EduHub's timetable page and assignments page.

Another example, a student might be running into issues regarding the implementation of their API component while doing their Integrated Project. However, he does not have to worry as he can just go onto EduHub and post a question there in the "Student Support" page.

A student who has a low-end PC might cause lag to occur when too many tabs are open on their browser, such as Brightspace and NPal. However, with the introduction of EduHub, users do not have to worry about their browser lagging as all features of Brightspace and NPal are in the same website.

Low-fidelity prototype: https://www.figma.com/design/KWyebg93bnHai9Iy9uRJ3D/EduHub-Low-Fidelity?node-id=0-1&t=KL0O1VTYVtThYkKp-1

High-fidelity prototype: https://www.figma.com/design/vCXfjYOyMaTAc93VTvoHb5/EduHub-High-Fidelity-Prototype?node-id=0-1&t=mUwTeuB5PrtxU7VM-1

## Features

### Existing Features

- Event Slideshow: A slideshow that flashes through different events occuring in NP's physical campus right now, which might entice users to take part in these events.

- Achievement Collection: EduHub offers a variety of achievements for users to collect so that users can incentivised to use EduHub extensively by having the urge to hunt down achievements.

- Calendar and timetable: EduHub has a built-in calendar and timetable so users can see when their assignments are due and when their lessons will be taking place. This gives the users peace of mind when it comes to adhering to deadlines and also improves their time management.

- Daily tasks: EduHub also has a "Daily Task' feature, where users will be greeted with 3 tasks everyday, categorised in increasing difficulty (Green being easy, orange being medium, red being hard). Furthermore, when users finish a task and claim it, they may earn points and also an achievement. This incentivises users to log-in everyday to earn their daily points, making using EduHub a habit.

- Redeem store: EduHub has a redeem store where users can use their hard-earned points to redeem for NP merch, which gives users a "goal" to work towards.

- Help/ FAQ Page: EduHub has a help tab where there are four frequently asked questions that users usually ask, and a drop-down arrow that users can click, which would display the answers to those questions. This gives users a convenient place for them to look up answers to the questions they might have, which allows users to have a better understanding of NP and EduHub.

- Campus map: EduHub has an interactive campus map (powered by Google maps) to allow users to navigate throughout the school.

- Student support: EduHub has a "Student Support" page where users can post a query that they might have regarding their modules/assignments, where other users can then reply to them. This gives users a piece of mind while doing their assignments as they will know that they can rely on the EduHub community.

- Password protected account: Users have to log in to their EduHub account via their NP email and the correct password (controlled via API). This means that EduHub accounts are secure and users will not have to worry about others compromising their account security.

### Features left to implement

- Working comment section: A function which allows users to type in a comment and have the text be reflected in the comment box.

## Technologies used

- FullCalendar: https://fullcalendar.io/
  - The project uses FullCalendar's interactive calendar to simulate the calendar function.

## Assistive AI

1. Restdb API (Username and password): ChatGPT was used to help me implement my restdb API into my login screen.
![ChatGPT AI Assistance 1](images/ai_assist1.png)

2. Help page drop-down textbox function: ChatGPT was used to code the Javascript code for the drop-down textbox function in the help tab.
![ChatGPT AI Assistance 2](images/ai_assist2.png)

3. Achievement pop-up: ChatGPT was used to code the Javascript code for the pop-up feature when users claim a daily task.
![ChatGPT AI Assistance 3](images/ai_assist3.png)