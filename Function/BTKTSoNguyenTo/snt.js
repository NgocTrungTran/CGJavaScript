
function snt(num) {
        if (num < 2) {
            return false;
        }
        else if (num == 2) {
            return true;
        }
        else {
            for (i = 2; i < num; i++) {
                if (num % i == 0) {
                    return false;
                }
                else if (i == (num - 1)) {
                    return true;

                } 
            }
        }
}

for (let num = 2; num < 1000; num++) {
    if (snt(num)) {
        document.write(num + '');
    }
}
