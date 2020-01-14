const express = require('express')
const expressGraphql = require('express-graphql')
const cors = require('cors');
const app = express();
app.use(cors());

// 配置路由
app.use('/graphql', expressGraphql(req => {
  return {
    // graphql相关代码主目录
    schema: require('./graphql/schema'), 
    // 是否开启可视化工具
    graphiql: true 
    // ... 此处还有很多参数，为了简化文章，此处就一一举出, 具体可以看 刚才开篇提到的 express文档,
    // 也可以在文章末尾拉取项目demo进行查阅
  }
}))
// 服务使用8800端口
app.listen(8800, () => {
  console.log("graphql 服务器监听,端口8800");
});

// var express = require('express');
// var graphqlHTTP = require('express-graphql');
// var { buildSchema } = require('graphql');
// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);
// var root = { hello: () => 'Hello world!' };
// var app = express();
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));


// app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));