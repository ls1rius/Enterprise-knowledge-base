var statisticsContain = new Vue({
	el:'#statisticsContain',
	data:{
		isWordsView:false,
		isDataView:true,
		wordsViewType:'rightChoosePosRed',
		dataViewType:'',
		curGraphLink:'bar-tick-align_view.html',
		items:[
		{
			dataViewChooseIconfont:'icon-liulan',
			bgc:"#51b4ac",
			dataNum:"495",
			dataName:'浏览量',
			isChosen:true,
			graphLink:'bar-tick-align_view.html'
		},
		{
			dataViewChooseIconfont:'icon-download',
			bgc:"#ef9b92",
			dataNum:"495",
			dataName:'下载量',
			isChosen:false,
			graphLink:'bar-tick-align_download.html'
		},
		{
			dataViewChooseIconfont:'icon-msnui-love',
			bgc:"#f3dc8e",
			dataNum:"495",
			dataName:'收藏数',
			isChosen:false,
			graphLink:'bar-tick-align_favourite.html'
		},
		{
			dataViewChooseIconfont:'icon-taolun',
			bgc:"#8bc7c2",
			dataNum:"495",
			dataName:'评论数',
			isChosen:false,
			graphLink:'bar-tick-align_comment.html'
		}
		]
	},
	methods:{
		wordsViewAction:function(){
			// this.isWordsView = true;
			// this.isDataView = false;
			this.wordsViewType='rightChoosePosRed';
			this.dataViewType='';
		},
		dataViewAction:function(){
			// this.isWordsView = false;
			// this.isDataView = true;
			this.wordsViewType='';
			this.dataViewType='rightChoosePosRed';
		},
		pickOneModule:function(index){
			this.items.forEach(function(item){
				item.isChosen = false;
			})
			this.items[index].isChosen = true;
			this.curGraphLink = this.items[index].graphLink;
		}
	}

})


$.getJSON('http://d-star.xyz:8080/getWordCloud?cnt=1000', function(res) {
    var wordmap = echarts.init(document.getElementById('wordsCloudGraph'));
    var words = [];
    function createRandomItemStyle() {
        return {
            normal: {
                color: 'rgb(' + [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                ].join(',') + ')'
            }
        };

    }
    res.forEach(function(item){
        words.push({
            'name':item.word,
            'value':item.weight,
            'textStyle': createRandomItemStyle()
        });
    });
    option = {
        tooltip: {
            show: true
        },
        series: [{
            name: '热词词云',
            type: 'wordCloud',
            width: '95%',
            height: '90%',
            rotationRange: [0, 0],
            shape: 'circle',
            data: words
        }]
    };
    // console.log(option);
    wordmap.setOption(option);
    function resize() {
        wordmap.resize();
    }
    window.onresize = resize;
    resize();
});




var rightContain = new Vue({
	el:'#rightContain',
	data:{
		starPic:'../image/star.png',
		contributionList:[
		{
			headImage:'../image/man1.jpg',
			rank:1,
			name:'瑶瑶欲坠',
			starNum:5
		},
		{
			headImage:'../image/man2.jpg',
			rank:2,
			name:'杏仁不见了',
			starNum:4
		},
		{
			headImage:'../image/man3.jpg',
			rank:3,
			name:'牛奶与密封',
			starNum:4
		},
		{
			headImage:'../image/man4.jpg',
			rank:4,
			name:'南风与鸢尾',
			starNum:3
		},
		{
			headImage:'../image/man6.jpg',
			rank:5,
			name:'干瘪的土豆',
			starNum:3
		}
		],
		isAll:true,
		isSelf:false
	},
  	methods:{
		changeDepart:function(type){
			if(type=='a'){
				this.isAll = true;
				this.isSelf = false;
			}
			else{
				this.isAll = false;
				this.isSelf = true;
			}
		},
		searchTheWords:function(word){
			console.log(word);
			// console.log("123");
		}
	}
})


