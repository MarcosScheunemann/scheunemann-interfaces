import { IPaymentMethod } from '../../general';

export interface IPayment {
  // #region Properties (3)

  methods: IPaymentMethod[];
  pending: number;
  prepaid: number;

  // #endregion Properties (3)
}
