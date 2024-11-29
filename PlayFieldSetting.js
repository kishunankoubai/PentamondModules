const setting = {

    //プレイ画面の縦幅、横幅
    width : 9,
    height : 20,
    //表示されない上部のプレイ領域
    hiddenHeight : 18,
    //hiddenHeightをどれだけ見せるか
    displayMargin : 0.5,
    //プレイ画面の解像度　1が通常　値を大きくすればいいというものでもない
    resolution : 2,
    //プレイ画面の背景色
    canvasColor : "#111111",
    //縦グリッドの線の幅
    verticalGridWidth : 2,
    //縦グリッドの線の色
    verticalGridColor : "#444444",
    //横グリッドの線の幅
    holizontalGridWidth : 0,
    //横グリッドの線の色
    holizontalGridColor : "#444444",
    //モンドの縁の線の幅
    mondBorderWidth : 2,
    //モンドの縁の線の色
    mondBorderColor : "#888888",
    //モンドの縁の線の色
    ghostMondBorderColor : "#444444",
    //モンド出現の初期位置
    initialX : 4,
    initialY : 20,
    //モンドの色
    mondColor : {
        neutral : "#AAAAAA",
        L : "#FF0000",
        J : "#FA7800",
        p : "#FFFF00",
        q : "#00FF00",
        U : "#0000FF",
        I : "#880088",
    },
    //ゴースト化したモンドの色
    ghostMondColor : {
        neutral : "#AAAAAA",
        L : "#440000",
        J : "#3E1E00",
        p : "#444400",
        q : "#004400",
        U : "#000044",
        I : "#220022",
    },
    //MondPanelを生成するか
    createMondPanels : true,
    
}

export {setting};