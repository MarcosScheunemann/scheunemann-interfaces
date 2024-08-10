import { CarouselImageEntity, EIntervalType, RatingEntity } from '../../general';
import { EOs } from '../../general/enums/os.enum';
import { EPlatform } from '../../general/enums/platform.enum';
import { EAppCategory } from '../enums/app-category.enum';
import { EAppType } from '../enums/app-type.enum';
import { EAppHeaderType } from '../enums/header-type.enum';
import { EAppMode } from '../enums/mode.enum';
import { IApp } from '../interfaces/i-app';

export class AppEntity implements IApp {
  // #region Properties (33)

  public active: boolean = false;
  public activeInstalls: number = 0;
  /**
   * Indica se permite adicionar a assinatura
   */
  public allowAddSubscription: boolean = false;
  public allowDefaultDevice: boolean = false;
  public carousel: CarouselImageEntity[] = [];
  public categories: EAppCategory[] = [];
  public createdBy: string = '';
  public description: string = '';
  public downloadUrl: string = '';
  public features: string[] = [];
  public headerImage: string = '';
  public headerType: EAppHeaderType = EAppHeaderType.IMAGE;
  public headerVideo: string = '';
  public iconUrl: string = '';
  public id: string = '';
  public instanceNumberAllowed: number = 1;
  /**
   * Intervalo de tempo para o preço
   * @example
   * 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
   * Para intervalType = MONTHS
   * 1 = 1 mês (mensal)
   *
   */
  public interval: number = 0;
  /**
   * Tipo de intervalo para o preço
   * @example
   * Mensal, Semanal, Diário
   */
  public intervalType: EIntervalType = EIntervalType.MONTHS;
  public isUnique: boolean = false;
  public mode: EAppMode = EAppMode.NONE;
  public name: string = '';
  /**
   * Indica se o app é gratuito ou não
   */
  public os: EOs[] = [];
  public platforms: EPlatform[] = [];
  public price: number = 0;
  public production: boolean = false;
  public ratings: RatingEntity[] = [];
  public secrets: string = '';
  public tags: string[] = [];
  public totalInstalls: number = 0;
  public trialTime = 0;
  public type: EAppType = EAppType.FREE;
  public versionCode: number = 1;
  public versionName: string = '';

  // #endregion Properties (33)

  // #region Constructors (1)

  constructor(data?: Partial<AppEntity>) {
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
