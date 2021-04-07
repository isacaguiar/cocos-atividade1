cc.Class({    
    extends: cc.Component,
    
    properties: {
        direcao: cc.Vec2,
        type: cc.Prefab,
    },

    onLoad : function(){
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.action, this)
    },


    update : function(dt) {
        var poder = this.node.getChildByName("poder")
        var supergirl = this.node.getChildByName("supergirl")
            
            console.log('88888888888 ******************* 8888888888888888')
    },

    action : function(event) {
        if(event.keyCode == cc.macro.KEY.space){
            this.poder()
        }
    },

    poder: function() {
        var poder = this.node.getChildByName("poder")
        var supergirl = this.node.getChildByName("supergirl")
        
        poder.runAction(cc.moveTo(0, supergirl.getPosition()))
        poder.runAction(cc.moveTo(2, 80, 80))
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
        componenteTiro.direcao = this.direcao;
        */
    },
    
});
