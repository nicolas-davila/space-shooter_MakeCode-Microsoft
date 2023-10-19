controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 . 4 . 5 5 . . . . 
        . . . . . 5 . . 4 . . 5 . . . . 
        . . . . 5 . . . 4 . . . 5 . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, MyPlayer, 0, -100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(Enemies)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let Enemies: Sprite = null
let projectile: Sprite = null
let MyPlayer: Sprite = null
effects.starField.startScreenEffect()
MyPlayer = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . f f 2 f f . . . . . 
    . . . . . f f 2 9 2 f f . . . . 
    . . . . f 2 2 2 9 2 2 2 f . . . 
    . . . f 2 2 2 9 9 9 2 2 2 f . . 
    . . f 5 2 2 9 2 9 2 9 2 2 5 f . 
    . . . f 2 2 2 2 9 2 2 2 2 f . . 
    . . . . f f 2 2 2 2 2 f f . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . 8 4 8 4 8 . . . . . 
    . . . . . . 8 4 4 4 8 . . . . . 
    . . . . . . . 8 4 8 . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(MyPlayer)
MyPlayer.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    Enemies = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f f f 1 f f . . . . 
        . . . . f f f f f f f f f . . . 
        . . f f f f f 1 1 1 f f f f . . 
        . . f 1 1 f f f 1 1 1 f f f . . 
        . f f 1 f f f f f 1 1 f f 1 f . 
        . f f f f f f f f f f f f 1 f . 
        . f f f 1 1 1 f f f f f f f f . 
        . f f f 1 1 f f f f 1 1 f f f . 
        . . f f f f f f f f f 1 1 f f . 
        . . f f f f f f f f f f f f f . 
        . . . f f 1 f f 1 1 f f f f . . 
        . . . . f f f f f f f f f . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Enemies.y = 0
    Enemies.setVelocity(0, 80)
    Enemies.x = randint(10, scene.screenWidth() - 5)
})
