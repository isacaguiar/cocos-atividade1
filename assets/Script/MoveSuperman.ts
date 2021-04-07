// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class MoveSuperman extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    positionX: number = 0;

    @property
    positionY: number = 0;

    @property
    subir: boolean = true;

    @property
    mover: boolean = true;

    onLoad () {
        this.positionX = this.node.position.x
        this.positionY = this.node.position.y
		
        //this.changeBehavior()
        this.node.on(cc.Node.EventType.TOUCH_START,this.mudar,this);
    }

    start () {
    }

    moveSuperman() {
        this.defineMove()
        if(this.mover) {
            if(this.subir) {
                this.node.setPosition(this.node.position.x + 0.5, this.node.position.y + 0.2);
            } else {
                this.node.setPosition(this.node.position.x - 0.5, this.node.position.y - 0.2);
            }
        }
    }

    defineMove() {
        if(this.node.position.x > this.positionX + 100) {
            this.subir = false
        } else if(this.node.position.x < this.positionX) {
            this.subir = true
        }
    }

    mudar() {
        if(this.mover) {
            this.mover = false
        } else {
            this.mover = true
        }
    }

    changeBehavior() {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function(event) {
            if(this.mover) {
                this.mover = false
            } else {
                this.mover = true
            }
        }, this);
    }

    update (dt) {
		this.moveSuperman()
    }
}