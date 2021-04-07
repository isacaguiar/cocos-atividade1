let jogador = cc.Class({

    extends: cc.Component,

    properties: {
        direcao: cc.Vec2,
    },

    onLoad : function(){
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.teclaPressionada, this)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.teclaSolta, this)
    },

    update : function(dt) {
        this.node.position = this.node.position.add(this.direcao);
    },

    teclaPressionada : function(event){
        if(event.keyCode == cc.macro.KEY.a){
            this.direcao.x = -1;
        }
        if(event.keyCode == cc.macro.KEY.d){
            this.direcao.x = 1;
        }
        if(event.keyCode == cc.macro.KEY.w){
            this.direcao.y = 1;
        }
        if(event.keyCode == cc.macro.KEY.s){
            this.direcao.y = -1;
        }

    },

    teclaSolta : function(event){
        
        if(event.keyCode == cc.macro.KEY.a){
            this.direcao.x = 0;
        }
        if(event.keyCode == cc.macro.KEY.d){
            this.direcao.x = 0;
        }
        if(event.keyCode == cc.macro.KEY.w){
            this.direcao.y = 0;
        }
        if(event.keyCode == cc.macro.KEY.s){
            this.direcao.y = 0;
        }
    }
});

module.exports = jogador;