export interface Cart {
  id: number;
  title: string;
  price: number;
  image: string;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  code: string;
  price: GuaranteePrice;
  discount_price_type: null;
  price_unit_title: string;
  guarantee_price: GuaranteePrice;
  price_with_guarantee: GuaranteePrice;
  quantity: number;
  brand_id: number;
  brand: Brand;
  deliverable: boolean;
  is_second_hand: boolean;
  unavailable_message: string;
  date: Date;
  is_new: boolean;
  duration: number;
  tag_list: string[];
  visit_count: number;
  short_description: string;
  keyword: string;
  media_id: number;
  media: Media;
  secondary_media_id: number;
  secondary_media: Media;
  symbol_media_id: null;
  symbol_media: null;
  review_count: number;
  rate: number;
  like_count: number;
  category: Category;
  rank: number;
  seo: SEO;
  object_name: string;
}

export interface Brand {
  id: number;
  global_title: string;
  title: string;
  small_media: Media;
  large_media: null;
  object_name: string;
}

export interface Media {
  id: number;
  path: string;
  thumbnail_path: string;
  size: number;
  title: string;
  description: string;
  link: string;
  width: number;
  height: number;
  type: string;
  object_name: string;
}

export interface Category {
  id: number;
  title: string;
  description: string;
  module_id: number;
  parent_id: number;
  priority: number;
  image_path: string;
  date: Date;
  member_id: number;
  media_id: null;
  object_name: string;
}

export interface GuaranteePrice {
  price: number;
  was_price: number;
  you_save_percent: number;
  you_save: number;
  tax: null;
  object_name: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords: string;
  url_keywords: string;
  page_url: string;
}
