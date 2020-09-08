const http = require('http')
const url = require('url')
const querystring = require('querystring')
const fs = require('fs')

//用户原始数据库
let user = {
  admin: 123456
}

http.createServer((req, res) => {
  //获取数据
  let path, get, post;
  if (req.method == 'GET') {
    let { pathname, query } = url.parse(req.url, true)
    path = pathname,
    get = query;
    complete();
  } else if (req.method == 'POST') {
    let arr = [];
    path = req.url;
    req.on('data', buffer => {
      arr.push(buffer);
    })
    req.on('end', () => {
      post = querystring.parse(Buffer.concat(arr).toString());
      complete();
    })
  }

  function complete() {
    if (path == '/login') {
      //登录接口
      res.writeHead(200,{
        "Content-Type":"text/plain;charset=utf-8"
      });
      let { username, password } = get;

      if (!user[username]) {

        res.end(JSON.stringify({
          err: 1,
          msg: "用户名不存在"
          })
        )
      } else if (user[username] != password) {
        res.end(JSON.stringify({
          err: 1,
          msg: "密码错误"
          })
        )
      } else {
        res.end(JSON.stringify({
          err: 0,
          msg: "登陆成功"
          })
        )
      }
    } else if (path == '/reg') {
      console.log("注册的用户:");
      //注册接口
      res.writeHead(200,{
        "Content-Type":"text/plain;charset=utf-8"
      });
      let {username,password} = post
      console.log("注册的用户:",username,password);
      if(user[username]){
        res.end(JSON.stringify({
          err: 1,
          msg: "账户已经存在"
          })
        )
      }else{
        user[username] = password;
        console.log("现在的数据库：",user);
        res.end(JSON.stringify({
          err: 0,
          msg: "注册成功"
          })
        )
      }
    } else {
      fs.readFile(`www${path}`,(err,data)=>{
        if(err){
          res.end('404');
        }else{
          res.end(data);
        }
      })
    }
  }
}).listen(8080) 