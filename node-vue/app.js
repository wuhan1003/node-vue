const http = require('http');
const url = require('url');
const qs = require('querystring');
const util = require('util');
const conn = require('./conn');
conn.connect(( err )=>{
	if( err ) {
		console.log( err )
	} else {
		console.log( 'server connect success !');
	}	
});
//const localhost = 127.0.0.1;
http.createServer((req,res) =>{
    const reqUrl = url.parse( req.url );
    if(req.method == "GET") {
	console.log('get请求开始！');
        console.log(reqUrl );
	res.writeHead(200,{'content-type':'text/explain;charset=utf-8'});
	res.end('这是返回数据！')
	
    } else {
	console.log('post请求开始！')
	console.log( reqUrl );
	let post = null;
	req.on('data',function( chunk ){ //ch 是一个buffer 
		//post += ch;   +=操作有个隐秘的转换,调用了ch.toString()
		//post.push( chunk.toString() )
		post = chunk.toString();
		
	
	})
	req.on('end',function(){
		res.writeHead(200,{'content-type':'text/explain;charset=utf-8'});
		const str = JSON.parse( post );
		console.log( str );
		console.log( str.username,str.password )
		const sql =  `SELECT username,password FROM user WHERE username = "${str.username}" AND password = "${str.password}"`;
		// const sql = 'SELECT username,password FROM user';
		conn.query(sql,( err, result ) =>{
			if(err) {
				console.log( err )
			} else {
				console.log( result );
			}
		})
		
		res.end(post,'utf-8');
	})


	//res.end('这是返回数据！','utf-8')
    }

}).listen(3000,(err)=>{
    if(err){
        console.log( err );
    } else {
        console.log( '服务器已开启！')
    }
})