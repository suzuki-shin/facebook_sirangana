var likeText, Main;
likeText = "知らんがな";
Main = (function(){
  Main.displayName = 'Main';
  var prototype = Main.prototype, constructor = Main;
  constructor.start = function(likeText){
    var likeLink;
    likeLink = $('.UFILikeLink');
    likeLink.text(likeText);
    likeLink.attr('title', "このアイテムに「" + likeText + "」します");
    return $('span:contains("が「いいね！」と言っています。")').text(function(i, t){
      console.log(t);
      return t.replace('いいね', likeText);
    });
  };
  function Main(){}
  return Main;
}());
Main.start(likeText);