import express from 'express';
import {imageController} from '../Controller/imageController.js';

const routes = express.Router();

routes.get('/image-url' ,imageController);

export default routes;