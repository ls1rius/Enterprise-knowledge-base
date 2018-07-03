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
            // size: ['100%', '100%'],
            width: '95%',
            height: '90%',
            rotationRange: [0, 0],
            shape: 'circle',
            data: words
        }]
    };
    console.log(option);
    wordmap.setOption(option);
    function resize() {
        wordmap.resize();
    }
    window.onresize = resize;
    resize();
});

