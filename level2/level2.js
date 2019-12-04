let btn = document.getElementById('submit')


const request=(url,data,method='GET')=>{
        return  fetch(url,{
            method,
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(response => {
            return response.text()
        })
        
    }
const getall =()=>{
    request('http://39.107.142.107:3000/mock/25/getText').then(data=>{
        console.log(data)
    })
}    
btn.addEventListener('click',getall,false)
const save=() => {
    let msg ={
        name:'erika',
        id:2345
    }
    request(
        'http://39.107.142.107:3000/mock/25/testPost',
        msg,
        'POST').then(msg=> {
        console.log(msg)
    })
}
btn.addEventListener('click',save,false)