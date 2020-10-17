
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    
    if (matrix == undefined) {
        return result
    } else {
        matrix.forEach((element, index) => {
            if (index % 2 === 0) {
                for (i = 0; i < element.length; i++) {
                result.push(element[i])
                }
            } else {
                for (i = element.length - 1; i >= 0; i--) {
                result.push(element[i])
                }
            }
        });
        return result
    }
}
