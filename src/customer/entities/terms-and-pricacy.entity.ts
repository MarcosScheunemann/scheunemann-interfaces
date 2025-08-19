import { ITermsAndPrivacy } from "../interfaces/i-terms-and-privacy";

export class TermsAndPrivacyEntity implements ITermsAndPrivacy {
  public acceptedTerms: boolean = false;
  public acceptedTermsAt: Date | null = null;
  public acceptedPrivacy: boolean = false;
  public acceptedPrivacyAt: Date | null = null;

  constructor(data?: Partial<TermsAndPrivacyEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
