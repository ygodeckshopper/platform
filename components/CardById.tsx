import Image from 'next/image';
import useCard from '../hooks/useCard';

export function CardById ({id, variant = "default"}: CardByIdProps) {
    const card = useCard(id);
    console.log(card);
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

export interface CardByIdProps {
    id: string;
    variant?: "small" | "default"
}

export default CardById;