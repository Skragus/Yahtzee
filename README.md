# Yahtzee

Project#002

Singleplayer version of Yahtzee, which is a popular dice game where players roll dice to score points and aim for the highest total score. 

This project was an incredible learning experience for me, allowing me to become more comfortable with HTML, CSS, and JS. It was a significant step up from my previous project in terms of complexity. The most valuable lesson I learned was how to approach problem-solving when faced with problems without relying on follow-along tutorials. Which helped me improve my skills and become more independent.

To begin, I started by creating a plan on paper for the game interface design, which proved to be very beneficial. Having a clear plan in mind made the process less overwhelming. The biggest hurdle in the HTML and CSS section was creating the graphics for the dice, which required six different designs that could be updated via JS. I solved this problem by using a 3x3 grid of dots for the dice and hiding certain dots using a hidden class. This problem was the first time I had to dig deep into problem solving on my own and taught me valuable lessons.

The interface design also taught me a lot about structuring complex websites, with numerous containers and sections. I extensively utilized grid and flexbox concepts, which made me more comfortable with these techniques. Additionally, I delved into creating visually appealing buttons and learned how to implement tooltips successfully.

After completing the HTML and CSS for the interface, I proceeded to work on the JavaScript portion. However, I made the mistake of not planning it out as thoroughly as the interface design. This taught me the importance of making a comprehensive plan. Initially, I focused on manipulating the DOM for the dice by creating functions to display each die and simulate die rolls when the roll button was clicked. This project involved the implementation of numerous functions, which helped me gain confidence and familiarity with function usage. I created functions to check for combinations like three of a kind or a full house and connected them to the DOM. I chose to seperate functions that did the calculating from those that did the displaying and I think that was a good move, having the function scope be smaller made the flow of connecting them together simpler.

To enable dice/board selection and deselection, I added a "held" class to the container, providing highlighting properties. However, I encountered difficulties when it came to locking in a score. I made the mistake of directly updating the DOM after using functions to check for points. Consequently, I ended up using the DOM itself as the storage for saved scores, which made it challenging to prevent overwriting past scores. This mistake taught me a valuable lesson about the importance of planning and delegating tasks properly.

Overall, this project significantly enhanced my skills in HTML, CSS, and JS. It taught me problem-solving, planning, DOM manipulation, and the importance of delegating tasks. I gained confidence in structuring complex websites, utilizing grid and flexbox, and implementing interactive elements. The project focused on various concepts and techniques in HTML, CSS, and JS. However, it did not cover topics such as APIs, data storage, and other advanced concepts. For my next project, I aim to explore and incorporate these concepts into my learning journey.


