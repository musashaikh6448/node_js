const http=require('http')

http.createServer((req,res)=>{
    console.log(req.url);
    if (req.url== '/aboutus'){
        res.write('we are start new batch of mern fullstack')
    }else if(req.url=='/home'){
        res.write('<h1>welcome to tekisky</h1>')
    
    }else if(req.url=='/service'){
        res.write('we have 10% off ')
    }else if(req.url=='/contact'){
        res.write('you can contact here www.tekisky.com ')
    }else{
        res.write('wrong end point ')
    }

    res.end()
}).listen(7500,()=>{
    console.log('server started a port number 7500');
})


////////////////////////////////////


