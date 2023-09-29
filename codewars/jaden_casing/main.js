String.prototype.toJadenCase = function () {
    let words = this.split(' ');

    words = words.map(item => {
        item = item[0].toUpperCase() + item.substring(1);
        return item;
    })

    return words.join(' ');
};


console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
