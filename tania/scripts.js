const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://dog.ceo/api/breed/spaniel/cocker/images', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  i = 0;
  if (request.status >= 200 && request.status < 400) {
   var images = data.message;
    image.forEach(image => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

    
      const img = document.createElement('img')
      img.src = image

      container.appendChild(card)
      card.appendChild(img)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()