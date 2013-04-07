likeText = "知らんがな"

class Main
  @@start = (likeText) ->
    likeLink = $('.UFILikeLink')
    likeLink.text(likeText)
    likeLink.attr('title', "このアイテムに「" + likeText + "」します")

    $('span:contains("が「いいね！」と言っています。")').text((i,t) ->
      console.log(t)
      t.replace('いいね', likeText)
    )

Main.start(likeText)
