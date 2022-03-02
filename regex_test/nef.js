const username='12345666'
const pattern=/^[a-zA-Z0-9]{5,10}$/   //her şey kapsamasını istiyorsak '@' gibi başına . koyucaz sadece
const sonuc=pattern.test(username)

if(sonuc){
    console.log('başarılı')
}