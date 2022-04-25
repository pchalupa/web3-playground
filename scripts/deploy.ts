import { deploy as deployHello } from './deploy-hello';
import { deploy as deployCounter } from './deploy-counter';

const DEPLOYMENTS = [deployHello, deployCounter];

(async () => {
	DEPLOYMENTS.forEach(async (deployment) => await deployment());
})();
