function main(){

    let result=''

    for(let i=99;i>=1;i--){
        if(i>2){
            result+=i+' bottles of beer on the wall, '+i+
            ' bottles of beer.\n'+'Take one down and pass it around, '+(i-1)+
            ' bottles of beer on the wall.\n'
        }else if(i==2){
            result+=i+' bottles of beer on the wall, '+i+
            ' bottles of beer.\n'+'Take one down and pass it around, '+(i-1)+
            ' bottle of beer on the wall.\n'
        }else {
            result+=i+' bottle of beer on the wall, '+i+
            ' bottle of beer.\n'+'Take one down and pass it around, no more bottles of beer on the wall.\n'+
            'No more bottles of beer on the wall, no more bottles of beer.\n'+
            'Go to the store and buy some more, 99 bottles of beer on the wall.'
        }
    }

    return result
}

module.exports=main