import { SponsorshipValueEntity } from '../../general/entities/sponsorship-value.entity';

export class OrderBenefitsEntity {
  // #region Properties (6)

  public description: string = '';
  public id: string = '';
  public sponsorshipValues: SponsorshipValueEntity[] = [];
  public target: string = '';
  public targetId: string = '';
  public value: number = 0;

  // #endregion Properties (6)

  // #region Constructors (1)

  constructor(data?: Partial<OrderBenefitsEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
