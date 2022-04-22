import Link from "next/link";

interface ItemProps {
  title: string;
  id: number;
  price: number;
  comments: number;
  hearts: number;
}

export default function Item({
  title,
  price,
  comments,
  hearts,
  id,
}: ItemProps) {
  return null;
}
