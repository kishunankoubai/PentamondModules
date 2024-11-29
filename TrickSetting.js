const tricks = {

    0 : {
        //役の名前
        trickName : "一列揃え(上)",
        //役の基礎点
        point : 10,
        //役の形
        //PlayFieldに設定したwidthに対し、(2 * width - 1)個のBlockの状態を具体的に指定する
        //[visible, direction]で状態を表している
        contents : [[true, true], [true, false], [true, true], [true, false], [true, true], [true, false], [true, true], [true, false], [true, true], [true, false], [true, true], [true, false], [true, true], [true, false], [true, true], [true, false], [true, true]]
    },
    1 : {
        trickName : "一列揃え(下)",
        point : 10,
        contents : [[true, false], [true, true], [true, false], [true, true], [true, false], [true, true], [true, false], [true, true], [true, false], [true, true], [true, false], [true, true], [true, false], [true, true], [true, false], [true, true], [true, false]]
    }

}

export {tricks}