import { MusicSign } from "./MusicSign";
import { Mute } from "./Mute";

const iconMap = {
  music: MusicSign,
  mute: Mute,
};

type Props = {
  icon: "music" | "mute";
  className?: string;
};

export const IconFactory = ({ icon, className }: Props) => {
  const IconComp = iconMap[icon];
  return <IconComp className={className} />;
};
