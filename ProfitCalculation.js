/**
 * 投资收益计算(复利)
 * 目的是为了计算支付宝或微信中定期理财类产品的预期收益
 * PS：假设利率是相对稳定的，这一点需要自己去平衡计算
 */

/**
 * 
 * @param {float} principal 启示本金
 * @param {float} interestRate 每个周期的利率
 * @param {float} cycle 投入的周期
 * @param {float} stockPrice 每股价格
 * @param {float} regularInvestment 每个周期补入金 可以理解为定期存款上限
 * 
 * @returns 本息
 */
function calc(principal, interestRate, cycle, stockPrice, regularInvestment) {
    var ret = {
        allPrincipal: 0, //总投资
        returnMoney: 0, //总回报
        change: 0, //没投资出去的零头
    }
    var stockNum = Math.floor(principal / stockPrice); //起始股份
    var change = principal % stockPrice //剩余的零钱

    var interestList = []; //利润列表 记录每一期的利润情况
    // var regularList = []; //每个周期实际补入的资金


    for (var i = 0; i < cycle; i++) {
        // console.log(i, "=================");
        //一期的利息
        var interest = stockNum * stockPrice * interestRate;
        interestList[i] = interest; //记录
        // console.log("interest", interest);

        //计算还可以追加多少股
        var tmp = regularInvestment + change + interestList[i]; //可再进行投资的钱
        // console.log("tmp", tmp);
        stockNum += Math.floor(tmp / stockPrice);//累计增加股票
        // console.log("stockNum", stockNum);
        change = tmp % stockPrice; //重新计算剩余零钱
        // console.log("change", change);
    }

    console.log(interestList);

    ret.allPrincipal = principal + cycle * regularInvestment;
    // ret.change = change;
    for (var j = 0; j < interestList.length; j++) {
        ret.returnMoney += interestList[j];
    }
    ret.returnMoney += change;

    return ret;
}

var o = calc(30000, 0.01, 12, 1000, 0);
console.log(o);