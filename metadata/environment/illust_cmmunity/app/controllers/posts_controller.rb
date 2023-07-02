{"filter":false,"title":"posts_controller.rb","tooltip":"/illust_cmmunity/app/controllers/posts_controller.rb","undoManager":{"mark":14,"position":14,"stack":[[{"start":{"row":0,"column":45},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":1,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":1,"column":2},"end":{"row":11,"column":7},"action":"insert","lines":["def create","    @post = Post.new(post_params)","    @post.user_id=current_user.id","    # 受け取った値を,で区切って配列にする","    tag_list=params[:post][:name].split(',')","    if @post.save","      @post.save_tag(tag_list)","      redirect_to posts_path(@post),notice:'投稿完了しました:)'","    else","      render:new","    end"],"id":3}],[{"start":{"row":12,"column":3},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":6},{"start":{"row":13,"column":0},"end":{"row":13,"column":1},"action":"insert","lines":["e"]},{"start":{"row":13,"column":1},"end":{"row":13,"column":2},"action":"insert","lines":["n"]}],[{"start":{"row":13,"column":2},"end":{"row":13,"column":3},"action":"insert","lines":["d"],"id":7}],[{"start":{"row":12,"column":0},"end":{"row":12,"column":1},"action":"insert","lines":[" "],"id":8},{"start":{"row":12,"column":1},"end":{"row":12,"column":2},"action":"insert","lines":[" "]}],[{"start":{"row":8,"column":53},"end":{"row":8,"column":54},"action":"remove","lines":[")"],"id":9},{"start":{"row":8,"column":52},"end":{"row":8,"column":53},"action":"remove","lines":[":"]}],[{"start":{"row":12,"column":5},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":10},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":13,"column":2},"end":{"row":31,"column":3},"action":"insert","lines":["def save_tag(sent_tags)","  # タグが存在していれば、タグの名前を配列として全て取得","    current_tags = self.tags.pluck(:name) unless self.tags.nil?","    # 現在取得したタグから送られてきたタグを除いてoldtagとする","    old_tags = current_tags - sent_tags","    # 送信されてきたタグから現在存在するタグを除いたタグをnewとする","    new_tags = sent_tags - current_tags","","    # 古いタグを消す","    old_tags.each do |old|","      self.tags.delete　Tag.find_by(name: old)","    end","","    # 新しいタグを保存","    new_tags.each do |new|","      new_post_tag = Tag.find_or_create_by(name: new)","      self.tags << new_post_tag","   end","end"],"id":11}],[{"start":{"row":31,"column":0},"end":{"row":31,"column":1},"action":"insert","lines":[" "],"id":12},{"start":{"row":31,"column":1},"end":{"row":31,"column":2},"action":"insert","lines":[" "]}],[{"start":{"row":12,"column":5},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":13},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":32,"column":5},"end":{"row":33,"column":0},"action":"insert","lines":["",""],"id":14},{"start":{"row":33,"column":0},"end":{"row":33,"column":2},"action":"insert","lines":["  "]},{"start":{"row":33,"column":2},"end":{"row":34,"column":0},"action":"insert","lines":["",""]},{"start":{"row":34,"column":0},"end":{"row":34,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":34,"column":2},"end":{"row":38,"column":0},"action":"insert","lines":["def index","    @posts = Post.page(params[:page]).per(10)","    @tag_list=Tag.all","  end",""],"id":15}],[{"start":{"row":35,"column":3},"end":{"row":36,"column":21},"action":"remove","lines":[" @posts = Post.page(params[:page]).per(10)","    @tag_list=Tag.all"],"id":16}],[{"start":{"row":14,"column":2},"end":{"row":32,"column":5},"action":"remove","lines":["def save_tag(sent_tags)","  # タグが存在していれば、タグの名前を配列として全て取得","    current_tags = self.tags.pluck(:name) unless self.tags.nil?","    # 現在取得したタグから送られてきたタグを除いてoldtagとする","    old_tags = current_tags - sent_tags","    # 送信されてきたタグから現在存在するタグを除いたタグをnewとする","    new_tags = sent_tags - current_tags","","    # 古いタグを消す","    old_tags.each do |old|","      self.tags.delete　Tag.find_by(name: old)","    end","","    # 新しいタグを保存","    new_tags.each do |new|","      new_post_tag = Tag.find_or_create_by(name: new)","      self.tags << new_post_tag","   end","  end"],"id":17}],[{"start":{"row":1,"column":1},"end":{"row":19,"column":0},"action":"remove","lines":[" def create","    @post = Post.new(post_params)","    @post.user_id=current_user.id","    # 受け取った値を,で区切って配列にする","    tag_list=params[:post][:name].split(',')","    if @post.save","      @post.save_tag(tag_list)","      redirect_to posts_path(@post),notice:'投稿完了しました'","    else","      render:new","    end","  end","  ","  ","  ","  def index","   ","  end",""],"id":18}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":1,"column":1},"end":{"row":1,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1686735023721,"hash":"093141d3767e8026035e1c19d6631d7e8a130bd0"}