![Ehsan@sh](./images/logo/Favicon.ico)

# User Story

>AS A coding boot camp student
>*I WANT* to take a timed quiz on JavaScript fundamentals that stores high scores
>*SO THAT* I can gauge my progress compared to my peers

---

# Acceptance Criteria

### GIVEN I am taking a code quiz
- *WHEN* I click the start button
  *THEN* a timer starts and I am presented with a question
- *WHEN* I answer a question
  *THEN* I am presented with another question
- *WHEN* I answer a question incorrectly
  *THEN* time is subtracted from the clock
- *WHEN* all questions are answered or the timer reaches 0
  *THEN* the game is over
- *WHEN* the game is over
  *THEN* I can save my initials and score

  ---

# Algorithm:
>Create and deploy a **Code Quiz** web application, which has a timer, ask related questions to assess the coding capability of the student, receives inputs, subtracts time for wrong answers, executes a time over when the timer reaches 0 or all questions are answered and finally saves initials and score.

---
<!--For the task section, I've got some help from CHATGPT to create a decent work-flow and make a sample for future projects--> 
## Tasks:

### Design Phase
1. Identify all the UI elements required in the quiz application including a start button, a timer display, question and answer display area, and a section to save initials and score.
2. Sketch a rough layout of how the application will be structured. This could include where the questions will appear, where the timer will be located, and where the score will be displayed.
3. Create detailed design mockups of each page or state of the application.

### Development Phase
1. Create a basic layout of the application based on the defined design, including creating empty divs or sections for the quiz questions, timer, and scores.
2. Add a timer that starts when the start button is clicked. The timer should be visible on the screen.
3. Create a data structure to store all the questions for the quiz. Each question should have an associated set of possible answers and an indicator of which answer is correct.
4. Implement functionality to display a question from your database when the quiz starts, and then a new question each time an answer is submitted.
5. Add functionality to check whether the selected answer is correct when an answer is submitted. If the answer is incorrect, subtract time from the timer.
6. Add functionality to end the game when all questions have been answered or the timer has reached zero.
7. Implement a way for the user to save their initials and score when the game ends. This could be to local storage, or to a server.

### Testing Phase
1. Ensure all features work as expected. This includes the timer, displaying questions, checking answers, ending the game, and saving scores.
2. Improve code readability and efficiency.
3. Fix any bugs or issues that have been identified during testing.

### Deployment Phase
1. Deploy the application to GitHub Pages.
2. Have peers and potential users test the application and provide feedback. Make any necessary adjustments based on this feedback.
3. Prepare the project for final submission, ensuring that all requirements have been met.

---
## Pattern Recognition:
- Write the structure in HTML file.
- Use semantic elemenets and proper classes/ids.
- Execute basic styles.
- Use suitable properties in JS file to execute asked sections.
- Use DOM to handle events and get the correct elements to work on.
- In terms of storage use json.