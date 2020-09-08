## 效果展示
***
<img src="使用AngularJS完成SAP：笔记+备忘录.assets/final" alt="在这里插入图片描述" style="zoom: 67%;" />
## 源代码
***
note.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mynote</title>
    <style>
        textarea{
            resize: none;
        }
    </style>
</head>
<body ng-app="myApp">
    <div ng-controller="MyCtrl">
        <h2>我的笔记</h2>
        <textarea cols="30" rows="10" ng-model="message">
        </textarea>
        <div>
            <button ng-click="save()">保存</button>
            <button ng-click="read()">读取</button>
            <button ng-click="remove()">删除</button>
        </div>
        <p>剩余的字数:{{getCount()}}</p>
    </div>
    <div ng-controller="MyCtrl2">
        <h2>备忘录</h2>
        <div>
            <input type="text" ng-model="newItem">
            <button ng-click="add()">添加</button>
        </div>
        <div ng-repeat="todo in todos">
            <input type="checkbox" ng-model="todo.isChecked">
            <span>{{todo.name}}</span><br/>
        </div>
        <div>
            <button ng-click="del()">删除选中的记录</button>
        </div>

    </div>
    

<script type="text/javascript" src="../js/angular-1.5.5/angular.js"></script>
<script type="text/javascript" src="app.js"></script>

</body>
</html>
```

app.js
```javascript
angular.module('myApp',[])
    .controller('MyCtrl',['$scope',function($scope){
        
        //初始化message数据
        $scope.message = '';

        //计算剩余字数的方法
        $scope.getCount = function(){
            //判断用户输入的内容长度
            if($scope.message.length>100){
                $scope.message =  $scope.message.slice(0,100);
            }
            return 100 - $scope.message.length;
        };
        //定义保存数据的方法
        $scope.save = function(){
            alert("note is saved !");
            localStorage.setItem('my-data',JSON.stringify($scope.message));
            $scope.message = "";
        };
        //定义读取数据的方法
        $scope.read = function(){
            $scope.message = JSON.parse(localStorage.getItem('my-data')||'[]');//如果没有值则取到null,要处理null的情况
        };
        //定义删除数据的方法
        $scope.remove = function(){
            localStorage.removeItem('my-data');
            $scope.message = '';
        }
    }])
    .controller('MyCtrl2',['$scope',function($scope){
        $scope.todos = [
            {name:'吃饭1',isChecked:false},
            {name:'吃饭2',isChecked:false},
            {name:'吃饭3',isChecked:false},
        ]


        //定义添加的方法
        $scope.add = function(){
            //判断用户输入的内容是否合法
            if(!$scope.newItem){
                alert('输入的内容不能为空');
                return;
            }
            //收集整理数据
            var obj={
                name:$scope.newItem,
                isChecked:false
            }
            $scope.todos.push(obj);
            $scope.newItem='';
        };

        //定义删除的方法
        // $scope.del = function(){
        //     $scope.todos.forEach(function(item,index){
        //         //找的选中的todo
        //         if(item.isChecked){
        //             $scope.todos.splice(index,1);
        //             $scope.del();//递归
        //         }
        //     })
        // }

        $scope.del = function(){
            var oldTodos = $scope.todos;
            $scope.todos = [];
            oldTodos.forEach(function(item,index) {
                if(!item.isChecked){
                    $scope.todos.push(item);
                }
            })
        }
    }]);
    


```