let btn = document.getElementById('submit')

btn.addEventListener('click',()=>{
    alert('请求发送成功')
    let msg={
        name:'erika',
        id:2345
    }
    let url ='http://39.107.142.107:3000/mock/25/testPost'
    postJSON(url,msg).then(function(data){
        console.log(JSON.stringify(data))
    },function(error){
        console.log('请求错误',error)
    })
})

    const postJSON = function(url,data){
        return new Promise ((resolve,reject)=>{
            const handler = function(){
                if(this.readyState !==4){
                    return
                }
                if(this.status===200){
                    resolve(JSON.stringify(this.responseText))
                }else{
                    reject(new Error(this.statusText))
                }
            }
            const cilent = new XMLHttpRequest()
            cilent.open("POST",url)
            cilent.onreadystatechange = handler
            cilent.responseText="json"
            cilent.setRequestHeader("Accept","application/json")
            cilent.send(data)
        })
        
    }