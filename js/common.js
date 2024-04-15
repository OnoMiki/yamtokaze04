// ハンバーガーメニューのノードを取得 openに対して　id=open のdocumentをとってくるよ、
const open = document.getElementById("open");
const openoverlay = document.getElementById("overlay");
const drawer = document.getElementById("drawer");
const close = document.getElementById("close");
const menu = document.getElementsByClassName("drawer-menu-item");
console.log(menu);

//clickしたら下で作ったイベント関数が実行されるよ。
console.log(open);
open.addEventListener('click',openDrawer);
close.addEventListener("click",closeDrawer);
overlay.addEventListener("click",closeDrawer);
menu[0].addEventListener("click",closeDrawer);
menu[1].addEventListener("click",closeDrawer);
menu[2].addEventListener("click",closeDrawer);
menu[3].addEventListener("click",closeDrawer);

//メニューを開く

function openDrawer() {
    //  1.オーバーレイの表示　java scriptでクラスを追加する→stylecssにisactiveのクラスを追加すると良い
    //  clickされたとき、クラス名が追加されて、そのクラスのCSSが適用される
    overlay.classList.add("is-active");
    
    //  ２。ドロワーナビゲーションの表示
    drawer.classList.add("is-active");
    
};
//メニューをとじる

function closeDrawer() {
    //overlayに対してクラス名を取り除く。
    overlay.classList.remove("is-active");
    drawer.classList.remove("is-active");
}