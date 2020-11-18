import { Request, Response } from 'express';

import Houses from '../database/houses';

class HousesController {
  public index(req: Request, res: Response): Response {
    const houses = Houses.getHouses();

    return res.status(200).json(houses);
  }
}

export default new HousesController();
