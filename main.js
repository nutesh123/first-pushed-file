const posts =[
    { tytle : 'post one'  , body: 'this is post one' },
    { tytle: 'post two ' ,  body :'this is post two' }
  ]
  
  function getposts (){
    setTimeout(()=> {
        let output= ' ' ;
        for(let i=0;  i<posts.length ; i++){
            output +=`<li>${posts[i].tytle}</li> `
        }
       document.body.innerHTML=output;
    },1000)
  }
  
  function createpost(post) {
    return new Promise((resolve,reject) =>{
      setTimeout (()=>{
        posts.push(post);
  
        const err= true ;
  
        if(err){
          resolve('okkokkk')
        }
        else{
          reject('error ahe bhau')
        }
      },2000)
    } )
  }
  createpost({ tytle: 'post three' , body:'this is post three'}).then(getposts).catch(letstry);
  
  function letstry(){
    console.log('error wrong happen')
  }
  
  function deleteposts(){
    return new Promise ((resolve,reject) =>{
      setTimeout(() => {
        posts.pop();
        const error=(posts.length===0)
        if(!error){
          resolve()
        }
        else{
          reject("error:array is empty")
        }
      }, 1000);
    })
  }
  
  deleteposts()
  
  deleteposts().catch(err=> console.log(err))