
export const isSignIn = async function () {
    await fetch('/isSignIn/api/user/isSignIn')
    .then( response => response.json() )
    .then( result => {
        console.log(result)
        return result
    } )
}