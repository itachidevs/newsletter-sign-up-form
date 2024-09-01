# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/solutions/sreenrecord.mp4)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Event Listeners
- [Styled Components](https://styled-components.com/) - For styles

### What I learned
- I learnt about designing and validating forms in different ways using JavaScript and CSS.
- CSS flexbox alignment
- DOM in JS
- Form validation

```css
.proud-of-this-css {
  color: papayawhip;
}

@media screen and (min-width:768px) {
    #form {
        flex-direction: row;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2em;
        background-color: var(--DarkSlateGrey);
        height: 100vh;
    }

    .hideinDesktop {
        display: none;
    }

    .hideinMobile {
        display: block;
        width: 100%;
        height: 100%;
        border-top-left-radius: 1em;
        border-top-right-radius: 1em;
    }

    .subscribe-form-container {
        display: flex;
        flex-direction: row;
        gap: 1em;
        width: 60%;
        padding: 1em;
        border-radius: 1.2em;
        border-width: 0px;
        border-style: solid;
    }

    .header {
        width: 50%;
        height: 100%;
        order: 2;
    }

    .form-container {
        order: 1;
        width: 50%;
        height: 100%;
    }

    .form-heading {
        font-size: 3em;
    }

    .form-description {
        font-size: 1.3em;
    }

    .benifit-item {
        font-size: 0.8em;
    }

    .input-label {
        font-size: 1em;
    }

    .input {
        height: 4.5em;
        margin-bottom: 3em;
    }
.hideForm{
    display:none;
}
.thank-you-message-show {
    display:block;
}
.success-message-container-mobile {
    font-size:1.5em;
    width:60%;
}
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
function handleSignupFormSubmit(e) {
    // prevent default browser behaviour
    e.preventDefault();
    formContainer.style.display='none'
    thankyouMsg.classList.add('thank-you-message-show')
    console.log(formContainer)
    console.log(thankyouMsg)

}
```
### Continued development
I want to embed this sign up form to my recent project and try to develop that project.

### Useful resources

- [Example resource 1](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - This helped me to know about the validating a form using CSS. And Iam gonna use it for my next project. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.freecodecamp.org/news/build-and-validate-beautiful-forms-with-vanilla-html-css-js/) - This is an amazing article which helped me finally understand Form validations. I'd recommend it to anyone still learning this concept.
## Author

- Website - [itachiDevs](https://itachidev.my.canva.site/)
- Frontend Mentor - [@itachidevs](https://www.frontendmentor.io/profile/itachidevs)
- Twitter - [@itachidevs](https://www.twitter.com/itachidevs)
