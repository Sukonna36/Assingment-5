### 6. Answer the following questions clearly:
   
  #I'm trying to explain based on what I know.


1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

ANS:getElementById is used to call or select a single element, while getElementsByClassName is used to call or select multiple elements at once.querySelector is used to call or select a specific element (the first one that matches), while querySelectorAll is used to call or select multiple elements (all that match) at once.

2. How do you **create and insert a new element into the DOM**?

ANS: First, create a new element using document.createElement, for example: let newDiv = document.createElement('div');. Then, add content or attributes to the new element, like newDiv.textContent = "Hello, World!"; and newDiv.id = "myDiv";. Finally, insert the new element into the DOM by appending it to a parent element using appendChild() or inserting it at a specific position using insertBefore().

3. What is **Event Bubbling** and how does it work?

ANS:Event Bubbling is a process in DOM event handling where an event that occurs on a child element gradually propagates up to its parent elements, meaning the event moves from the child element to its parents.


4. What is **Event Delegation** in JavaScript? Why is it useful?

ANS:Event Delegation is a technique where an event listener is added to a parent element, and that listener handles events for its child elements as well. In other words, instead of adding separate listeners to each child element, the parent’s listener is used."

Benefits:
           1.The code becomes simpler and shorter.
           2.There is no need to add separate listeners for multiple child elements.
           3.Events of dynamically created elements can also be handled.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

ANS: preventDefault() – prevents the default behavior of an event.
stopPropagation() – stops the event from propagating (bubbling) up to parent elements in the DOM.
