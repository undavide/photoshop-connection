/*
 *
 *  Photoshop-Connection
 *  Node.js module for connecting to Adobe Photoshop Server.
 *  Author: Antonio Gomez (https://github.com/antonio-gomez)
 *
 *
 *  @link https://github.com/antonio-gomez/photoshop-connection
 *  @version v1.0.0
 *  @license MIT
 *
 */

'use strict'

import { PhotoshopClient } from './lib/PhotoshopClient'

class Photoshop {
    constructor() {
        //
    }

    createClient(options, connectListener, logger) {
		const photoshopClient = new PhotoshopClient(options, connectListener, logger)

		return new Promise((resolve, reject) => {
			photoshopClient.connectToPhotoshop()
				.then((photoshopClient) => {
					resolve(photoshopClient)
				})
				.catch((err) => {
					reject(err)
				})
		})
    }
}

export let photoshop = new Photoshop()
module.exports = new Photoshop()
