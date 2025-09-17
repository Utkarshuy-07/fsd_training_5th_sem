//for(::)
let row =4;
let col = 2*row-1;
for(let i= 1; i<=row; i++){
    let line ="";
    for(let j=1; j<=col; j++){
        if(i+j> row&& j-i<row){
            line += "*"

        }else{
            line+= " "

        }
    }
    console.log(line);
}