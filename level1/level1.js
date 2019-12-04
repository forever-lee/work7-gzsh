

let btn = document.getElementById('submit');
btn.addEventListener('click',()=>{
    alert('请求已发送')

    const react =new XMLHttpRequest()
    react.open("GET","http://39.107.142.107:3000/mock/25/getText",true)
    react.send(null)

    react.onreadystatechange = function(){
        if(react.readyState === 4){
            if(react.status === 200){
                console.log(JSON.stringify(react.responseText))
                console.log('请求成功')
            }else{
                console.log('请求失败')
            }
        }
    }
    let msg={
        name:'erika',
        id:2345
    }
    console.log(JSON.stringify(msg))

    //post请求
    const xhr = new XMLHttpRequest()
        xhr.open("POST","http://39.107.142.107:3000/mock/25/testPost",true)
        xhr.setRequestHeader('Content-Type','application/json')
        xhr.send(JSON.stringify(msg))
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log(JSON.stringify(xhr.responseText))
                    console.log('请求成功')
                } else {
                    console.log('请求失败')
                }
            }

        }

})