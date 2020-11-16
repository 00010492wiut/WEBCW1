function openProject (link) {
  // sends to another pages
  location.href = link;
}

// Form validation
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const phoneInput = document.querySelector('#tel')
const commentInput = document.querySelector('#comment')
const form = document.querySelector('#contact-form')

// debugger
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // validates fields
  checkInputs()

  if (nameInput.value && emailInput.value && phoneInput.value && commentInput.value) {
    // Checks if all fields are filled and then submits the form and collects data to use in the future
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      tel: phoneInput.value,
      comment: commentInput.value
    }
    form.submit()
  }
  
})
  

function checkInputs(){
  const nameInputValue = nameInput.value.trim()
  const emailInputValue = emailInput.value.trim()
  const phoneInputValue = phoneInput.value.trim()
  const commentInputValue = commentInput.value.trim()

  if (nameInputValue === '') {
    setError(nameInput, '#name-message', 'Name cannot be empty')
  } else {
    setSuccess(nameInput, '#name-message')
  }
  if (emailInputValue === '') {
    setError(emailInput, '#email-message', 'Email cannot be empty')
  } else {
    setSuccess(emailInput, '#email-message')
  }
  if (phoneInputValue === '') {
    setError(phoneInput, '#tel-message', 'Please enter your contact number')
  } else {
    setSuccess(phoneInput, '#tel-message')
  }
  if (commentInputValue === '') {
    setError(commentInput, '#comment-message', 'Please write your comment')
  } else {
    setSuccess(commentInput, '#comment-message')
  }
}

function setError(input, id, message){
  // adds css classes of error
  const small = document.querySelector(id)
  small.innerText = message
  small.classList.add('error')
  input.classList.add('error')
  input.classList.remove('success')
}
function setSuccess (input, id){
  // adds css classes of success
  const small = document.querySelector(id)
  small.innerText = ''
  input.classList.remove('error')
  input.classList.add('success')
}