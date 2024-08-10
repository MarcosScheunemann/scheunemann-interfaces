import { IOrderResumeGeneralInfo } from './i-general-info';

export interface IOrderResume {
  // #region Properties (1)
  id: string;
  four: {
    first: {
      generalInfo: IOrderResumeGeneralInfo;
    };
    second: {
      generalInfo: IOrderResumeGeneralInfo;
    };
    third: {
      generalInfo: IOrderResumeGeneralInfo;
    };
    fourth: {
      generalInfo: IOrderResumeGeneralInfo;
    };
  };
  one: {
    generalInfo: IOrderResumeGeneralInfo;
  };
  three: {
    first: {
      generalInfo: IOrderResumeGeneralInfo;
    };
    second: {
      generalInfo: IOrderResumeGeneralInfo;
    };
    third: {
      generalInfo: IOrderResumeGeneralInfo;
    };
  };
  two: {
    first: {
      generalInfo: IOrderResumeGeneralInfo;
    };
    second: {
      generalInfo: IOrderResumeGeneralInfo;
    };
  };
  // #endregion Properties (1)
}
