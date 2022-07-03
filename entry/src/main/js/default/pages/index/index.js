


export default {
    data: {
        list: [],
        history: [],
        filePath: "",
        showBack: false,
    },
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
            console.log("打开文件")
        }

    },
    back() {
        this.filePath = this.history[this.history.length-1];
        this.history = this.history.slice(0, this.history.length - 2);
        if(this.filePath == ""){
            this.showBack = false;
        }
        this.query();
    },
    query() {
        this.list = [];
        for (var i = 0; i < 10; i++) {
            this.list.push({
                "fileName": "desktop.ini",
                "filePath": "E:\\question\\desktop.ini",
                "fileType": ".ini",
                "directory": false
            }, {
                "fileName": "i am a dir",
                "filePath": "E:\\question\\desktop.ini",
                "fileType": "",
                "directory": true
            })
        }
    },
    onInit() {
        this.query()
    }
}

