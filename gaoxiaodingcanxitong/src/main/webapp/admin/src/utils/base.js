const base = {
    get() {
        return {
            url : "http://localhost:8080/gaoxiaodingcanxitong/",
            name: "gaoxiaodingcanxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gaoxiaodingcanxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "高校订餐系统"
        } 
    }
}
export default base
