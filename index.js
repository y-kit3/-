$(function(){
  
  //カーソル要素の指定
  var cursor=$("#cursor");
  //ちょっと遅れてついてくるストーカー要素の指定  
  var stalker=$("#stalker");
  
  //mousemoveイベントでカーソル要素を移動させる
  //$(セレクタ).on('イベント',関数)
  $(document).on("mousemove",function(e){
    //カーソルの座標位置を取得
    //event.clientX / Y･･･ブラウザウィンドウ内でのカーソル座標を取得．ウィンドウの左上が常に (0, 0) の座標となる．
    var x=e.clientX; 
    var y=e.clientY;

    console.log('x=>',x);
    console.log('y=>',y);

    //カーソル要素のcssを書き換える用
    //
    cursor.css({
      "opacity":"1",
      "top":y+"px",
      "left":x+"px"
    });
    //ストーカー要素のcssを書き換える用    
    //setTimeout(関数function, 一定時間の指定（ミリ秒単位ms）)
    //0.14秒後にストーカー要素のcssを書き換える
    setTimeout(function(){
      stalker.css({
      "opacity":"0.3",
        "top":y+"px",
        "left":x+"px"
    });
    },140);//カーソルより遅れる時間を指定
    
  });
});

//基本形
//$(function(){
//  $(A).B()　←処理を記述・・・AをBする
//});


//応用形 今回はこの形（mousemoveイベントでカーソル要素を移動させて座標を取得したとき、カーソル要素、ストーカー要素のCSSを書き換える）
//$(function(){
//  $("A").B(function{ 　⇦AをBしたとき
//   $("C").D()        　⇦CをDする
//  });  
//});