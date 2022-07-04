import router from '@system.router';

export default {
    name: "",
    data: {
        list: [],
        history: [],
        filePath: "",
        showBack: false,
        txtType: ['.txt', '.ini', '.bat'],
        imageType: ['.jpg', '.jpeg', '.png', '.gif', '.bmp'],
        videoType: ['.mp4', '.mov', '.avi', '.mpeg', '.rmvb', '.wmv'],
    },
    //检查文件类型并跳转到对应的模块
    toFilePageByFileType(item) {
        let typeName = item.fileType;
        if (this.txtType.some(ele => ele === typeName)) {
            //是文本
            router.push({
                uri: "pages/comp/text/index"
            })
        } else if (this.imageType.some(ele => ele === typeName)) {
            //是图片
            router.push({
                uri: "pages/comp/image/index",
                params: {
                    filePath: item
                }
            })
        } else if (this.videoType.some(ele => ele === typeName)) {
            //是视频
            router.push({
                uri: "pages/comp/video/index"
            })
        } else {
            //未知的
            console.log("unknown file")
        }
    },
    //打开文件
    open(item) {
        if (item.directory) {
            this.showBack = true;
            //打开目录
            this.history.push(this.filePath);
            this.filePath = item.filePath;
            //数据操作
            this.list = [{
                             "fileName": "desktop.ini",
                             "filePath": "E:\\question\\desktop.ini",
                             "fileType": ".ini",
                             "directory": false
                         }]
        } else {
            this.toFilePageByFileType(item)
        }

    },
    //返回上一层
    back() {
        this.filePath = this.history[this.history.length-1];
        this.history = this.history.slice(0, this.history.length - 2);
        if (this.filePath == "") {
            this.showBack = false
        }
        this.query();
    },
    //查询文件列表
    query() {
        this.list = [];
        for (var i = 0; i < 10; i++) {
            this.list.push({
                "fileName": "hello.txt",
                "filePath": "E:\\question\\hello.txt",
                "fileType": ".txt",
                "directory": false
            }, {
                "fileName": "i am a dir",
                "filePath": "E:\\question\\desktop.ini",
                "fileType": "",
                "directory": true
            },
                {
                    "fileName": "sun.jpg",
                    "filePath": "E:\\question\\sun.jpg",
                    "fileType": ".jpg",
                    "directory": false
                },
                {
                    "fileName": "toDay.mp4",
                    "filePath": "E:\\question\\toDay.mp4",
                    "fileType": ".mp4",
                    "directory": false
                },
                {
                    "fileName": "toDay.21321",
                    "filePath": "E:\\question\\toDay.3123",
                    "fileType": "123123",
                    "directory": false
                })
        }
    },
    onInit() {
        this.query()
    }
}

