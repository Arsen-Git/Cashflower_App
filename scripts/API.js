const host = `http://localhost:8080`

export default{
    async getUser(name, password){
        let res = await fetch(`${host}/api/users?name=${name}&password=${password}`)
        return await res.json();
    },
    async registerNewUser(user){
        let res = await fetch(`${host}/api/users`,{
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        return await res.json();
    },
    async getWallets(id){
        let res = await fetch(`${host}/api/wallets/${id}`)
        return await res.json();
    },
    async saveWallet(wallet){
        let res = await fetch(`${host}/api/wallets`,{
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wallet)
        });
        return await res.json();
    }
}