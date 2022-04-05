import Image from 'next/image';
import { card } from '../config/types';

export function Card ({card, variant = "default"}: CardProps) {
    return (
        <div className={"flex items-center justify-center"}>
            {card ?
                <Image
                    src={variant === "small" ? card.card_images[0].image_url_small : card.card_images[0].image_url}
                    alt={card.name} width={381} height={557}
                /> :
                <div className={"border-t-2 border-l-2 rounded-full border-teal-300 animate-spin h-16 w-16"} />
            }
        </div>
    )
}

export interface CardProps {
    card: card;
    variant?: "small" | "default"
}

export default Card;