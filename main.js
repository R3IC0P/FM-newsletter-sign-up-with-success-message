const newsletter = document.querySelector('#newsletter')
const newsletterForm = document.querySelector('#newsletter-form')

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = document.querySelector('#newsletter-email').value

  newsletter.classList.add('submitted')
  newsletter.innerHTML = `
    <img src="assets/images/icon-list.svg" alt="" />
    <h1 class="newsletter__heading" >Thanks for subscribing!</h1>
    <p>
      A confirmation email has been sent to
      <b>${email}</b>.
      Please open it and click the button inside to confirm your subscription.
    </p>
    <button type="button" class="newsletter__button">Dismiss message</button>
  `
})
