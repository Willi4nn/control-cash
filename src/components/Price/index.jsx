import React from "react";
import { Text } from "native-base";

export default function Price({ value, color, fontSize }) {
  const isNegative = value < 0;
  const absoluteValue = Math.abs(value);
  const formattedPrice = absoluteValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const displayPrice = isNegative ? `- ${formattedPrice}` : formattedPrice;

  return <Text color={color} fontSize={fontSize}>{displayPrice}</Text>;
}
