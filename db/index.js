// 引入 mongoose 操作模块
const mongoose = require('mongoose');
//如果你的数据库名不是buba，那么就把buba改成你自己的数据库名
mongoose.connect('mongodb://127.0.0.1:27017/todolist', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let List = mongoose.Schema({
  className: {
    type: String,
    required: true
  },
  classDate: {
    type: String,
    required: true
  },
  classTeacher: {
    type: String,
    required: true
  },
  classMaster: {
    type: String,
    required: true
  }
});
let ListModel = mongoose.model('list', List);
// 获取班级列表
ListModel.find().then(doc => {
  if (doc.length == 0)
    res.json([]);
  else {
    res.json(doc);
  }
})