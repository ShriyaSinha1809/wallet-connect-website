// src/game/gameInitialization.js
import { Player } from '../game/js/classes/Player';
import { Sprite } from '../game/js/classes/Sprite';
import { parse2D, createObjectsFrom2D } from '../game/js/utils'; // Assuming utils exports these
import { collisionsLevel1, collisionsLevel2, collisionsLevel3 } from '../game/js/data/collisions';

export function initializeGame(canvas, context) {
    canvas.width = 1024;  // Adjust as necessary
    canvas.height = 576;  // Adjust as necessary

    const player = new Player({
        imageSrc: 'src/game/img/king/idle.png',
        frameRate: 11,
        animations: {
            idleRight: {
                frameRate: 11,
                frameBuffer: 2,
                loop: true,
                imageSrc: 'src/game/img/king/idle.png',
            },
            // Add other animations as necessary
        },
    });

    let levels = {
        1: {
            init: () => {
                const parsedCollisions = parse2D(collisionsLevel1);
                const collisionBlocks = createObjectsFrom2D(parsedCollisions);
                player.collisionBlocks = collisionBlocks;

                // Initialize background and doors as needed
            },
            // Initialize other levels similarly
        },
    };

    function animate() {
        requestAnimationFrame(animate);
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Drawing and updating logic here
        player.draw(context);
        player.update();
    }

    levels[1].init();  // Start with level 1 for example
    animate();  // Start the game loop
}
