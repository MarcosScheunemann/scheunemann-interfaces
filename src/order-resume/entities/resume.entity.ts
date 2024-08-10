import { IOrderResume, IOrderResumeGeneralInfo } from '../interfaces';
import { OrderResumeGeneralInfoEntity } from './general-info.entity';

export class ResumeEntity implements IOrderResume {
  // #region Properties (5)

  public four: {
    first: {
      generalInfo: OrderResumeGeneralInfoEntity;
    };
    second: {
      generalInfo: OrderResumeGeneralInfoEntity;
    };
    third: {
      generalInfo: IOrderResumeGeneralInfo;
    };
    fourth: {
      generalInfo: OrderResumeGeneralInfoEntity;
    };
  } = {
    first: {
      generalInfo: new OrderResumeGeneralInfoEntity(),
    },
    second: {
      generalInfo: new OrderResumeGeneralInfoEntity(),
    },
    third: {
      generalInfo: new OrderResumeGeneralInfoEntity(),
    },
    fourth: {
      generalInfo: new OrderResumeGeneralInfoEntity(),
    },
  };
  public id: string = '';
  public one: { generalInfo: OrderResumeGeneralInfoEntity } = {
    generalInfo: new OrderResumeGeneralInfoEntity(),
  };
  public three: {
    first: {
      generalInfo: IOrderResumeGeneralInfo; // #region Constructors (1)
    };
    second: { generalInfo: IOrderResumeGeneralInfo };
    third: { generalInfo: IOrderResumeGeneralInfo };
  } = {
    first: {
      generalInfo: new OrderResumeGeneralInfoEntity(),
    },
    second: {
      generalInfo: new OrderResumeGeneralInfoEntity(),
    },
    third: {
      generalInfo: new OrderResumeGeneralInfoEntity(),
    },
  };
  public two: {
    first: {
      generalInfo: IOrderResumeGeneralInfo;
    };
    second: {
      generalInfo: IOrderResumeGeneralInfo;
    };
  } = {
    first: {
      generalInfo: new OrderResumeGeneralInfoEntity(),
    },
    second: {
      generalInfo: new OrderResumeGeneralInfoEntity(),
    },
  };

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(data?: Partial<ResumeEntity>) {
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
