function home_load(name){
    //Menu_touch  內文
    document.getElementById('Menu name').innerHTML = name;
    document.getElementById('Menu_touch').style.color = "black";

    if(name == '三明治')
        document.getElementById('Menu_touch').innerHTML =
            "1.草莓三明治-----20$<br>2.巧克力三明治-----20$<br>3.花生三明治-----20$<br>4.燒肉三明治-----35$" +
            "<br>5.火腿三明治-----35$";

    else if(name == '漢堡')
        document.getElementById('Menu_touch').innerHTML = "1.漢堡<br>2.漢堡<br>3.漢堡";

    else if(name == '飲品')
        document.getElementById('Menu_touch').innerHTML = "1.飲品 <br>2.飲品<br>3.飲品";

    else if(name == '炸物')
        document.getElementById('Menu_touch').innerHTML = "1.炸物 <br>2.炸物<br>3.炸物";

    else if(name == '特色餐點')
        document.getElementById('Menu_touch').innerHTML = "1.特色餐點<br>2.特色餐點<br>3.特色餐點";

    else if(name =='鍋燒')
        document.getElementById('Menu_touch').innerHTML = "1.鍋燒<br>2.鍋燒<br>3.鍋燒";


    else{
        document.getElementById('Menu_touch').style.color = "red";
        document.getElementById('Menu_touch').innerHTML = "無商品";
       }
}