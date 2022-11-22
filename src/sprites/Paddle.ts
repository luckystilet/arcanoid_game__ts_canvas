import {Vector} from '../types'

export class Paddle {
	private paddleImage: HTMLImageElement = new Image()
	moveLeft: boolean = false
	moveRight: boolean = false
	
	constructor(
		private speed: number,
		private paddleWidth: number,
		private paddleHeight: number,
		private position: Vector,
		image: string
	) {
		this.paddleImage.src = image
		document.addEventListener('keydown', this.handleKeyDown)
		document.addEventListener('keyup', this.handleKeyUp)
	}
	// Getters
	get height(): number {
		return this.paddleHeight
	}
	get width(): number {
		return this.paddleWidth
	}
	get pos(): Vector {
		return this.position
	}
	get image(): HTMLImageElement {
		return this.paddleImage
	}
	get isMovingLeft(): boolean {
		return this.moveLeft
	}
	get isMovingRight(): boolean {
		return this.moveRight
	}
	movePaddle(): void {
		if (this.moveLeft) this.pos.x -= this.speed
		if (this.moveRight) this.pos.x += this.speed
	}
	handleKeyDown = (e: KeyboardEvent): void => {
		if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft') this.moveLeft = true
		if (e.code === 'ArrowRight' || e.key === 'ArrowRight') this.moveRight = true
	}
	
	handleKeyUp = (e: KeyboardEvent): void => {
		if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft') this.moveLeft = false
		if (e.code === 'ArrowRight' || e.key === 'ArrowRight') this.moveRight = false
	}
}
