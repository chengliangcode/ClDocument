const fs = require('fs');
const path = require('path');


function rootFolder(rootPath) {
    let sidebar = {};
    let parent = [];
    // 读取文件夹
    let files = getDirFiles(rootPath);
    // 遍历获取到的文件夹内容
    files.forEach(function (file, index, array) {
        // 获取规范的绝对路径
        // let realpath = fs.realpathSync(rootPath + "/" + value);
        // 拼接为绝对路径
        // let realpath = path.resolve(rootPath, file)
        // 获取相对路径
        let realpath = rootPath + "/" + file;
        // 拼接为相对路径
        // let realpath = path.join(rootPath, file)
        // 获取文件状态
        let stat = fs.lstatSync(realpath);
        // 判断是否为文件夹
        if (stat.isDirectory()) {
            // test2(realpath, value, []);
            let filesList = [];
            let targetObj = {};
            readFile(realpath, filesList, targetObj);
            sidebar["/" + file + "/"] = filesList;
        } else {
            /*let fileName = value.slice(0, -3);
            if ("README" == fileName) {
                fileName = '';
            }
            parent.push(fileName);*/
        }
    });
    parent.push("");
    sidebar["/"] = parent;
    console.log(JSON.stringify(sidebar));

    return sidebar;
}

function getDirFiles(dirname) {
    // 读取文件夹
    // let fileNames = fs.readdirSync(path.resolve(__dirname, dirname)).map(filename => filename);
    let files = fs.readdirSync(dirname).sort();
    let ignores = [".git", ".gitignore", "docs", "node_modules", "yarn.lock", "package.json", "package-lock.json"];

    return notInArrayKV(files, ignores);
}

function notInArrayKV(arr, retentionArr) {
    let newArr = [];
    arr.forEach(function (value, index, array) {
        // 判断文件名以什么开头、是否在指定数组中存在
        if (!value.startsWith(".") && !retentionArr.includes(value)) {
            newArr.push(value);
        }
    });
    return newArr;
}
function readFile(dirPath, filesList, targetObj) {

    let files = getDirFiles(dirPath);//需要用到同步读取
    files.forEach(function (file) {
        // let childrenPath = path + '/' + file;
        let childrenPath = path.join(dirPath, file)
        let states = fs.statSync(childrenPath);
        if (states.isDirectory()) {
            let item;
            if (targetObj["children"]) {
                item = {title: file, children: [], parent: dirPath.cuttingPathWith()};
                // 把更深层的子文件夹装入上级子文件夹数组中
                targetObj["children"].push(item);
            } else {
                item = {title: file, children: []};
                // 装入构造同级文件夹下的子文件夹对象
                filesList.push(item);
            }
            readFile(childrenPath, filesList, item);
        }
        // 必须是md文件
        else if (file.endsWith(".md")) {
            let fileName = file.slice(0, -3);
            if ("README" == fileName) {
                fileName = '';
            }
            if (targetObj["children"]) {
                fileName = targetObj["title"] + "/" + fileName;
                if (isEmpty(targetObj["parent"])) {
                    fileName = targetObj["parent"] + "/" + fileName;
                    delete (targetObj["parent"]);
                }
                // 把文件装入更深层子文件夹的数组中
                targetObj["children"].push(fileName);
            } else {
                // 装入同级文件夹下的文件
                filesList.push(fileName);
            }
        }
    });
}

module.exports={
    rootFolder
}