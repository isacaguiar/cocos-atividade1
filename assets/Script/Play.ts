const {ccclass, property} = cc._decorator;

@ccclass
export default class Jogo extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    positionY: number = 0;

    @property
    positionX: number = 0;

    @property
    subir: boolean = true;

    @property
    mover: boolean = true;

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.action, this)
    }

    update() {
    }

    start () {
    }

    moveSupergirl() {
        if(this.mover) {
            if(this.subir) {
                this.node.setPosition(this.node.position.x - 0.3, this.node.position.y + 0.5);
            } else {
                this.node.setPosition(this.node.position.x + 0.3, this.node.position.y - 0.5);
            }
        }
        this.defineMove()
    }

    mudar() {
        if(this.mover) {
            this.mover = false
        } else {
            this.mover = true
        }
    }

    defineMove() {
        if(this.node.position.y >= this.positionY + 100) {
            this.subir = false
        } else if(this.node.position.y < this.positionY) {
            this.subir = true
        }
    }
    update (dt) {
        
        this.moveSupergirl()
        
    }
}
