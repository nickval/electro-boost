export const authorithation = (username, password) => {
    return new Promise((resolve, reject) => {
        if(username === 'admin' && password === 'admin') {
            resolve({
                username : username,
                userRole : 'admin'
            });
        } else if (username ==='user' && password === 'user'){
            resolve({
                username : username,
                userRole : 'user'
            })
        } 
        else {
            reject({
                msg : 'Wrong credentials'
            })
        }
    })
}