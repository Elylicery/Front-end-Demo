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
    


