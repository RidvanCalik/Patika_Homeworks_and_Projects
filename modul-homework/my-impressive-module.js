import axios from 'axios';

//void bir fonksiyon tasarladım
async function getData(userID=1){ //parametre verilmesse diye otomatik paramatre verdim
    var userInfo =await (await axios.get("https://jsonplaceholder.typicode.com/users/"+userID));

    var userPosts=await axios.get("https://jsonplaceholder.typicode.com/posts?userId="+userID);
    
    console.log("Kullanıcı bilgileri >>> ",userInfo.data);
    console.log("Kullanıcı postları >>> ",userPosts.data);
}

export default getData;