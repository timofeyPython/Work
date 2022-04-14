export function getAuthForm(){
    return `   <form class="mui-form" id= "auth-form">
                <div class="mui-textfield mui-textfield--float-label">
                    <input type="email" id ="email" required>
                    <label for="email">Email</label>
                </div>
                <div class="mui-textfield mui-textfield--float-label">
                    <input type="password" id ="password" required>
                    <label for="password">Password</label>
                </div>
                <button type="submit" class="mui-btn mui-btn--raised mui-btn--primary">
                    Войти
                </button>
            </form>
            `
}

export function authWithEmailAndPassword(email, password){
    const apiKey = 'AIzaSyBN58a5ZstuKB6-1X2rwgQXBDh7T0VDGR0'
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${apiKey}`,{
            method:"POST",
            body:JSON.stringify({
            email,password,
                returnSecureToken : true
            }),
        headers:{
                'Content-Type': 'application/json'
        }
    })
        .then(response=>response.json())
        .then(data => console.log(data))
}