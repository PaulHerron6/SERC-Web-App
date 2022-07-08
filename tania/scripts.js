const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://dog.ceo/api/breeds/image/random', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(dog => {
      console.log(dog.message)
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

    
      const p = document.createElement('p')
      dog.message = dog.message.substring(0, 300)
      p.textContent = `${dog.message}...`

      container.appendChild(card)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()