import { ScientificRoutingModule } from './scientific-routing.module';

describe('ScientificRoutingModule', () => {
  let scientificRoutingModule: ScientificRoutingModule;

  beforeEach(() => {
    scientificRoutingModule = new ScientificRoutingModule();
  });

  it('should create an instance', () => {
    expect(scientificRoutingModule).toBeTruthy();
  });
});
