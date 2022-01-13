import Image from 'next/image';
import useCard from '../hooks/useCard';

export function Card ({id}: CardProps) {
    const [card, setCard] = useCard(id);
    console.log(card);
    return (
        <div className={""}>
            This is my card
        </div>
    )
}

export interface CardProps {
    id: string;
}

export default Card;