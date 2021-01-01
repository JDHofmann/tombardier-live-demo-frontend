
// const userUrl = "http://localhost:3000/users/1"
const baseUrl = "https://tranquil-wildwood-35160.herokuapp.com/"

export const fetchUser = () => {
    return (dispatch) => {
        fetch(`${baseUrl}users/3`)
        .then(resp => resp.json())
        .then(userData => dispatch({
            type: 'LOAD_USER',
            user: userData
        }))
    }
}

export const submitLogin = (loginObj) => {
    return (dispatch) => {
        fetch(`${baseUrl}login`, {
            method: "POST",
            headers: {
                "content-type":"application/json",
                "accepts":"application/json"
            },
            body: JSON.stringify({
                user: loginObj
            })
            })
            .then(r => r.json())
            .then(data => {
            console.log("data", data)
            // if(!data.message === "Invalid username or password"){
                localStorage.setItem("token", data.jwt)
                dispatch({
                    type: 'SET_CURRENT_USER',
                    currentUser: data.user
                })
            // } else {
            //     dispatch({
            //         type: 'REMOVE_CURRENT_USER'
            //     })
            // }
        })
    }
}

export const handleLogout = () => {
    return {
        type: 'REMOVE_CURRENT_USER'
    }
}

export const fetchCurrentUser = (token) => {
    return (dispatch) => {
        fetch(`${baseUrl}profile`,{
            method: "GET",
            headers: { Authorization: `Bearer ${token}`}
        })
        .then(resp => resp.json())
        .then(data => dispatch({
            type: 'SET_CURRENT_USER',
            currentUser: data
        }))
    }
}

export const editAccountInfo = (patchObj) => {
    const token = localStorage.getItem("token")
    return (dispatch) => {
        fetch(`${baseUrl}users/3`, {
            method: "PATCH",
            headers: {
                "content-type":"application/json",
                "accept":"application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(patchObj)
        })
        .then(resp => resp.json())
        .then(data => dispatch(fetchUser()))
    }
}

export const editSiteInfo = (patchObj) => {
    const token = localStorage.getItem("token")
    return (dispatch) => {
        fetch(`${baseUrl}users/3`, {
            method: "PATCH",
            headers: {
                "content-type":"application/json",
                "accept":"application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(patchObj)
        })
        .then(resp => resp.json())
        .then(data => dispatch(fetchUser()))
    }
}

export const editLinkInfo = (patchObj) => {
    const token = localStorage.getItem("token")
    return (dispatch) => {
        fetch(`${baseUrl}${patchObj.id}`, {
            method: "PATCH",
            headers: {
                "content-type":"application/json",
                "accept":"application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(patchObj)
        })
        .then(resp => resp.json())
        .then(updatedLink => dispatch(fetchUser()))
    }
}

export const deleteUserLink = (id) => {
    const token = localStorage.getItem("token")
    return (dispatch) => {
        fetch(`${baseUrl}${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(resp => resp.json())
        .then(data => dispatch(fetchUser()))
    }
}

export const createUserLink = (newObj, userId) => {
    const token = localStorage.getItem("token")
    return (dispatch) => {
        fetch(`${baseUrl}user_links`, {
            method: "POST",
            headers: {
                "content-type":"application/json",
                "accept":"application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({...newObj, user_id: userId})
        })
        .then(resp => resp.json())
        .then(updatedLink => dispatch(fetchUser()))
    }
}

export const newUserImage = (imageformData) => {
    const token = localStorage.getItem("token")

    return (dispatch) => {
        let options = {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: imageformData
        }
        fetch(`${baseUrl}users/1`, options)
        .then(resp => resp.json())
        .then(useless => dispatch(fetchUser()))
    }
}

export const createProject = (newProjObj) => {
    const token = localStorage.getItem("token")
    return (dispatch) => {
        fetch(`${baseUrl}projects`, {
            method: "POST",
            headers: {
                "content-type":"application/json",
                "accept":"application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newProjObj)
        })
        .then(resp => resp.json())
        .then(useless => dispatch(fetchUser()))
    }
}

export const updateProject = (patchObj) => {
    const token = localStorage.getItem("token")
    return (dispatch) => {
        fetch(`${baseUrl}projects/${patchObj.id}`, {
            method: "PATCH",
            headers: {
                "content-type":"application/json",
                "accept":"application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(patchObj)
        })
        .then(resp => resp.json())
        .then(data => dispatch(fetchUser()))
    }
}

export const deleteProject = (id) => {
    const token = localStorage.getItem("token")
    return (dispatch) => {
        fetch(`${baseUrl}projects/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(resp => resp.json())
        .then(data => dispatch(fetchUser()))
    }
}

export const newProjectImage = (newImage, projectImageId) => {
    const token = localStorage.getItem("token")
    return (dispatch) => {
        let options = {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: newImage
        }
        fetch(`${baseUrl}project_images/${projectImageId}`, options)
        .then(resp => resp.json())
        .then(data => dispatch(fetchUser()))
    }
}

export const brandnewProjectImage = (newImage) => {
    return (dispatch) => {
        const token = localStorage.getItem("token")
        let options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: newImage
        }
        fetch(`${baseUrl}project_images`, options)
        .then(resp => resp.json())
        .then(data => dispatch(fetchUser()))
    }
}

export const deleteProjectImage = (id) => {
    const token = localStorage.getItem("token")
    return (dispatch) => {
        fetch(`${baseUrl}project_images/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(resp => resp.json())
        .then(data => dispatch(fetchUser()))
    }
}

export const createProjectLink = (newObj, projectId) => {
    const token = localStorage.getItem("token")
    return (dispatch) => {
        console.log(newObj, projectId)
        fetch(`${baseUrl}project_links`, {
            method: "POST",
            headers: {
                "content-type":"application/json",
                "accept":"application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({...newObj, project_id: projectId})
        })
        .then(resp => resp.json())
        .then(updatedLink => dispatch(fetchUser()))
    }
}

export const editProjectLink = (patchObj) => {
    return (dispatch) => {
        const token = localStorage.getItem("token")
        fetch(`${baseUrl}project_links/${patchObj.id}`, {
            method: "PATCH",
            headers: {
                "content-type":"application/json",
                "accept":"application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(patchObj)
        })
        .then(resp => resp.json())
        .then(updatedLink => dispatch(fetchUser()))
    }
}

export const deleteProjectLink = (id) => {
    return (dispatch) => {
        const token = localStorage.getItem("token")
        fetch(`${baseUrl}project_links/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(resp => resp.json())
        .then(data => dispatch(fetchUser()))
    }
}