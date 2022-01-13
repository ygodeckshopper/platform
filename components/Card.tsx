import useCard from '../hooks/useCard';

export function Card ({id}: CardProps) {
    const [card, setCard] = useCard(id);
    console.log(card);
    return (<></>)
}

export interface CardProps {
    id: string;
}

export default Card;