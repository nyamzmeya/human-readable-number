module.exports = function toReadable (number) {
    if (number == 0) {
        return 'zero';
    }
    let before = ['one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let after = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

    function under_h(n) {
        if (n < 20) {
            return before[n - 1];
        } else if (n >= 20 && n < 100 && n % 10 == 0) {
            return after[n/10 - 2];
        } else if (n >= 20 && n < 100 && n % 10 != 0) {
            return after[Math.floor(n/10) - 2] + ' ' + before[n % 10 - 1];
        }
    }

    if (number < 100) {
        return under_h(number);
    } else if (number >= 100 && number % 100 == 0) {
        return before[Math.floor(number/100) - 1] + ' ' + 'hundred';
    } else return before[Math.floor(number/100) - 1] + ' ' + 'hundred' + ' ' + under_h(number % 100);

}

