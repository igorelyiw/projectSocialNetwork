export const usersAPI = {
  getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
  }
}

export const postsAPI = {
  getPosts(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
  },
  createPost(values) {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        ...values
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
  },
  updatePost(values) {
    return fetch('https://jsonplaceholder.typicode.com/posts/' + values.id, {
      method: 'PUT',
      body: JSON.stringify({
        ...values
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
  }
}

export const commentsAPI = {
  getComments(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => response.json())
  },
  deletePost(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE'
    }
    )
      .then((response) => console.log(response))
  },
  getPost(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
  }
}
