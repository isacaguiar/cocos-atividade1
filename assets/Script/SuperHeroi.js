let jogador = require("Jogador");

cc.Class({    
    extends: jogador,
    
    properties: {
        direcao: cc.Vec2,
    },

    onLoad : function(){
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.mover, this)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.teclaSolta, this)
    },

    update : function(dt) {
        this.node.position = this.node.position.add(this.direcao);
    },

    mover : function(event) {
        this.teclaPressionada(event)
        if(event.keyCode == cc.macro.KEY.space){
            this.poder()
        }
    },

    poder: function() {
        var poder = cc.find("poder")
        console.log(poder)

        console.log("Node: "+this.node.getChildByName("poder"))
        console.log(this.getComponent("poder"))
/*
        var posicao = this.getPosition()
        //var action =  cc.moveTo(3,posicao)
        var action =  cc.moveTo(3,-10,-10)
        poder.runAction(action)
*/
        /*
        let disparo = cc.instantiate(this.poderPrefab);
        disparo.parent = this.node.parent;
        disparo.position = this.node.position;
        disparo.group = this.node.group;

        let componenteTiro = disparo.getComponent("tiro");
        componenteTiro.direcao = this.direcao;*/
    },
    
});
