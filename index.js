class SignalQub {
  constructor({ apiKey }) {
    if (!apiKey) throw new Error("SignalQub SDK: apiKey is required.");
    this.apiKey = apiKey;
    this.baseUrl = "https://api.signalqub.com/v1";
  }

  async _request(endpoint, params = {}) {
    const url = new URL(this.baseUrl + endpoint);
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined && params[key] !== null) {
        url.searchParams.append(key, params[key]);
      }
    });

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'x-api-key': this.apiKey,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`SignalQub API Error (${response.status}): ${errorText}`);
    }
    return response.json();
  }

  // ==========================================
  // SIGNALQUB PLATFORM ENDPOINTS
  // ==========================================

  zillow = {
    search: (params) => this._request('/zillow/search', params),
    item: (params) => this._request('/zillow/item', params)
  };

  youtube = {
    channel: (params) => this._request('/youtube/channel', params),
    channelVideos: (params) => this._request('/youtube/channel/videos', params),
    channelPlaylists: (params) => this._request('/youtube/channel/playlists', params),
    channelCommunityPosts: (params) => this._request('/youtube/channel/community-posts', params),
    channelShorts: (params) => this._request('/youtube/channel/shorts', params),
    channelLives: (params) => this._request('/youtube/channel/lives', params),
    video: (params) => this._request('/youtube/video', params),
    transcript: (params) => this._request('/youtube/transcript', params),
    search: (params) => this._request('/youtube/search', params),
    videoComments: (params) => this._request('/youtube/video/comments', params)
  };

  yellowpages = {
    search: (params) => this._request('/yellowpages/search', params)
  };

  twitter = {
    profile: (params) => this._request('/twitter/profile', params),
    profileTweets: (params) => this._request('/twitter/profile/tweets', params),
    tweet: (params) => this._request('/twitter/tweet', params),
    transcript: (params) => this._request('/twitter/tweet/transcript', params),
    community: (params) => this._request('/twitter/community', params),
    communityTweets: (params) => this._request('/twitter/community/tweets', params)
  };

  trustpilot = {
    search: (params) => this._request('/trustpilot/search', params),
    reviews: (params) => this._request('/trustpilot/reviews', params)
  };

  tiktokShop = {
    search: (params) => this._request('/tiktok/shop/search', params),
    products: (params) => this._request('/tiktok/shop/products', params),
    product: (params) => this._request('/tiktok/product', params),
    productReviews: (params) => this._request('/tiktok/shop/product/reviews', params)
  };

  tiktok = {
    profile: (params) => this._request('/tiktok/profile', params),
    profileRegion: (params) => this._request('/tiktok/profile/region', params),
    collectionVideos: (params) => this._request('/tiktok/collection/videos', params),
    profileVideos: (params) => this._request('/tiktok/profile/videos', params),
    video: (params) => this._request('/tiktok/video', params),
    videoTranscript: (params) => this._request('/tiktok/video/transcript', params),
    userLive: (params) => this._request('/tiktok/user/live', params),
    videoComments: (params) => this._request('/tiktok/video/comments', params),
    userFollowing: (params) => this._request('/tiktok/user/following', params),
    userFollowers: (params) => this._request('/tiktok/user/followers', params),
    searchUsers: (params) => this._request('/tiktok/search/users', params),
    searchKeyword: (params) => this._request('/tiktok/search/keyword', params)
  };

  reddit = {
    subredditDetails: (params) => this._request('/reddit/subreddit/details', params),
    subredditPosts: (params) => this._request('/reddit/subreddit/posts', params),
    subredditSearch: (params) => this._request('/reddit/subreddit/search', params),
    postComments: (params) => this._request('/reddit/post/comments', params),
    search: (params) => this._request('/reddit/search', params)
  };

  linkedin = {
    profile: (params) => this._request('/linkedin/profile', params),
    company: (params) => this._request('/linkedin/company', params),
    companyPosts: (params) => this._request('/linkedin/company/posts', params),
    searchPosts: (params) => this._request('/linkedin/search/posts', params),
    post: (params) => this._request('/linkedin/post', params)
  };

  linkedinAds = {
    search: (params) => this._request('/linkedin/ads/search', params)
  };

  instagram = {
    profile: (params) => this._request('/instagram/profile', params),
    userPosts: (params) => this._request('/instagram/user/posts', params),
    post: (params) => this._request('/instagram/post', params),
    userHighlights: (params) => this._request('/instagram/user/highlights', params),
    transcript: (params) => this._request('/instagram/transcript', params),
    search: (params) => this._request('/instagram/search', params),
    userTaggedPosts: (params) => this._request('/instagram/user/tagged-posts', params),
    postComments: (params) => this._request('/instagram/post/comments', params)
  };

  google = {
    search: (params) => this._request('/google/search', params)
  };

  gmaps = {
    search: (params) => this._request('/gmaps/search', params),
    reviews: (params) => this._request('/gmaps/reviews', params)
  };

  facebook = {
    profile: (params) => this._request('/facebook/profile', params),
    profileReels: (params) => this._request('/facebook/profile/reels', params),
    profilePhotos: (params) => this._request('/facebook/profile/photos', params),
    profilePosts: (params) => this._request('/facebook/profile/posts', params),
    profileEvents: (params) => this._request('/facebook/profile/events', params),
    postTranscript: (params) => this._request('/facebook/post/transcript', params),
    post: (params) => this._request('/facebook/post', params),
    postComments: (params) => this._request('/facebook/post/comments', params),
    group: (params) => this._request('/facebook/group', params),
    groupPosts: (params) => this._request('/facebook/group/posts', params)
  };

  facebookMarketplace = {
    locationSearch: (params) => this._request('/facebook/marketplace/location/search', params),
    search: (params) => this._request('/facebook/marketplace/search', params),
    item: (params) => this._request('/facebook/marketplace/item', params)
  };

  facebookAdLibrary = {
    ad: (params) => this._request('/facebook/adlibrary/ad', params),
    adTranscript: (params) => this._request('/facebook/adlibrary/ad/transcript', params),
    searchAds: (params) => this._request('/facebook/adlibrary/search/ads', params),
    companyAds: (params) => this._request('/facebook/adlibrary/company/ads', params)
  };

  amazon = {
    search: (params) => this._request('/amazon/search', params),
    storefront: (params) => this._request('/amazon/storefront', params),
    product: (params) => this._request('/amazon/product', params)
  };

  api = {
    get: (path, params) => this._request(path, params)
  };
}

module.exports = SignalQub;