function display(num){
    result.value += num
}

function clearAl(){
    result.value=""
}

function backBtn(){
    result.value=result.value.slice(0,-1)
}
function equal(){
    try{
        result.value = eval(result.value)
        if(result.value == 'undefined'){
            result.value="error"
            setTimeout(()=>{result.value=""},1000)
        }
    }
    catch{
        result.value="error"
            setTimeout(()=>{result.value=""},1000)
    }
}