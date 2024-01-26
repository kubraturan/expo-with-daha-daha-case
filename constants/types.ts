export interface INavigation {
  navigate: (route: string, params?: any) => void;
}

export interface ITag {
  IconUrl: string;
  Id: number;
  Name: string;
  Rank: number;
}

interface PromotionDetailItem {
  Title: string;
  Description: string;
  ImageUrl: string;
}

interface PromotionDetailArea {
  Title: string;
  Description: string;
  OpenedIconUrl: string;
  ClosedIconUrl: string;
  UseMapButton: boolean;
  PromotionDetailItems: PromotionDetailItem[];
}

interface PromotionGallery {
  DocumentUrl: string;
  DocumentType: string;
  CoverImageUrl: string;
}

export interface IPromotionItem {
  BrandIconColor: string;
  BrandIconUrl: string;
  BrandPromotionCardParticipationText: string;
  Description?: string;
  EndDate?: string;
  PromotionCardColor?: string;
  Id: number;
  ImageUrl: string;
  CountryTimeZone: number;
  RemainingText: string;
  StartDate: string;
  Title: string;
  Type: string;
  ScenarioType: string;
  SeoName: string;
  Unavailable: boolean;
  IsMapAvailable: boolean;
  Unvisible: boolean;
  DetailButtonText: string;
  ListButtonText: string | null;
  LuckyDayText: string;
  LuckyDayTextColor: string | null;
  LuckyDayBackgroundColor: string | null;
  PromotionDetailItemAreas?: PromotionDetailArea[];
  ListButtonTextBackGroudColor?: string;
  CardType?: string;
  ExternalUrl?: string;
  IsLuckyDay?: boolean;
  Contents?: any[];
  PromotionTags?: any[];
  PromotionGalleries?: PromotionGallery[];
  NextFlowConfigurations?: any;
  GameWin?: any;
}

export type TagsResponse = ITag[];

export type PromotionListResponse = IPromotionItem[];

export type TabName = 'moreWallet' | 'discover' | 'portal';
