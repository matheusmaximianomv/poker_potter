import { Request, Response } from 'express';

import apiWizard from '../../services/wizard';

import IWizard from '../models/IWizard';

class SearchWizardByHouseController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { name } = req.params;

    const { data } = await apiWizard.get<IWizard[]>(
      `/house/${name.toLowerCase()}`
    );

    return res.status(200).json(data);
  }
}

export default new SearchWizardByHouseController();
