exports.getTab = function(value) {
    if (value.top) return '置顶';
    if (value.good) return '精华';
    switch (value.tab) {
        case 'share':
            return "分享"
        case 'ask':
            return '问答'
        case 'good':
            return '精华'
        case 'job':
            return '招聘'
    }
}

exports.getLastTime = function(time) {
    var t = parseInt((new Date() - new Date(time)) / 1000);
    if (t < 60) {
        return t + '秒'
    } else if (t > 60 && t < 3600) {
        return parseInt(t / 60) + '分钟'
    } else if (t > 3600 && t < 86400) {
        return parseInt(t / 3600) + '小时'
    } else if (t > 86400 && t < 86400 * 30) {
        return parseInt(t / 86400) + '天'
    } else {
        return parseInt(t / 86400 / 30) + '月'
    }
}