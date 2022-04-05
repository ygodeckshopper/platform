export interface card_set {
    set_name: string;
    set_code: string;
    set_rarity: string;
    set_rarity_code: string;
    set_price: string;
}

export interface card_images {
    id: number;
    image_url: string;
    image_url_small: string;
}

export interface card_prices {
    cardmarket_price: string;
    tcgplayer_price: string;
    ebay_price: string;
    amazon_price: string;
    coolstuffinc_price: string;
}

export interface card  {
    id: number;
    name: string;
    desc: string;
    atk?: number;
    def?: number;
    level?: number;
    race?: string;
    attribute?: string;
    archetype?: string;
    sets: card_set[];
    type: string;
    card_images: card_images[];
    card_prices: card_prices[];
}

export interface IDeck {
    main: string[];
    extra: string[];
    side: string[];
}

export interface IDeckData {
    main: { monsters: card[], spells: card[], traps: card[] };
    extra: card[];
    side: { monsters: card[], spells: card[], traps: card[] };
}
