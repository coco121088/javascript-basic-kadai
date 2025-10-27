let num=15;

if(num>=1)

  //変数numが3と5の倍数の場合
if(num%15==0&& num%3==0){console.log('3と5の倍数です');}

//3の倍数の場合
else if(num%5==0){console.log('5の倍数です');}

//5の倍数の場合
else if(num%3==0){console.log('3の倍数です');}

//その他の場合
else{console.log(num);}
