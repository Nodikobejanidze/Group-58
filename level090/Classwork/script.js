
function parentFunction() {
    let parentVariable = "l am parent variable";

    function childFunction() {
        let childVariable = "l am child variable";
        console.log(parentVariable);
        console.log(childVariable);
    }

    childFunction();
}

parentFunction();