import { Image } from "native-base";

export default function Logo() {
  return (
    <Image
      source={require("../../../assets/icon.png")}
      accessibilityLabel="Icon"
      alt="logo"
      style={{ width: 50, height: 50, marginRight: 20 }}
    />
  )
}