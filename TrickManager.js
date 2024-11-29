class TrickManager{

    //trickの設定用オブジェクト
    trickSetting;
    //現在読み込んでいるContents、つまりブロックの状態
    contents;
    //現在のContentsの役の情報
    trick;
    //現在のContentsのindex
    //ただしstring型
    index;

    constructor(trickSetting){
        //役の設定を保持
        this.trickSetting = trickSetting;
    }

    //指定したContentsを読み込み、それを現在のContentsとする
    //各種情報を得られるようなメソッドが利用可能になる
    setContents(contents){
        this.contents = contents;
        this.trick = null;
        this.index = null;
        this.readContents();
    }

    //現在のContentsを読み込み、trickとindexを設定する
    //どの役にも該当しない場合はtrickおよびindexはnullになる
    readContents(){
        for(key of Object.keys(this.trickSetting)){
            if(this.isSameContents(this.trickSetting[key].contents)){
                this.trick = this.trickSetting[key];
                this.index = key;
                return;
            }
        }
    }

    //現在のContensが該当する役のindexを返す
    //どの役にも該当しない場合はnullを返す
    getIndex(){
        return this.index;
    }

    //現在のContensが該当する役の名前を返す
    //どの役にも該当しない場合はnullを返す
    getTrickName(){
        if(this.trick == null){
            return null;
        }
        return this.trick.trickName;
    }

    //現在のContensが該当する役のPointを返す
    //どの役にも該当しない場合はnullを返す
    getPoint(){
        if(this.trick == null){
            return null;
        }
        return this.trick.point;
    }

    //現在のContentsと指定したContentsが同じであるかどうか判定する
    isSameContents(contents){
        if(this.contents.length != contents.length){
            return false;
        }
        for(let i = 0; i < this.contents.length; i++){
            if(this.contents[i][0]){
                if(contents[i] == null || !contents[i][0]){
                    return false;
                }else{
                    if(this.contents[i][1] != contents[i][1]){
                        return false;
                    }
                }
            }
        }
        return true;
    }

}