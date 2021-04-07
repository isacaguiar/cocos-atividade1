cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },

        direcao: cc.Vec2,
        velocidade: 10,
    },

    update: function(dt) {
    	let deslocamento = this.direcao.mul(this.velocidade * dt);
    	this.node.position = this.node.position.add(deslocamento);
    },

    onLoad: function() {
    	this.direcao = this.direcao.normalize();
    },

    onCollisionEnter: function(outro, eu) {
        let superheroi = outro.getComponent("superheroi");
    },
});