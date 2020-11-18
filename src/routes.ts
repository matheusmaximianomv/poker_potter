import { Router } from 'express';

import HousesController from './app/controllers/HousesController';
import SearchWizardByHouseController from './app/controllers/SearchWizardByHouseController';
import WizardsController from './app/controllers/WizardsController';

const routes: Router = Router();

routes.get('/', (req, res) => {
  return res.status(200).json({
    name: 'PokePotter',
    description: '',
    version: '1.0.0',
  });
});

routes.get('/houses', HousesController.index);

routes.get('/wizards/houses/:name', SearchWizardByHouseController.index);
routes.get('/wizards/:name', WizardsController.show);

export default routes;
