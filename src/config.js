const MARVEL_PUBLIC_API_KEY = "6a85c8d6f249a662ea39e8012ee02359"

// const MARVEL_PRIVATE_API_KEY = "a1da5e39bec1891401b448f4275306193c50dcfa"
useEffect(()=>{
    fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=6a85c8d6f249a662ea39e8012ee02359")
    .then(res=>res.json()).then(res=>console.log(res))
    .catch(err=>console.log(err))
  },[])