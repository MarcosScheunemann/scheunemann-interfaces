import { EIntervalType, ICarouselImage, IRating } from '../../general';
import { EOs } from '../../general/enums/os.enum';
import { EPlatform } from '../../general/enums/platform.enum';
import { EAppMode } from '../enums';
import { EAppCategory } from '../enums/app-category.enum';
import { EAppType } from '../enums/app-type.enum';
import { EAppHeaderType } from '../enums/header-type.enum';

export interface IApp {
  // #region Properties (30)

  active: boolean;
  activeInstalls: number;
  /**
   * Indica se permite adicionar a assinatura
   */
  allowAddSubscription: boolean;
  carousel: ICarouselImage[];
  categories: EAppCategory[];
  createdBy: string;
  description: string;
  downloadUrl: string;
  features: string[];
  headerImage: string;
  headerType: EAppHeaderType;
  headerVideo: string;
  isUnique: boolean;
  iconUrl: string;
  allowDefaultDevice: boolean;
  id: string;
  instanceNumberAllowed: number;
  /**
   * Intervalo de tempo para o preço
   * @example
   * 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
   * Para intervalType = MONTHS
   * 1 = 1 mês (mensal)
   *
   */
  interval: number;
  /**
   * Tipo de intervalo para o preço
   * @example
   * Mensal, Semanal, Diário
   */
  intervalType: EIntervalType;
  /**
   * Indica se o app é gratuito ou não
   */
  mode: EAppMode;
  name: string;
  os: EOs[];
  platforms: EPlatform[];
  price: number;
  production: boolean;
  secrets: string;
  ratings: IRating[];
  tags: string[];
  totalInstalls: number;
  trialTime: number;
  type: EAppType;
  versionCode: number;
  versionName: string;

  // #endregion Properties (30)
}
