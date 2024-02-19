"use strict";
mp.discord.update('Spielt auf HC-RP.de [ALPHA]', 'Coming soon...');
// Update Hud Color to darkgreen
mp.events.add('testClientEvent', () => {
    mp.game.ui.setHudColour(166, 57, 102, 57, 255);
});
