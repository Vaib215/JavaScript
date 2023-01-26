const appContainer = document.querySelector('#post-container')

const fetchPosts = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json()
}

const createPost = (post) => {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
    <b>${post.title}</b>
    <p>${post.body}</p>
    `
    appContainer.append(card)
}

const addPostsToContainer = async(cb) => {
    const result = await cb()
    result.forEach(post=>createPost(post))
}

addPostsToContainer(fetchPosts)