class PlayPanel{

    /*
    PlayPanelは、要素としてのplayPanelの高さに合わせて、その内部にPlayField、nextPanel、holdPanelなどを
    いい感じに配置する
    横幅は一切考慮しない
    */

    //このPlayPanelが管理するPlayField
    pf;

    //ElementとしてのPlayPanel
    playPanel;
    //playFieldのBase
    playFieldBase;
    //mondの状態を知らせる用のPanel
    //nextInfoPanelとholdInfoPanelが表示される
    mondInfoPanel
    //nextLabelとnextPanelが表示される
    nextInfoPanel
    //holdLabelとholdPanelが表示される
    holdInfoPanel
    //nextPanelのbaseの配列
    nextPanels;
    //holdPanelのbase
    holdPanel;
    //nextという文字を表示する用のLabel
    nextLabel;
    //holdという文字を表示する用のLabel
    holdLabel;
    //実際に表示するnextの数
    next = 4;

    constructor(setting){
        //PlayFieldおよびnextPanel、holdPanelを表示するPlayPanelを作成する
        this.playPanel = document.createElement("div");
        this.playPanel.className = "playPanel";

        //PlayFieldを作成する
        this.pf = new PlayField(setting);
        this.playFieldBase = this.pf.getBase();
        this.playPanel.appendChild(this.playFieldBase);

        //mondInfoPanelを作成する
        //nextInfoPanelとholdInfoPanelを表示する用のPanel
        this.mondInfoPanel = document.createElement("div");
        this.mondInfoPanel.className = "mondInfoPanel";
        this.playPanel.appendChild(this.mondInfoPanel);

        //holdInfoPanelを作成する
        //holdLabelとholdPanelを表示する用のPanel
        this.holdInfoPanel = document.createElement("div");
        this.holdInfoPanel.className = "holdInfoPanel";
        this.mondInfoPanel.appendChild(this.holdInfoPanel);

        //holdという文字を表示するLabelを作成する
        this.holdLabel = document.createElement("div");
        this.holdLabel.className = "mondInfoLabel holdLabel";
        this.holdLabel.innerHTML = "HOLD";
        this.holdInfoPanel.appendChild(this.holdLabel);

        //holdPanelを取得する
        this.holdPanel = this.pf.getMondOperator().getHoldPanelBase();
        this.holdInfoPanel.appendChild(this.holdPanel);

        //nextInfoPanelを作成する
        //nextLabelとnextPanelを表示する用のPanel
        this.nextInfoPanel = document.createElement("div");
        this.nextInfoPanel.className = "nextInfoPanel";
        this.mondInfoPanel.appendChild(this.nextInfoPanel);

        //nextという文字を表示するLabelを作成する
        this.nextLabel = document.createElement("div");
        this.nextLabel.className = "mondInfoLabel nextLabel";
        this.nextLabel.innerText = "NEXT";
        this.nextInfoPanel.appendChild(this.nextLabel);
    
        //nextPanelを取得する    
        this.nextPanels = this.pf.getMondOperator().nextPanels.map((np) => (np.getBase()));
        for(let i = 0; i < this.next; i++){
            this.nextInfoPanel.appendChild(this.nextPanels[i]);
        }
    }

    //このPlayPanelを取得する
    getPlayPanel(){
        return this.playPanel;
    }

    setID(id){
        this.playPanel.id = id;
    }

    //表示を最適化する
    //DOMに追加した後、サイズ変更があった場合などはこれを呼ばないと解像度が落ちたり表示が乱れる
    //setSizeも自動的に実行する
    adjustPlayPanel(){
        this.pf.adjustPlayField();
        this.setSize();
    }

    //PlayPanel内の一部の要素を他の要素のサイズに追従させる
    //DOMに追加した後、サイズ変更があった場合などはこれを呼ばないとレイアウトが崩れる
    setSize(){
        this.holdInfoPanel.style.width = this.playFieldBase.clientHeight / 5 + "px";
        for(const label of document.getElementsByClassName("mondInfoLabel")){
            label.style.fontSize = this.playFieldBase.clientHeight / 30 + "px";
        }
    }

}