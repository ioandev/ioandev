export interface Wordpress {
    posts:        readonly Post[];
    popularPosts: readonly PopularPost[];
}

export interface PopularPost {
    title:     string;
    slug:      string;
    pageviews: string;
}

export interface ContentJson {
  name:       string;
  data:       string;
  attribs:    Object;
  children:   ContentJson[];
}

export interface Post {
    title:      string;
    html:       string;
    slug:       string;
    thumbnails: Thumbnail[];
    created_at: Date;
    isPost:     Boolean;
    json:       ContentJson;
    excerpt:    string;
    tags:       string[];
    img?:       string;
    img_alt?:   string;
    link:       string;
}

export interface Thumbnail {
    caption: string;
    details: Details;
}

export interface Details {
    thumbnail:    ThumbnailDetails;
    medium:       ThumbnailDetails;
    medium_large: ThumbnailDetails;
    full:         ThumbnailDetails;
}

export interface ThumbnailDetails {
    url:   string;
    width: number;
}

export interface WordpressState {
    wordpress?: Wordpress;
    error: boolean;
    loading: boolean;
    pageType: string;
}


