

import {card_data} from './data/card_data.js';


export default function handler(req, res) {
    res.status(200).json(card_data);

  }