import Phaser from 'phaser';
import InputTextPlugin from 'phaser3-rex-plugins/plugins/inputtext-plugin';
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';
import WebFontLoaderPlugin from 'phaser3-rex-plugins/plugins/webfontloader-plugin';
import ConfigScene from './scenes/config';
import GameScene from './scenes/game';
import SplashScene from './scenes/splash';
import { PALETTE } from './colors';

const config = {
    title: 'Mastermind Phaser',
    url: 'https://julienduchesne.github.io/mastermind-phaser/',

    type: Phaser.AUTO,
    backgroundColor: PALETTE.background,
    disableContextMenu: true,
    dom: {
        createContainer: false,
    },
    plugins: {
        global: [
            {
                key: 'rexInputTextPlugin',
                plugin: InputTextPlugin,
                start: true,
            },
            {
                key: 'rexWebFontLoader',
                plugin: WebFontLoaderPlugin,
                start: true,
            },
        ],
        scene: [
            {
                key: 'rexUI',
                plugin: UIPlugin,
                mapping: 'rexUI',
            },
        ],
    },
    scale: {
        parent: 'mastermind',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 900,
        height: 900,
    },
    scene: [SplashScene, ConfigScene, GameScene],
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
