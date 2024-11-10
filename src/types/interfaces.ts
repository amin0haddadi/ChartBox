export interface ICoinData {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  asset_platform_id: null;
  platforms: IPlatforms;
  detail_platforms: IDetailplatforms;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  preview_listing: boolean;
  public_notice: null;
  additional_notices: undefined[];
  localization: ILocalization;
  description: ILocalization;
  links: ILinks;
  image: IImage;
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  watchlist_portfolio_users: number;
  market_cap_rank: number;
  market_data: IMarketdata;
  community_data: ICommunitydata;
  developer_data: IDeveloperdata;
  status_updates: undefined[];
  last_updated: string;
  tickers: ITicker[];
}

export interface ITicker {
  base: string;
  target: string;
  market: IMarket;
  last: number;
  volume: number;
  converted_last: IConvertedlast;
  converted_volume: IConvertedlast;
  trust_score: string;
  bid_ask_spread_percentage: number;
  timestamp: string;
  last_traded_at: string;
  last_fetch_at: string;
  is_anomaly: boolean;
  is_stale: boolean;
  trade_url: null | string;
  token_info_url: null;
  coin_id: string;
  target_coin_id?: string;
}

export interface IConvertedlast {
  btc: number;
  eth: number;
  usd: number;
}

export interface IMarket {
  name: string;
  identifier: string;
  has_trading_incentive: boolean;
}

export interface IDeveloperdata {
  forks: number;
  stars: number;
  subscribers: number;
  total_issues: number;
  closed_issues: number;
  pull_requests_merged: number;
  pull_request_contributors: number;
  code_additions_deletions_4_weeks: ICodeadditionsdeletions4weeks;
  commit_count_4_weeks: number;
  last_4_weeks_commit_activity_series: undefined[];
}

export interface ICodeadditionsdeletions4weeks {
  additions: number;
  deletions: number;
}

export interface ICommunitydata {
  facebook_likes: null;
  twitter_followers: number;
  reddit_average_posts_48h: number;
  reddit_average_comments_48h: number;
  reddit_subscribers: number;
  reddit_accounts_active_48h: number;
  telegram_channel_user_count: null;
}

export interface IMarketdata {
  current_price: ICurrentprice;
  total_value_locked: null;
  mcap_to_tvl_ratio: null;
  fdv_to_tvl_ratio: null;
  roi: null;
  ath: ICurrentprice;
  ath_change_percentage: ICurrentprice;
  ath_date: IAthdate;
  atl: ICurrentprice;
  atl_change_percentage: ICurrentprice;
  atl_date: IAthdate;
  market_cap: ICurrentprice;
  market_cap_rank: number;
  fully_diluted_valuation: ICurrentprice;
  market_cap_fdv_ratio: number;
  total_volume: ICurrentprice;
  high_24h: ICurrentprice;
  low_24h: ICurrentprice;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_14d: number;
  price_change_percentage_30d: number;
  price_change_percentage_60d: number;
  price_change_percentage_200d: number;
  price_change_percentage_1y: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  price_change_24h_in_currency: ICurrentprice;
  price_change_percentage_1h_in_currency: ICurrentprice;
  price_change_percentage_24h_in_currency: ICurrentprice;
  price_change_percentage_7d_in_currency: ICurrentprice;
  price_change_percentage_14d_in_currency: ICurrentprice;
  price_change_percentage_30d_in_currency: ICurrentprice;
  price_change_percentage_60d_in_currency: ICurrentprice;
  price_change_percentage_200d_in_currency: ICurrentprice;
  price_change_percentage_1y_in_currency: ICurrentprice;
  market_cap_change_24h_in_currency: ICurrentprice;
  market_cap_change_percentage_24h_in_currency: ICurrentprice;
  total_supply: number;
  max_supply: number;
  circulating_supply: number;
  last_updated: string;
}

export interface IAthdate {
  aed: string;
  ars: string;
  aud: string;
  bch: string;
  bdt: string;
  bhd: string;
  bmd: string;
  bnb: string;
  brl: string;
  btc: string;
  cad: string;
  chf: string;
  clp: string;
  cny: string;
  czk: string;
  dkk: string;
  dot: string;
  eos: string;
  eth: string;
  eur: string;
  gbp: string;
  gel: string;
  hkd: string;
  huf: string;
  idr: string;
  ils: string;
  inr: string;
  jpy: string;
  krw: string;
  kwd: string;
  lkr: string;
  ltc: string;
  mmk: string;
  mxn: string;
  myr: string;
  ngn: string;
  nok: string;
  nzd: string;
  php: string;
  pkr: string;
  pln: string;
  rub: string;
  sar: string;
  sek: string;
  sgd: string;
  thb: string;
  try: string;
  twd: string;
  uah: string;
  usd: string;
  vef: string;
  vnd: string;
  xag: string;
  xau: string;
  xdr: string;
  xlm: string;
  xrp: string;
  yfi: string;
  zar: string;
  bits: string;
  link: string;
  sats: string;
}

export interface ICurrentprice {
  aed: number;
  ars: number;
  aud: number;
  bch: number;
  bdt: number;
  bhd: number;
  bmd: number;
  bnb: number;
  brl: number;
  btc: number;
  cad: number;
  chf: number;
  clp: number;
  cny: number;
  czk: number;
  dkk: number;
  dot: number;
  eos: number;
  eth: number;
  eur: number;
  gbp: number;
  gel: number;
  hkd: number;
  huf: number;
  idr: number;
  ils: number;
  inr: number;
  jpy: number;
  krw: number;
  kwd: number;
  lkr: number;
  ltc: number;
  mmk: number;
  mxn: number;
  myr: number;
  ngn: number;
  nok: number;
  nzd: number;
  php: number;
  pkr: number;
  pln: number;
  rub: number;
  sar: number;
  sek: number;
  sgd: number;
  thb: number;
  try: number;
  twd: number;
  uah: number;
  usd: number;
  vef: number;
  vnd: number;
  xag: number;
  xau: number;
  xdr: number;
  xlm: number;
  xrp: number;
  yfi: number;
  zar: number;
  bits: number;
  link: number;
  sats: number;
}

export interface IImage {
  thumb: string;
  small: string;
  large: string;
}

export interface ILinks {
  homepage: string[];
  whitepaper: string;
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  twitter_screen_name: string;
  facebook_username: string;
  bitcointalk_thread_identifier: null;
  telegram_channel_identifier: string;
  subreddit_url: string;
  repos_url: IReposurl;
}

export interface IReposurl {
  github: string[];
  bitbucket: undefined[];
}

export interface ILocalization {
  en: string;
  de: string;
  es: string;
  fr: string;
  it: string;
  pl: string;
  ro: string;
  hu: string;
  nl: string;
  pt: string;
  sv: string;
  vi: string;
  tr: string;
  ru: string;
  ja: string;
  zh: string;
  "zh-tw": string;
  ko: string;
  ar: string;
  th: string;
  id: string;
  cs: string;
  da: string;
  el: string;
  hi: string;
  no: string;
  sk: string;
  uk: string;
  he: string;
  fi: string;
  bg: string;
  hr: string;
  lt: string;
  sl: string;
}

export interface IDetailplatforms {
  "": _;
}

export interface _ {
  decimal_place: null;
  contract_address: string;
}

export interface IPlatforms {
  "": string;
}