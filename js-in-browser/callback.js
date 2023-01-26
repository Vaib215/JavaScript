const getImage = async() => {
    const result = await fetch('https://i2.cinestaan.com/image-bank/1500-1500/170001-171000/170425.jpg')
    console.log(result)
    const image = document.createElement('img')
    image.setAttribute('src', result.url)
    document.body.append(image)
}

getImage()