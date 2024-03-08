const URL = process.env.NEXT_PUBLIC_API_URL

export async function getAllPosts() {
    const response = await fetch(`${URL}/posts`)

    if (!response.ok) {
        throw new Error("An error occured while fetching")
    }

    const data = await response.json()
    return data
}

export async function getPostById(id) {
    const response = await fetch(`${URL}/posts/${id}`)

    if (!response.ok) {
        throw new Error("An error occured while fetching")
    }

    const data = await response.json()
    return data
}

export async function createPost(post, token) {
    const response = await fetch(`${URL}/posts`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`
        },
        body: JSON.stringify(post)
    })

    if (!response.ok) {
        throw new Error("An error occured while fetching")
    }

    const data = await response.json()
    return data
}

export async function updatePost(post, token) {
    const response = await fetch(`${URL}/posts/${post.id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`
        },
        body: JSON.stringify(post)
    })

    if (!response.ok) {
        throw new Error("An error occured while fetching")
    }

    const data = await response.json()
    return data
}

export async function deletePost(id, token) {
    const response = await fetch(`${URL}/posts/${id}`, {
        method: "DELETE",
        headers: {
            "authorization": `Bearer ${token}`
        }
    })

    if (!response.ok) {
        throw new Error("An error occured while fetching")
    }
}