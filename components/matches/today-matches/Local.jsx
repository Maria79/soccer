import Image from "next/image";

export const Local = ({ team, shield }) => {
  return (
    <div className="flex gap-x-2 items-center">
      <div>{team}</div>
      <div>
        <Image src={shield} alt={team} width={20} height={20} />
      </div>
    </div>
  );
};
